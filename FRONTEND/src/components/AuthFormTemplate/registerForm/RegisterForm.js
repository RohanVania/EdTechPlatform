

import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { sendOtpApiOperation } from "../../../services/operations/authFunctions"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RegisterForm({ usertype }) {


    const [err,setErr]=useState(false)
    const [errMsg,setErrMsg]=useState("")
    const [visible, setVisible] = useState(false);
    const [visibleEye2, setVisibleEye2] = useState(false);
    const [apiSent, setApiSent] = useState(false);

    const navigate = useNavigate();

    const { register, watch, handleSubmit, reset, formState: {
        errors,
    } } = useForm();

    const dispatch = useDispatch();


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

    let sendOtpResult;
    const submitData = async (formData) => {
        //** Call Otp Api with email and then show otp page */

        setErr(false)
        formData = { ...formData, accountType: usertype };
        sendOtpResult = await sendOtpApiOperation(formData, setApiSent, dispatch);

        if(sendOtpResult?.response?.data.status==='Failed'){
            setErr(true)
            setErrMsg(sendOtpResult?.response.data.msg);
        }else{
            reset();
            navigate('/verify-email')
        }



    }

    return (
        <form className='tw-flex tw-flex-col tw-gap-y-7 ' onSubmit={handleSubmit(submitData)}>
            {err && <h1 className=' tw-text-red-500'>{errMsg}</h1>}
            <div className='tw-grid tw-grid-cols-1 btnalign:tw-grid-cols-2 tw-gap-y-6 tw-gap-x-6 tw-justify-center '>
                <div className='tw-flex tw-flex-col tw-gap-y-2'>
                    <label className='tw-text-richblack-5 tw-text-[16px]'>First Name <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                    <input type='text' placeholder='Enter first name' className=' tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                        {...register('firstName', {
                            required: { value: true, message: "First name is required" },
                            maxLength: { value: 50, message: "First name exceeded 50 limit" }
                        })
                        }
                    />
                    {
                        (errors.firstName && errors.firstName.type === 'required') && (<p className='tw-text-red-400'>{errors.firstName.message} <sup>*</sup></p>) ||
                        (errors.firstName && errors.firstName.type === 'maxLength' && <p className='tw-text-red-400'>{errors.firstName.message} <sup>*</sup></p>)
                    }
                </div>
                <div className='tw-flex tw-flex-col tw-gap-y-2'>
                    <label className='tw-text-richblack-5 tw-text-[16px]'>Last Name <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                    <input type='text' placeholder='Enter Last name' className=' tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                        {...register('lastName', {
                            required: { value: true, message: "Last name is required" },
                            maxLength: { value: 50, message: "Last name exceeded 50 limit" }
                        })
                        }
                    />
                    {
                        (errors.lastName && errors.lastName.type === 'required') && (<p className='tw-text-red-400'>{errors.lastName.message} <sup>*</sup></p>) ||
                        (errors.lastName && errors.lastName.type === 'maxLength' && <p className='tw-text-red-400'>{errors.lastName.message} <sup>*</sup></p>)
                    }

                </div>
            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-3'>
                <label className='tw-text-richblack-5 tw-text-[16px]'>Email Address <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                <input type='text' placeholder='Enter email address' className=' tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                    {...register('email', {
                        required: { value: true, message: 'Email is required' },
                        validate: {
                            length: (v) => v.length <= 30 || 'Email exceeded limit',
                            special: (v) => /^[^@]*@[^@]*$/.test(v) || 'Email should contain atleast @',
                            pattern: (v) => /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(v) || 'Email should be of form a@domain.topdomain'
                        }
                    })}
                />

                {
                    (errors.email && errors.email.type === 'required') && (<p className='tw-text-red-400'>{errors.email.message} <sup>*</sup></p>) ||
                    (errors.email && errors.email.type === 'length') && (<p className='tw-text-red-400'>{errors.email.message} <sup>*</sup></p>) ||
                    (errors.email && errors.email.type === 'special') && (<p className='tw-text-red-400'>{errors.email.message} <sup>*</sup></p>) ||
                    (errors.email && errors.email.type === 'pattern') && (<p className='tw-text-red-400'>{errors.email.message} <sup>*</sup></p>)
                }

            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-3 '>
                <label className='tw-text-richblack-5 tw-text-[16px]'>Phone Number <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                <div className='tw-flex  tw-gap-x-5'>
                    <div className='tw-flex tw-flex-col tw-gap-y-[10px]'>
                        <select defaultValue={""} className='tw-rounded-[8px] tw-p-[12px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                            {...register('countryCode', {
                                required: { value: true, message: 'Select code' },

                            })}
                        >
                            <option value="" disabled hidden>Choose</option>
                            <option value={+1}>+1</option>
                            <option value={+91}>+91</option>
                            <option value={+92}>+92</option>
                            <option value={+93}>+93</option>
                            <option value={+94}>+94</option>
                            <option value={+95}>+95</option>
                        </select>

                        {
                            (errors.countryCode && errors.countryCode.type === "required" && <p className='tw-text-red-400'>{errors.countryCode.message} <sup>*</sup></p>)
                        }
                    </div>
                    <div className='tw-w-full tw-flex tw-flex-col tw-gap-y-2'>
                        <input type='text' placeholder='1234 567890' className=' tw-w-full tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                            {...register('contactNumber', {
                                required: { value: true, message: "Phone number is required" },
                                minLength: { value: 10, message: 'Phone number should be 10 digits' },
                                maxLength: { value: 10, message: 'Phone number exceeded 10 digits' },
                                validate: {
                                    onlyDigit: (v) => /^[0-9]+$/.test(v) || 'Only digits are allowed'
                                }
                            })}
                        />
                        {
                            (errors.contactNumber && errors.contactNumber.type === 'required' && <p className='tw-text-red-400'>{errors.contactNumber.message} <sup>*</sup></p>) ||
                            (errors.contactNumber && errors.contactNumber.type === 'minLength' && <p className='tw-text-red-400'>{errors.contactNumber.message} <sup>*</sup></p>) ||
                            (errors.contactNumber && errors.contactNumber.type === 'maxLength' && <p className='tw-text-red-400'>{errors.contactNumber.message} <sup>*</sup></p>) ||
                            (errors.contactNumber && errors.contactNumber.type === 'onlyDigit' && <p className='tw-text-red-400'>{errors.contactNumber.message} <sup>*</sup></p>)

                        }

                    </div>
                </div>

            </div>
            <div className='tw-grid tw-grid-cols-1 btnalign:tw-grid-cols-2 tw-gap-y-6 tw-gap-x-6 tw-justify-center '>
                <div className='tw-flex tw-flex-col tw-gap-y-3 tw-relative '>
                    <label className='tw-text-richblack-5 tw-text-[16px]'>Create Password <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                    <input type={visible ? 'text' : 'password'} placeholder='Enter Password' className=' tw-p-[12px] tw-pr-[35px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                        {...register('password', {
                            required: { value: true, message: "Password is required" },
                            minLength: { value: 10, message: "Minimum length is 10" },

                        })}
                    />

                    <span className={`tw-w-[25px] tw-aspect-square tw-absolute tw-block tw-right-[3.5%] tw-top-[58%]  tw-ml-10`}>
                        {
                            !visible ?
                                <LuEye className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible} />
                                : <LuEyeOff className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible} />
                        }
                    </span>
                </div>
                <div className='tw-flex tw-flex-col tw-gap-y-3 tw-relative '>
                    <label className='tw-text-richblack-5 tw-text-[16px]'>Confirm Password <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                    <input type={visibleEye2 ? 'text' : 'password'} placeholder='Enter Password' className=' tw-p-[12px] tw-pr-[35px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                        {...register('confirmPassword', {
                            required: { value: true, message: 'Confirm password is required' },
                            validate: (v) => {
                                return v === watch('password') || "Password don't match"
                            }
                        })}
                    />


                    <span className={`tw-w-[25px] tw-aspect-square tw-absolute tw-block tw-right-[3.5%] tw-top-[58%]   tw-ml-10`}>
                        {
                            !visibleEye2 ?
                                <LuEye className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible2} />
                                : <LuEyeOff className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible2} />
                        }
                    </span>
                </div>
            </div>
            <div className='tw-flex tw-gap-x-5'>
                <div className=' tw-flex-1'>
                    {
                        (errors.password && errors.password.type === 'required') && (<p className='tw-text-red-400'>{errors.password.message} <sup>*</sup></p>) ||
                        (errors.password && errors.password.type === 'minLength') && (<p className='tw-text-red-400'>{errors.password.message} <sup>*</sup></p>)
                    }
                </div>
                <div className=' tw-flex-1'>
                    {
                        (errors.confirmPassword && errors.confirmPassword.type === 'required') && (<p className='tw-text-red-400'>{errors.confirmPassword.message} <sup>*</sup></p>) ||
                        (errors.confirmPassword && errors.confirmPassword.type === 'validate') && (<p className='tw-text-red-400'>{errors.confirmPassword.message} <sup>*</sup></p>)
                    }
                </div>
            </div>

            <div className='tw-mt-5 '>
                {!apiSent ?
                    <input type='button' onClick={handleSubmit(submitData)} value="Create Account" className='tw-p-[12px] tw-cursor-pointer tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[18px] tw-font-[500]' />
                    : <p value="Create Account" className='tw-p-[12px] tw-cursor-pointer tw-text-center tw-outline-none tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[18px] tw-font-[500] tw-opacity-[0.4]' >Create Account</p>
                }
            </div>
        </form>
    )
}

export default RegisterForm