import React, { useState, useRef } from 'react'
import CourseTip from './CourseTip'
import { FaChevronRight } from "react-icons/fa6";
import { FiUploadCloud } from "react-icons/fi";
import { queryClient } from "../../index"



function CourseAddLayout() {
    const { data: categories } = queryClient.getQueryData('categories');
    console.log(categories)

    const [Taginput, setTagInput] = useState('');
    const [tags, setTags] = useState([]);

    const [requirementinput, setRequirementInput] = useState("");
    const [requirements, setRequirements] = useState([]);

    const [imagefile, setImageFile] = useState(null);
    const [imgpreview, setImgPreview] = useState(null);

    const inputfile = useRef(null)

    function handleChange(e) {
        const { value } = e.target;
        setTagInput(value);
    }

    function handleKeyDown(e) {
        const { key } = e;
        const trimmedInput = Taginput.trim();
        if (key === 'Enter' && trimmedInput.length) {
            e.preventDefault();
            setTags((prev) => [...prev, trimmedInput]);
            setTagInput('');
        }
    }

    function handleTagDelete(index) {
        setTags(prev => prev.filter((tag, i) => i !== index))
    }

    function addRequirement() {
        const trimmedinput = requirementinput.trim();
        setRequirements(prev => [...prev, trimmedinput])
        setRequirementInput("")
    }

    function handleDeleteRequirements(index) {
        setRequirements(prev => prev.filter((el, i) => i !== index))
    }

    function InvokeFileUpload() {
        inputfile.current.click();
    }

    function handleFileChange(e) {
        let file = e.target.files[0]
        setImageFile(file);
        setImgPreview(URL.createObjectURL(file));
    }

    function handleImgCancel(e) {
        setImageFile(null)
        setImgPreview(null)
    }

    function handleOndragOver(event) {
        event.preventDefault();

    }

    function handleOnDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        let imagefile = event.dataTransfer.files[0];
        setImageFile(imagefile);
        setImgPreview(URL.createObjectURL(imagefile));
    }

    return (
        <div className='tw-pt-[40px] '>

            <h1 className='tw-text-3xl tw-text-richblack-5 tw-font-medium tw-mb-14'>Add Course</h1>
            <div className='tw-flex tw-flex-col lg:tw-flex lg:tw-flex-row lg:tw-justify-between  tw-justify-center tw-items-center lg:tw-items-start tw-gap-y-5 tw-flex-wrap'>

                    <div className=' tw-w-full xl:tw-basis-[580px]  tw-bg-green-500'>

                        <form id='addcourse' className='tw-flex tw-flex-col tw-gap-y-7 tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-[#161d29] tw-p-5'>
                            <div className='tw-flex tw-flex-col'>
                                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Title <sup className='tw-text-pink-400'>*</sup></label>
                                <input type='text' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Course Title' />
                            </div>
                            <div className='tw-flex tw-flex-col'>
                                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Short Description<sup className='tw-text-pink-400'>*</sup></label>
                                <textarea placeholder='Enter Description' className='tw-w-full tw-min-h-[120px] formshadow tw-bg-richblack-700 tw-resize-none tw-text-[#999DAA]' />
                            </div>
                            <div className='tw-flex tw-flex-col'>
                                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Price<sup className='tw-text-pink-400'>*</sup></label>
                                <input type='number' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Course Price' />
                            </div>
                            <div className='tw-flex tw-flex-col'>
                                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Category<sup className='tw-text-pink-400'>*</sup></label>
                                <select className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-full tw-w-full'>
                                    <option value="" disabled hidden>Choose</option>
                                    {
                                        categories.map((el, indx) => {
                                            return <option key={indx} value={el.name}>{el.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='tw-flex tw-flex-col'>
                                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Tags<sup className='tw-text-pink-400'>*</sup></label>
                                <div id='tag-area' className='tw-flex tw-flex-wrap tw-mb-2 '>
                                    {
                                        tags.map((el, indx) => {
                                            return <div key={indx} className='tw-m-1 tw-flex tw-items-center tw-rounded-full tw-bg-yellow-400 tw-px-2 tw-py-1 tw-text-sm tw-text-richblack-5'>
                                                {el}
                                                <button type='button' className='tw-ml-2 focus:tw-outline-none' onClick={() => handleTagDelete(indx)}>&times;</button>
                                            </div>
                                        })
                                    }

                                </div>
                                <input type="" className='tw-bg-richblack-700 tw-text-[#999DAA] formshadow' placeholder='Enter Tags and press enter' value={Taginput} onChange={handleChange} onKeyDown={handleKeyDown} />
                            </div>
                            <div className='tw-fex tw-flex-col'>
                                <label className='tw-text-sm tw-text-richblack-5'>Course Thumbnail<sup className='tw-text-pink-400'>*</sup></label>
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
                                                <input type='file' className='tw-hidden' ref={inputfile} onChange={handleFileChange} />
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
                            </div>
                            <div className='tw-flex tw-flex-col'>
                                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Benefits of the course<sup className='tw-text-pink-400'>*</sup></label>
                                <textarea placeholder='Enter benefits of the course' className='tw-w-full tw-min-h-[120px] formshadow tw-bg-richblack-700 tw-text-[#999DAA] tw-resize-none ' />
                            </div>
                            <div className='tw-flex tw-flex-col'>
                                <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Requirements / Instructions <sup className='tw-text-pink-400'>*</sup></label>
                                <input type='text' value={requirementinput} className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Requirements or Instructions' onChange={(e) => setRequirementInput(e.target.value)} />
                                <button type='button' className='tw-mt-3 tw-font-semibold tw-text-yellow-50 tw-p-1 tw-mr-auto' onClick={addRequirement} >Add</button>
                                <div id='instructions-area' className='tw-max-w-[500px'>
                                    <ul className='tw-flex tw-flex-col tw-gap-y-1  tw-break-all'>
                                        {
                                            requirements.map((el, indx) => {
                                                return <li key={indx} className='tw-text-gray-400 tw-ml-1'>{el}<button type='button' className='tw-cursor-pointer tw-p-1 tw-ml-2 tw-text-xs tw-text-pure-greys-300' onClick={() => handleDeleteRequirements(indx)} >clear</button></li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <button className='tw-ml-auto  tw-flex tw-items-center tw-bg-yellow-50 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-richblack-900 '>
                                Next
                                <FaChevronRight />
                            </button>
                        </form>

                    </div>

                    <div className=''>
                        <CourseTip />
                    </div>

            </div>

        </div>
    )
}

export default CourseAddLayout