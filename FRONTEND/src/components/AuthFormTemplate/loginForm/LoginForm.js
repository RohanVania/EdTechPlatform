

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import toast from 'react-hot-toast'
import { apiCaller } from '../../../services/apiconnector';
import {authEndPoints} from "../../../services/apiList"

function LoginForm({ usertype }) {
    const [visible, setVisible] = useState(false);

    const { register, handleSubmit,formState: {
        errors
    } } = useForm();
    const notify =()=> toast('Here is your toast')

    does


    const handleVisible = () => {
        setVisible((prev) => {
            return !prev
        });
    }

    return (
        <form className='tw-flex tw-flex-col tw-gap-y-7' onSubmit={handleSubmit(submitData)}>
            <div className='tw-flex tw-flex-col tw-gap-y-3'>
                <label className='tw-text-richblack-5 tw-text-[16px]'>Email Address <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                <input type='email' placeholder='Enter email address' className='tw-rounded-[8px] tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                    {...register('email', {
                        required: { value: true, message: 'Email address is required' },
                        validate: {
                            length: (v) => v.length <= 30 || 'Email exceeded limit',
                            special: (v) => /^[^@]*@[^@]*$/.test(v) || 'Email should contain atleast @',
                            pattern: (v) => /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(v) || 'Email should be of form a@domain.topdomain'
                        }
                    })}
                />
                {
                    (errors.login_email && errors.login_email.type === 'required' && <p className='tw-text-pink-200'>{errors.login_email.message} <sup className='tw-text-pink-200'>*</sup></p>) ||
                    (errors.login_email && errors.login_email.type === 'length' && <p className='tw-text-pink-200'>{errors.login_email.message} <sup className='tw-text-pink-200'>*</sup></p>) ||
                    (errors.login_email && errors.login_email.type === 'special' && <p className='tw-text-pink-200'>{errors.login_email.message} <sup className='tw-text-pink-200'>*</sup></p>) ||
                    (errors.login_email && errors.login_email.type === 'pattern' && <p className='tw-text-pink-200'>{errors.login_email.message} <sup className='tw-text-pink-200'>*</sup></p>)
                }
            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-3 tw-relative'>
                <label className='tw-text-richblack-5 tw-text-[16px]'>Password <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                <input type={visible ? 'text' : 'password'} placeholder='Enter your Password' className='tw-rounded-[8px] tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                    {...register('password',{
                        required:{value:true,message:'Password is required'}
                    })}
                />
                {
                    errors.login_password && errors.type==='required' && <p className='tw-text-pink-200'>{errors.login_password.message} <sup className='tw-text-pink-200'>*</sup></p>

                }
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
                <button onClick={handleSubmit(submitData)}  className='tw-p-[12px] tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[18px] tw-font-[500] active:tw-scale-[.9] tw-transition-all' >Sign In</button>
            </div>
        </form>
    )
}

export default LoginForm