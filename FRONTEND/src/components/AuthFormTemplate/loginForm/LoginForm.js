

import React,{useState} from 'react'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

function LoginForm({usertype}) {
    const [visible, setVisible] = useState(false);
    console.log(usertype)


    const handleVisible = () => {
        setVisible((prev) => {
            return !prev
        });
    }

    return (
        <>
            <div className='tw-flex tw-flex-col tw-gap-y-3'>
                <label className='tw-text-richblack-5 tw-text-[16px]'>Email Address <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                <input type='email' placeholder='Enter email address' className='tw-rounded-[8px] tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none ' />
            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-3 tw-relative'>
                <label className='tw-text-richblack-5 tw-text-[16px]'>Password <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                <input type={visible?'text':'password'} placeholder='Enter your Password' className='tw-rounded-[8px] tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none ' />
                <p className='tw-text-right tw-text-blue-100 tw-text-[13px] tw-mt-2 '>Forgot password</p>
                <span className='tw-w-[31px] tw-aspect-square tw-absolute tw-block tw-right-[2%]  tw-top-[36%] tw-ml-10'>
                    {
                        !visible ?
                            <LuEye className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible} />
                            : <LuEyeOff className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible} />
                    }
                </span>
            </div>
            <div className='tw-mt-5'>
                <input type='submit' value="Sign in" className='tw-p-[12px] tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[18px] tw-font-[500]' />
            </div>
        </>
    )
}

export default LoginForm