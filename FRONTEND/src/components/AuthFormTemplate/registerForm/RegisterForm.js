

import React, { useState } from 'react'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

function RegisterForm({ usertype }) {
    const [visible, setVisible] = useState(false);
    const [visibleEye2, setVisibleEye2] = useState(false);


    const handleVisible = () => {
        setVisible((prev) => {
            return !prev
        });
    }

    const handleVisible2 = () => {
        setVisibleEye2((prev) => {
            return !prev
        });
    }

    return (
        <>
            <div className='tw-grid tw-grid-cols-1 btnalign:tw-grid-cols-2 tw-gap-y-6 tw-gap-x-6 tw-justify-center '>
                <div className='tw-flex tw-flex-col tw-gap-y-2'>
                    <label htmlFor='firstname' className='tw-text-richblack-5 tw-text-[16px]'>First Name <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                    <input type='text' id='firstname' placeholder='Enter first name' className='tw-rounded-[8px] tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none ' />
                </div>
                <div className='tw-flex tw-flex-col tw-gap-y-2'>
                    <label htmlFor='lastname' className='tw-text-richblack-5 tw-text-[16px]'>Last Name <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                    <input type='text' id='lastname' placeholder='Enter Last name' className='tw-rounded-[8px] tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none ' />
                </div>
            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-3'>
                <label htmlFor='email' className='tw-text-richblack-5 tw-text-[16px]'>Email Address <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                <input type='email' id='email' placeholder='Enter email address' className='tw-rounded-[8px] tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none ' />
            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-3'>
                <label htmlFor='phonenumber' className='tw-text-richblack-5 tw-text-[16px]'>Phone Number <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                <div className='tw-flex tw-gap-x-5'>
                    <select className='tw-rounded-[8px] tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none ' >
                        <option value={91}>+91</option>
                        <option value={92}>+92</option>
                        <option value={93}>+93</option>
                        <option value={94}>+94</option>
                        <option value={95}>+95</option>
                    </select>
                    <input type='tel' id='phonenumber' placeholder='1234 567890' className='tw-rounded-[8px] tw-w-full tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '  />
                </div>
               
            </div>
            <div className='tw-grid tw-grid-cols-1 btnalign:tw-grid-cols-2 tw-gap-y-6 tw-gap-x-6 tw-justify-center '>
                <div className='tw-flex tw-flex-col tw-gap-y-3 tw-relative'>
                    <label htmlFor='password' className='tw-text-richblack-5 tw-text-[16px]'>Create Password <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                    <input id='password' type={visible ? 'text' : 'password'} placeholder='Enter Password' className='tw-rounded-[8px] tw-p-[12px] tw-pr-[35px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none ' />
                    <span className='tw-w-[25px] tw-aspect-square tw-absolute tw-block tw-right-[3.5%]  tw-top-[55%] tw-ml-10'>
                        {
                            !visible ?
                                <LuEye className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible} />
                                : <LuEyeOff className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible} />
                        }
                    </span>
                </div>
                <div className='tw-flex tw-flex-col tw-gap-y-3 tw-relative'>
                    <label htmlFor='confirmpassword' className='tw-text-richblack-5 tw-text-[16px]'>Confirm Password <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                    <input id='confirmpassword' type={visibleEye2 ? 'text' : 'password'} placeholder='Enter Password' className='tw-rounded-[8px] tw-p-[12px] tw-pr-[35px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none ' />
                    <span className='tw-w-[25px] tw-aspect-square tw-absolute tw-block tw-right-[3.5%]  tw-top-[55%] tw-ml-10'>
                        {
                            !visibleEye2 ?
                                <LuEye className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible2} />
                                : <LuEyeOff className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible2} />
                        }
                    </span>
                </div>
            </div>

            <div className='tw-mt-5'>
                <input type='submit' value="Sign in" className='tw-p-[12px] tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[18px] tw-font-[500]' />
            </div>
        </>
    )
}

export default RegisterForm