

import React from 'react'
import loginImage from "../../assets/Images/framelogin.png"


function AuthFormTemplate() {
    return (
        <div className='2xs:tw-flex  tw-justify-evenly tw-flex-row-reverse tw-flex-wrap tw-space-y-[64px] tw-items-end'>
            <div className='tw-max-w-[558px] sm:tw-min-w-[558px]  tw-h-[580px]  tw-bg-orange-30 xs:tw-px-4 tw-px-3 '>
                <img src={loginImage} alt='Login Image' className='tw-w-full tw-h-full tw-object-cover tw-shadow-md tw-shadow-[#ffffffd9] xl:tw-shadow-none ' />
            </div>
            <div className=' tw-bg-richblack-00 tw-bg-red-10   tw-max-w-[508px] '>
                <div className='tw-flex tw-flex-col tw-gap-y-5 tw-bg-red-5 xs:tw-px-4 tw-px-5'>
                    <h1 className='tw-text-[30px] tw-font-[600] tw-text-richblack-5'>Welcome Back</h1>
                    <p className='sm:tw-text-[18px] tw-text-richblack-100 tw-text-richblack-100 tw-font-[400]'>
                        Build skills for today, tomorrow, and beyond. <span
                            className='tw-text-blue-100 tw-text-[16px] tw-font-[500] tw-font-edu-sa'>Education for future-proof,
                            your career.</span>
                    </p>
                </div>
                <div className=' tw-mt-10 tw-text-[16px] tw-font-[500] tw-bg-[#161d29] tw-w-fit tw-mx-[10px]    tw-shadow-sm tw-fle tw-flex-wrap tw-gap-2 tw-shadow-[#ffffffd9] tw-rounded-[40px]'>
                    <button className='tw-px-[30px] tw-py-[15px] tw-w-full xs:tw-w-fit tw-bg-richblack-900 tw-text-white xs:tw-rounded-[80px] tw-rounded-tl-[40px] tw-rounded-tr-[40px]  '>
                        Student
                    </button>
                    <button className='tw-px-[30px] tw-py-[15px] tw-w-full xs:tw-w-fit tw-bg-richblack-800 tw-text-[#999daa] tw-text-white xs:tw-rounded-[80px] tw-rounded-bl-[40px] tw-rounded-br-[40px] '>
                        Instructor
                    </button>
                </div>
                <div className='tw-mt-[45px] xs:tw-px-4 tw-px-5'>
                    <form className='tw-flex tw-flex-col tw-gap-y-6'>
                        <div className='tw-flex tw-flex-col tw-gap-y-3'>
                            <label className='tw-text-richblack-5 tw-text-[16px]'>Email Address <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                            <input type='email' placeholder='Enter email address' className='tw-rounded-[8px] tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none ' />
                        </div>
                        <div className='tw-flex tw-flex-col tw-gap-y-3'>
                            <label className='tw-text-richblack-5 tw-text-[16px]'>Password <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                            <input type='password' placeholder='Enter your Password' className='tw-rounded-[8px] tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none ' />
                            <p className='tw-text-right tw-text-blue-100 tw-text-[13px] tw-mt-2 '>Forgot password</p>
                        </div>
                        <div className='tw-mt-5'>
                            <input type='submit' value="Sign in" className='tw-p-[12px] tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[18px] tw-font-[500]' />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AuthFormTemplate