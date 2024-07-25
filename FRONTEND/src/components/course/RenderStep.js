
import React from 'react'
import { FaCheck } from "react-icons/fa";
import { useSelector } from 'react-redux';


function RenderStep() {

    const { step } = useSelector((state) => state.addcourse);

    return (
        <div className='tw-flex tw-items-center 2xs:tw-px-[40px]  tw-mb-10'>
            <div className='tw-flex tw-flex-col tw-gap-y-[10px] tw-pt-[40px] tw-px-1'>
                <div className='tw-flex tw-flex-col  tw-items-center tw-gap-y-2'>
                    {
                        step > 1 ?
                            <div className='tw-w-[40px] tw-aspect-square tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-yellow-100 tw-bg-richblack-800 tw-text-yellow-5'>
                                <FaCheck />
                            </div>
                            :
                            <div className='tw-w-[40px] tw-aspect-square tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-richblack-600 tw-bg-richblack-800 tw-text-richblack-300'>1</div>
                    }
                </div>
                {
                    step > 1 ?
                        <label className='tw-text-center tw-text-xs tw-text-yellow-100'>Course Information</label>
                        :
                        <label className='tw-text-center tw-text-xs'>Course Information</label>
                }
            </div>
            {
                step > 1 ?
                    <div className=' tw-w-[100%] tw-mr-3 tw-border-dashed tw-border-b-2 tw-border-yellow-200' />
                    :
                    <div className=' tw-w-[100%] tw-mr-3 tw-border-dashed tw-border-b-2 tw-border-richblack-700' />

            }
            <div className='tw-flex tw-flex-col tw-gap-y-[10px] tw-pt-[40px] tw-px-1'>
                <div className='tw-flex tw-flex-col  tw-items-center tw-gap-y-2'>
                    {
                        step > 2 ?
                            <div className='tw-w-[40px] tw-aspect-square tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-yellow-100 tw-bg-richblack-800 tw-text-yellow-5'>
                                <FaCheck />
                            </div>
                            :
                            <div className='tw-w-[40px] tw-aspect-square tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-richblack-600 tw-bg-richblack-800 tw-text-richblack-300'>2</div>
                    }

                </div>
                {
                    step > 2 ?
                        <label className='tw-text-center tw-text-xs tw-text-yellow-100'>Course Builder</label>
                        :
                        <label className='tw-text-center tw-text-xs'>Course Builder</label>
                }
            </div>
            {
                step > 2 ?
                    <div className=' tw-w-[100%] tw-mr-3 tw-border-dashed tw-border-b-2 tw-border-yellow-200' />
                    :
                    <div className=' tw-w-[100%] tw-mr-3 tw-border-dashed tw-border-b-2 tw-border-richblack-700' />

            }
            <div className='tw-flex tw-flex-col tw-gap-y-[10px] tw-pt-[40px] tw-px-1'>
                <div className='tw-flex tw-flex-col  tw-items-center tw-gap-y-2'>
                    <div className='tw-w-[40px] tw-aspect-square tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-richblack-600 tw-bg-richblack-800 tw-text-richblack-300'>3</div>
                </div>
                {
                    step > 3 ?
                        <label className='tw-text-center tw-text-xs tw-text-yellow-100'>Publishing course</label>
                        :
                        <label className='tw-text-center tw-text-xs'>Publishing course</label>
                }

            </div>
        </div>
    )
}

export default RenderStep
