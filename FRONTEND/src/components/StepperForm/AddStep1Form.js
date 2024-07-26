
import React, { useState, useRef, useEffect } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form';
import { FaChevronRight } from "react-icons/fa6";
import { FiUploadCloud } from "react-icons/fi";
import { queryClient } from "../../index"
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../../slices/addcourseSlice';
import { addMyCourse, EditMyCourse } from '../../services/operations/courseFunction';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';


function AddStep1Form() {
    const { register, trigger, control, getValues, setValue, formState: { errors, touchedFields }, reset } = useFormContext();
    const globalCourseState = useSelector((state) => state?.addcourse);
    const dispatch = useDispatch();

    const query = useQueryClient();                       //* Reqct Query if we add course update in my courses cache using Invalidate Queries
    query.invalidateQueries({ queryKey: "mycourses" })
    const [SubmitCalled, setSubmitCalled] = useState(false);
    const [fileError, setFileError] = useState(false);


    const { data: categories } = queryClient.getQueryData('categories');
    const [imagefile, setImageFile] = useState(null);
    const [imgpreview, setImgPreview] = useState(null);
    const inputfile = useRef();

    //* For Tag 
    const [Taginput, setTagInput] = useState('');  //* Tag Input

    const { fields: tags, append, remove, replace: replaceTags } = useFieldArray({
        control,
        name: 'tag',
        rules: {
            minLength: 1,
            required: true
        }

    })

    function handleChange(e) {
        const { value } = e.target;
        setTagInput(value);
    }

    function handleKeyDown(e) {
        const { key } = e;
        const trimmedInput = Taginput.trim();
        if (key === 'Enter' && trimmedInput.length) {
            e.preventDefault();
            getValues('tag');
            append(trimmedInput);
            setTagInput("")
        }
    }

    //* Tag End

    //* For Instructions
    const [requirementinput, setRequirementInput] = useState(""); //* Requirement Input
    const { fields: instructions, append: addinstructions, remove: reminstructions, replace: replaceInstructions } = useFieldArray({
        control,
        name: 'instructions',
        rules: {
            minLength: 1,
            required: true
        }
    }
    )

    function addRequirement() {
        const trimmedinput = requirementinput.trim();
        if (trimmedinput.length == 0) {
            return;
        }
        else {
            addinstructions(trimmedinput);
            setRequirementInput("")
        }
    }

    //* For Instructions End

    function InvokeFileUpload() {
        inputfile?.current?.click();
    }

    function handleFileChange(e) {
        let file = e.target.files[0]
        setImageFile(file);
        setImgPreview(URL.createObjectURL(file));
        console.log(imgpreview)
        setFileError(false)
        // setFileMissing(false)
    }

    function handleImgCancel(e) {
        setImageFile(null);
        setImgPreview(null);
    }


    function handleOndragOver(event) {
        event.preventDefault();
    }

    function handleOnDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        let imagefile = event.dataTransfer.files[0];
        // setImageFile(imagefile);
        // setImgPreview(URL.createObjectURL(imagefile));
        // setFileMissing(false)
        // setCourseSubmit(true)
    }


    async function AddformSubmit() {
        setSubmitCalled(true)

        // console.log("Fields", fields)
        // console.log(getValues('tag'));
        // console.log(getValues('instructions'))

        //* This is for so you enter enter whitespaces and submit

        setValue('courseName', getValues('courseName').trim());
        setValue('courseDescription', getValues('courseDescription').trim());
        setValue('whatYouWillLearn', getValues('whatYouWillLearn').trim());
        if (!imagefile) {
            const isValid = await trigger(['courseName', 'courseDescription', 'price', 'category', 'whatYouWillLearn', 'instructions', 'tag'])
            setFileError(true)
            setSubmitCalled(false)
            return
        }
        const isValid = await trigger(['courseName', 'courseDescription', 'price', 'category', 'whatYouWillLearn', 'instructions', 'tag'])

        if (isValid) {

            const formFields = getValues();
            const formObject = { ...formFields, tag: JSON.stringify(getValues('tag')), instructions: JSON.stringify(getValues('instructions')), thumbnailImage: imagefile };
            const courseAddResult = await addMyCourse(formObject, dispatch);
            if (courseAddResult.status === 'Success') {
                //* This query will update the myCourses as well
                dispatch(setStep(2));
                query.resetQueries({ queryKey: "mycourses" });
            }


        }
        setSubmitCalled(false)
    }

    async function updateAddContent() {
        setSubmitCalled(true);

        //* This is for so you enter enter whitespaces and submit
        setValue('courseName', getValues('courseName').trim());
        setValue('courseDescription', getValues('courseDescription').trim());
        setValue('whatYouWillLearn', getValues('whatYouWillLearn').trim());

        console.log(imagefile)
        console.log(imgpreview)
        if (!imgpreview) {
            const isValid = await trigger(['courseName', 'courseDescription', 'price', 'category', 'whatYouWillLearn', 'instructions', 'tag'])
            setFileError(true)
            setSubmitCalled(false)
            return
        }
        //* To tirgger error if any field is missing
        const isValid = await trigger(['courseName', 'courseDescription', 'price', 'category', 'whatYouWillLearn', 'instructions', 'tag'])

        if (isValid) {
            const formFields = getValues();
            const formObject = { ...formFields, tag: JSON.stringify(getValues('tag')), instructions: JSON.stringify(getValues('instructions')), thumbnailImage: imagefile, courseIdToEdit: globalCourseState?.course?._id };
            console.log("Form Object", formObject)
            const courseEditResult = await EditMyCourse(formObject, dispatch);
            if (courseEditResult?.status === 'Success') {
                //* This query will update the myCourses as well
                dispatch(setStep(2));
            }

            setSubmitCalled(false);
        }


    }



    return (
        <>
            <div className='tw-flex tw-flex-col'>
                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Title <sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
                <input type='text' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Course Title'
                    {...register('courseName', {
                        required: { value: true, message: 'Course name is required' },
                    })}
                />
                {
                    errors.courseName && errors.courseName.type === 'required' &&
                    <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>{errors.courseName?.message}<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                }
            </div>
            <div className='tw-flex tw-flex-col'>
                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Short Description<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
                <textarea placeholder='Enter Description' className='tw-w-full tw-min-h-[120px] formshadow tw-bg-richblack-700 tw-resize-none tw-text-[#999DAA]'
                    {...register('courseDescription', {
                        required: { value: true, message: 'Course description is required' }
                    })}
                />
                {
                    errors.courseDescription && errors.courseDescription.type === 'required' &&
                    <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>{errors.courseDescription?.message}<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                }
            </div>

            <div className='tw-flex tw-flex-col'>
                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Price<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
                <input type='number' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Course Price'
                    {...register('price', {
                        required: { value: true, message: 'Price is required' }
                    })}
                />
                {
                    errors.price && errors.price.type === 'required' &&
                    <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>{errors.price?.message}<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                }
            </div>

            <div className='tw-flex tw-flex-col'>
                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Category<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
                <select className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-full tw-w-full'
                    defaultValue=""
                    {...register('category', {
                        required: { value: true, message: "Category is required" },
                    })}
                >
                    <option value="" disable hidden >
                        Choose a Category
                    </option>
                    {
                        categories.map((el, indx) => {
                            return <option key={indx} value={el.name}>{el.name}</option>
                        })
                    }



                </select>
                {
                    errors.category && errors.category.type === 'required' &&
                    <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>{errors.category?.message}<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                }
            </div>

            <div className='tw-flex tw-flex-col'>
                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Tags<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
                <div id='tag-area' className='tw-flex tw-flex-wrap tw-mb-2 '>

                    {
                        tags?.map((el, indx) => {
                            return <div key={el.id} className='tw-m-1 tw-flex tw-items-center tw-rounded-full tw-bg-yellow-400 tw-px-2 tw-py-1 tw-text-sm tw-text-richblack-5'>
                                {
                                    (Object.values(el).slice(0, -1)).join("")
                                }
                                <button type='button' className='tw-ml-2 focus:tw-outline-none' onClick={() => remove(indx)}>&times;</button>

                            </div>
                        })
                    }


                </div>
                <input type="text" value={Taginput} className='tw-bg-richblack-700 tw-text-[#999DAA] formshadow' placeholder='Enter Tags and press enter' onChange={handleChange} onKeyDown={handleKeyDown}

                />
                {
                    errors.tag && <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>Atleast one tag required<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                }
            </div>

            <div className='tw-fex tw-flex-col'>
                <label className='tw-text-sm tw-text-richblack-5'>Course Thumbnail<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>

                <div id='filebox' className='tw-mt-5 tw-bg-richblack-700 tw-flex tw-min-h-[250px] tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-md tw-border-2 tw-border-dotted tw-border-richblack-500'
                    onClick={InvokeFileUpload}
                    onDragOver={handleOndragOver}
                    onDrop={handleOnDrop}
                >
                    {

                        imgpreview ?

                            <div className='tw-flex tw-flex-col tw-pb-3'>
                                <img src={imgpreview || `https://images.unsplash.com/photo-1603892853112-a957bfbd6941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVpZ2h0fGVufDB8fDB8fHww`} className='tw-p-3 tw-object-cover tw-w-full tw-h-full' />
                                <button type='button' className='tw-mt-3 tw-text-richblack-400 tw-cursor-pointer tw-underline  tw-py-1' onClick={handleImgCancel}>Cancel</button>
                            </div>
                            :
                            <div className='tw-flex tw-justify-center tw-flex-col tw-items-center  '>
                                <input type='file' className='tw-hidden'
                                    ref={inputfile}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    name='as'
                                />
                                <div className='tw-w-14 tw-grid tw-place-items-center tw-rounded-full tw-bg-pure-greys-800 tw-aspect-square'>
                                    <FiUploadCloud className='tw-text-2xl tw-text-yellow-50' />
                                </div>
                                <div className='tw-max-w-[200px] tw-text-center tw-text-sm tw-text-richblack-200 tw-mt-2'>
                                    <h1>Drag and drop an image, or</h1>
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
                    fileError &&
                    <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>{ }Thumbnail is required<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                }

            </div>

            <div className='tw-flex tw-flex-col'>
                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Benefits of the course<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
                <textarea placeholder='Enter benefits of the course' className='tw-w-full tw-min-h-[120px] formshadow tw-bg-richblack-700 tw-text-[#999DAA] tw-resize-none '
                    {...register('whatYouWillLearn', {
                        required: { value: true, message: "Benefits of the course is required" }
                    })}
                />
                {
                    errors.whatYouWillLearn && errors.whatYouWillLearn.type === 'required' &&
                    <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>{errors.whatYouWillLearn?.message}<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                }
            </div>
            <div className='tw-flex tw-flex-col'>
                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Requirements / Instructions <sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
                <input type='text' value={requirementinput} className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Requirements or Instructions'
                    onChange={(e) => setRequirementInput(e.target.value)}

                />
                {
                    errors.instructions && <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>Atleast one Instruction required<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
                }

                <button type='button' className='tw-mt-3 tw-font-semibold tw-text-yellow-50 tw-p-1 tw-mr-auto tw-mb-5' onClick={addRequirement} >Add</button>
                <div id='instructions-area' className='tw-max-w-[500px'>
                    <ul className='tw-flex tw-flex-col tw-gap-y-1  tw-break-all'>
                        {
                            instructions?.map((el, indx) => {
                                return <li key={indx} className='tw-text-gray-400 tw-ml-1'>{Object.values(el).slice(0, -1).join("")}<button type='button' className='tw-cursor-pointer tw-p-1 tw-ml-2 tw-text-xs tw-text-pure-greys-300' onClick={() => reminstructions(indx)} >clear</button></li>

                            })


                        }
                    </ul>
                </div>
                <div className='tw-flex tw-justify-end'>

                    <div className='tw-flex tw-gap-x-4 tw-justify-end'>
                        {
                            globalCourseState?.editCourse ?
                                <>
                                    <button className='tw-ml-aut  tw-flex tw-items-center tw-bg-gray-700 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-white ' onClick={() => dispatch(setStep(2))}>
                                        Continue without Saving
                                    </button>

                                    {!SubmitCalled ?
                                        <button className='tw-ml-aut  tw-flex tw-items-center tw-bg-yellow-50 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-richblack-900 ' onClick={() => updateAddContent()}>
                                            Update
                                            <FaChevronRight />
                                        </button>
                                        :
                                        <button className='tw-ml-aut  tw-flex tw-items-center tw-bg-yellow-400 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-richblack-900 ' >
                                            Update
                                            <FaChevronRight />
                                        </button>
                                    }
                                </>

                                : !SubmitCalled ?
                                    <button className='tw-ml-aut  tw-flex tw-items-center tw-bg-yellow-50 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-richblack-900 ' onClick={() => AddformSubmit()}>
                                        Submit
                                        <FaChevronRight />
                                    </button>
                                    :
                                    <button className='tw-ml-aut  tw-flex tw-items-center tw-bg-yellow-400 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-richblack-900 ' >
                                        Submit
                                        <FaChevronRight />
                                    </button>
                        }
                    </div>
                </div >
            </div>
        </>
    )






}

export default AddStep1Form


