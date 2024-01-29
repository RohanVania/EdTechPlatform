

import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { FaArrowLeft } from "react-icons/fa6";

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const params = useParams();

    const { register, handleSubmit, watch, reset, formState: {
        errors
    } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }


    console.log(params);

    return (
        <div className='tw-bg-richblack-900 tw-mt-[77px] tw-min-h-[92.2vh] tw-flex tw-justify-center tw-items-center tw-relative'>

            <div className='tw-max-w-[500px] tw-px-[10px]  '>
                <h1 className='2xs:tw-text-[22px] sm:tw-text-[30px] tw-font-[600] tw-text-richblack-5'>Choose a new Password</h1>
                <p className='tw-text-[13px] sm:tw-text-[17px] tw-text-richblack-100 tw-mt-[10px] tw-font-[400]'>
                    Almost done, Enter your new password and you are <br />all set.
                </p>

                <form className='tw-mt-[24px] tw-flex tw-flex-col tw-gap-y-[20px]' onSubmit={handleSubmit(onSubmit)} >
                    <div className='tw-flex tw-flex-col'>
                        <label className='tw-text-richblack-5 tw-text-[14px] xs:tw-text-[16px] tw-mb-[20px] tw-font-[300]'>New Password <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                        <input type='text' className=' tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                            {
                            ...register('password', {
                                required: { value: true, message: 'Password is required' },

                            })
                            }
                        />
                        {
                            (errors.password && errors.password.type === 'required' && <p className='tw-text-pink-200 tw-mt-3'>{errors.password.message} <sup className='tw-text-pink-200'>*</sup></p>)
                        }
                    </div>
                    <div className='tw-flex tw-flex-col'>
                        <label className='tw-text-richblack-5 tw-text-[14px] xs:tw-text-[16px] tw-mb-[20px] tw-font-[300]'>Confirm new password <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                        <input type='text' className=' tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                            {
                            ...register('confirmPassword', {
                                required: { value: true, message: "Confirm password is required" },
                                validate: (v) => {
                                    return v === watch('password') || "Password don't match"
                                }
                            })
                            }
                        />
                        {
                            (errors.confirmPassword && errors.confirmPassword.type === 'required' && <p className='tw-text-pink-200 tw-mt-3'>{errors.confirmPassword.message} <sup className='tw-text-pink-200'>*</sup></p>) ||
                            (errors.confirmPassword && errors.confirmPassword.type === 'validate' && <p className='tw-text-pink-200 tw-mt-3'>{errors.confirmPassword.message} <sup className='tw-text-pink-200'>*</sup></p>)
                        }
                    </div>

                    <button onClick={handleSubmit(onSubmit)} className='tw-p-[12px] tw-mt-[30px] tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[15px] xs:tw-text-[18px] tw-font-[500] active:tw-scale-[.9] tw-transition-all tw-disbale' >Reset Password</button>

                </form>
                <p className='tw-text-richblack-5 tw-mt-[30px] tw-flex tw-gap-2 tw-items-center tw-w-fit tw-text-[14px] xs:tw-text-base tw-cursor-pointer ' onClick={() => navigate('/login')}>
                    <FaArrowLeft />
                    Back to Login
                </p>
            </div>

            {/* <p className='tw-text-richblack-5 tw-mt-[30px] tw-flex tw-gap-2 tw-items-center tw-w-fit tw-text-[14px] xs:tw-text-base tw-cursor-pointer '>
                    <FaArrowLeft />
                    Back to Login
                </p> */}

        </div>
    )
}



export default ResetPasswordPage