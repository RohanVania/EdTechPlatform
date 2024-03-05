import React from 'react'
import CourseTip from './CourseTip'
import {queryClient} from "../../index"
function AddCourseLayout() {
    const {data:categories}=queryClient.getQueryData('categories');
    console.log(categories)

    return (
        <div className='tw-pt-[40px] '>

            <h1 className='tw-text-3xl tw-text-richblack-5 tw-font-medium'>Add Course</h1>
            <div className='tw-flex tw-flex-col lg:tw-flex lg:tw-flex-row lg:tw-justify-between  tw-justify-center tw-items-center lg:tw-items-start tw-gap-y-5 tw-flex-wrap'>

                <div className=' tw-w-full tw-basis-[500px]  tw-bg-green-500'>

                    <form id='addcourse' className='tw-flex tw-flex-col tw-gap-y-7 tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-[#161d29] tw-p-5'>
                        <div className='tw-flex tw-flex-col'>
                            <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Title <sup className='tw-text-pink-400'>*</sup></label>
                            <input type='text' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Course Title' />
                        </div>
                        <div className='tw-flex tw-flex-col'>
                            <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Short Description<sup className='tw-text-pink-400'>*</sup></label>
                            <textarea placeholder='Enter Description' className='tw-w-full tw-min-h-[120px] formshadow tw-bg-richblack-700 tw-resize-none ' />
                        </div>
                        <div className='tw-flex tw-flex-col'>
                            <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Price<sup className='tw-text-pink-400'>*</sup></label>
                            <input type='number' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Course Price' />
                        </div>
                        <div className='tw-flex tw-flex-col'>
                            <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Course Category<sup className='tw-text-pink-400'>*</sup></label>
                            <select  className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full'>
                                <option value="" disabled  hidden>Choose</option>
                                {
                                    categories.map((el,indx)=>{
                                        return <option key={indx} value={el.name}>{el.name}</option>
                                    })
                                }
                              
                            </select>

                        </div>
                        <div className='tw-flex tw-flex-col'>
                            <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Benefits of the course<sup className='tw-text-pink-400'>*</sup></label>
                            <textarea placeholder='Enter benefits of the course' className='tw-w-full tw-min-h-[120px] formshadow tw-bg-richblack-700 tw-resize-none ' />
                        </div>
                        <div className='tw-flex tw-flex-col'>
                            <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Requirements / Instructions <sup className='tw-text-pink-400'>*</sup></label>
                            <input type='text' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Requirements or Instructions' />
                        </div>

                    </form>

                </div>

                <div className=''>
                    <CourseTip />
                </div>

            </div>

        </div>
    )
}

export default AddCourseLayout