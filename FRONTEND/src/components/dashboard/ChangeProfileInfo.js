import React from 'react'
import AboutForm from '../aboutPage/AboutForm'

function ChangeProfileInfo() {
    return (
        <div className='tw-flex tw-flex-col tw-w-full sm:tw-px-[48px] tw-flex-wrap sm:tw-py-[32px]  tw-gap-x-5 tw-gap-y-5  tw-p-3 tw-py-[20px] tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-richblack-800  tw-text-richblack-5 tw-bg-[#161d29]'>
           
            <h1 className='tw-text-[17.5px] sm:tw-text-[19px] md:tw-text-[21px] tw-font-[400]'>Profile Information</h1>
            <div className=" tw-w-full">
                <form className='tw-flex tw-flex-col tw-gap-y-7 tw-w-full'>
                    <div className='tw-flex tw-flex-col xs:tw-flex-row tw-gap-x-5 tw-flex-wrap tw-gap-y-4 tw-w-full'>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                               First Name
                            </label>
                            <input type='text' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full' />
                        </div>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                                Last Name
                            </label>
                            <input type='text' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full' />
                        </div>
                    </div>

                    <div className='tw-flex tw-flex-col xs:tw-flex-row tw-gap-x-5 tw-flex-wrap tw-gap-y-4 tw-w-full'>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                               Date of Birth
                            </label>
                            <input type='date' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full' />
                        </div>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                                Gender
                            </label>
                            <input type='text' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full' />
                        </div>
                    </div>

                    <div className='tw-flex tw-flex-col xs:tw-flex-row tw-gap-x-5 tw-flex-wrap tw-gap-y-4 tw-w-full'>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                                Contact Number
                            </label>
                            <input type='text' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full' placeholder='Enter Contact Number' />
                        </div>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                                About
                            </label>
                            <input type='text' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full' placeholder='Enter Bio' />
                        </div>
                    </div>
                  
                </form>
            </div>
        
        </div>
    )
}


export default ChangeProfileInfo