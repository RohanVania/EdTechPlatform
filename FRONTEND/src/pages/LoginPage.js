// Create a Template for Login and Signup
// Adding Pure Css and functionality
// ashdiu



import React from 'react'
import loginImage from "../assets/Images/login.webp"

function LoginPage() {
    return (
        <div id='login' className=' tw-mt-[78px] tw-bg-red-500'>
            <div className='sm:tw-w-11/12 tw-mx-auto tw-bg-yellow-5'>

                <div className='tw-flex tw-justify-around tw-flex-wrap-reverse'>
                    <div className='left tw-w-[528px] tw-bg-purple-900 tw-px-2'>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-bg-red-500'>
                                <h1 className='sm:tw-text-[30px] tw-font-[600] tw-text-richblack-5'>Welcome Back</h1>
                                <p className='sm:tw-text-[18px] tw-text-richblack-100 tw-text-richblack-100 tw-font-[400]'>
                                    Build skills for today, tomorrow, and beyond. <span className='tw-text-blue-100 tw-text-[16px] tw-font-[500] tw-font-edu-sa'>Education for future-proof, your career.</span>
                                </p>
                        </div>
                    </div>
                    <div className='right tw-w-[558px] tw-h-[600px]  tw-bg-orange-300'>
                            <img src={loginImage} alt='Login Image' className='tw-h-full tw-object-cover tw-w-full' />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default LoginPage