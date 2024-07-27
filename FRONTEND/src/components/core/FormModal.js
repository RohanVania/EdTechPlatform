import { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { setLectureModal } from "../../slices/addcourseSlice";
import { useForm, useFormContext } from "react-hook-form";
import { addSubSectionApiCall } from "../../services/operations/subSectionFunction";

import { BigPlayButton, Player } from 'video-react';


function FormModal({ element }) {

    const globalCourseState=useSelector((state)=>state?.addcourse);
    const dispatch = useDispatch();
    const { register, setValue, getValues, formState: { errors }, trigger } = useForm();
    const [videoFile, setVideoFile] = useState(false);
    const [videoPreview, setVideoPreview] = useState(null);
    const [videofileerror, setVideoFileError] = useState(false);
    const [formModalSubmitCalled, setFormModalSubmitCalled] = useState(false)
    const inputfileRef = useRef(null);


    function InvokeFileUpload() {
        inputfileRef?.current?.click();
    }

    function handleOndragOver(event) {
        event.preventDefault();
    }

    function handleOnDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        let imagefile = event.dataTransfer.files[0];

    }


    function handleFileChange(e) {
        let videofile = e.target.files[0];
        const url = URL.createObjectURL(videofile);
        setVideoFile(videofile)
        setVideoPreview(url);

    }



    function removeVideo() {
        setVideoFile(null);
        setVideoPreview(null);
    }

    function cancelFormModal() {
        dispatch(setLectureModal(false))
    }

    async function SubSectionSubmit(time) {
        setFormModalSubmitCalled(true);
        setValue('title', getValues('title').trim());
        setValue('description', getValues('description').trim());

        if (!videoFile) {
            await trigger(["description", "title"]);
            setVideoFileError(true)
            setFormModalSubmitCalled(false)
            return
        }
        const isValid = await trigger(["description", "title"]);
        if (isValid) {

            const formObject = { ...getValues(), sectionId: element._id ,video:videoFile}
            const result = await addSubSectionApiCall(formObject, dispatch);
            console.log(result)
            if (result?.status === 'Success') {
                const updateLectureListInState=globalCourseState?.course?.courseContent;
                dispatch(setLectureModal(false));
            }
        }

        setVideoFileError(false)
    }

    return (
        <>
            <div className="tw-bg-[rgba(0,8,20,0.7)]   tw-fixed tw-top-0 tw-bottom-0 tw-z-[1000] tw-h-full tw-w-full tw-backdrop-blur-[0px] tw-flex tw-justify-center tw-items-center ">

                <div className="tw-max-w-[660px] 3xs:tw-w-[660px] tw-bg-richblack-800   tw-mx-[10px] tw-overflow-hidden  tw-text-white tw-flex tw-flex-col tw-p- tw-rounded-lg tw-border tw-border-richblack-400 tw-gap-y-3">
                    <div className="tw-py-5 tw-px-5   tw-flex tw-justify-between tw-items-center tw-font-semibold tw-text-[18px] tw-bg-richblack-700   ">
                        Add Lecture
                        <div className=" tw-p-1 tw-text-white tw-cursor-pointer" onClick={() => { cancelFormModal() }} >
                            <ImCross />
                        </div>
                    </div>

                    <div>

                        <div className="tw-flex tw-flex-col tw-gap-y-2 tw-mt-2  tw-pb-10 tw-px-2 md:tw-px-4">

                            <div className='tw-fex tw-flex-col'>
                                <label className='tw-text-sm tw-text-richblack-5 '>Lecture Video<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>

                                <div id='filebox' className='tw-mt-5 tw-bg-richblack-700  tw-flex tw-flex-col tw-min-h-[250px] tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-md tw-border-2 tw-border-dotted tw-border-richblack-500'
                                    onClick={InvokeFileUpload}
                                    z onDragOver={handleOndragOver}
                                    onDrop={handleOnDrop}
                                >
                                    {

                                        videoPreview ?

                                            <>
                                                <Player src={videoPreview} className="" playsInline aspectRatio="4:2" >
                                                    <BigPlayButton className="tw-bg-red-400 " position="center">

                                                    </BigPlayButton>
                                                </Player>
                                                <button type='button' className='tw-mt-3 tw-text-richblack-400 tw-cursor-pointer tw-block tw-underline  tw-py-2 tw-px-3' onClick={() => { removeVideo() }}>Cancel</button>
                                            </>

                                            :
                                            <div className='tw-flex tw-justify-center tw-flex-col tw-items-center  '>
                                                <input type='file' className='tw-hidden'
                                                    accept="video/*"
                                                    ref={inputfileRef}
                                                    onChange={handleFileChange}
                                                />
                                                <div className='tw-w-14 tw-grid tw-place-items-center tw-rounded-full tw-bg-pure-greys-800 tw-aspect-square'>
                                                    <FiUploadCloud className='tw-text-2xl tw-text-yellow-50' />
                                                </div>
                                                <div className='tw-max-w-[200px] tw-text-center tw-text-sm tw-text-richblack-200 tw-mt-2'>
                                                    <h1>Drag and drop an Video, or</h1>
                                                    <p>click to <span className='tw-font-semibold tw-text-yellow-50'>Browse</span> a file</p>
                                                </div>
                                                <ul className='tw-text-xs tw-mt-10 tw-flex tw-flex-col tw-gap-y-[7px]  xs:tw-flex-row  xs:tw-items-center xs:tw-gap-x-[25px] tw-list-inside tw-list-disc tw-text-[#999DAA]'>
                                                    <li >Aspect ratio 16:9</li>
                                                    <li>Recommended size 1024x576</li>
                                                </ul>
                                            </div>
                                    }
                                </div>
                                {
                                    videofileerror &&
                                    <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>Video is required<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                                }

                            </div>
                            <div className='tw-flex tw-flex-col'>
                                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Title <sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
                                <input type='text' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Lecture Title'
                                    {...register('title', {
                                        required: { value: true, message: 'Title is required' },
                                    })}

                                />
                                {
                                    errors.title && errors.title.type === 'required' &&
                                    <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>{errors.title?.message}<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                                }
                            </div>
                            <div className='tw-flex tw-flex-col'>
                                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Lecture Description<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
                                <textarea placeholder='Enter description of the lecture' className='tw-w-full tw-min-h-[120px] formshadow tw-bg-richblack-700 tw-text-[#999DAA] tw-resize-none '
                                    {...register('description', {
                                        required: { value: true, message: "Description of the lecture is required" }
                                    })}
                                />
                                {
                                    errors.description && errors.description.type === 'required' &&
                                    <p className='tw-text-sm tw-mt-2 tw-ml-1 tw-text-pink-500'>{errors.description?.message}<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                                }
                            </div>

                            <div className='tw-flex   tw-justify-end tw-gap-x-4'>
                                <button className='tw-ml-aut  tw-flex tw-items-center tw-bg-gray-700 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-white ' onClick={() => { cancelFormModal() }} >
                                    Cancel
                                </button>
                                <button className='tw-ml-aut  tw-flex tw-items-center tw-bg-yellow-50 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-richblack-900 ' onClick={() => { SubSectionSubmit() }} >
                                    Upload
                                </button>
                            </div>
                            

                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default FormModal;




