
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import {changePasswordApiOperation} from "../../services/operations/userFunctions"



function ChangePassword() {
    const navigate = useNavigate();
    const [apiCalled, setApiCalled] = useState(false);


    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);



    const { register, handleSubmit, reset,formState: {
        errors
    } } = useForm();


    async function submitData(formData) {
        console.log("Calling Submit")
        const result=await changePasswordApiOperation(formData,setApiCalled);        
        if(result.data.status){
            reset();
        }
    }



    const handleVisible1 = () => {
        setVisible1((prev) => {
            return !prev
        });
    }

    const handleVisible2 = () => {
        setVisible2((prev) => {
            return !prev
        });
    }

    return (
        <div className='tw-flex tw-flex-col tw-w-full sm:tw-px-[48px] tw-flex-wrap sm:tw-py-[32px]  tw-gap-x-5 tw-gap-y-10  tw-p-3 tw-py-[20px] tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-richblack-800  tw-text-richblack-5 tw-bg-[#161d29]'>

            <h1 className='tw-text-[17.5px] sm:tw-text-[19px] md:tw-text-[21px] tw-font-[400]'>Password</h1>
            <div className=" tw-w-full">
                <form className='tw-flex tw-flex-col tw-gap-y-7 tw-w-full' onSubmit={handleSubmit(submitData)}>
                    <div className='tw-flex tw-flex-col xs:tw-flex-row tw-gap-x-5 tw-flex-wrap tw-gap-y-4 tw-w-full'>
                        <div className='tw-flex tw-flex-col tw-gap-y-4 tw-flex-1 tw-relative'>
                            <label className='tw-text-[16px] '>
                                Current Password <sup className='tw-text-red-400'>*</sup>
                            </label>
                            <input type={visible1 ? 'text' : 'password'} className='input tw-outline-none  tw-bg-richblack-700  tw-w-full tw-pr-12' placeholder='Enter Current Password'
                                {...register('oldPassword', {
                                    required: { value: true, message: 'Password is required' }
                                })}
                            />
                            <span className='tw-w-[31px] tw-aspect-square tw-absolute tw-block tw-right-[2%]  tw-top-[54%] tw-ml-10 '>
                                {
                                    !visible1 ?
                                        <LuEye className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible1} />
                                        : <LuEyeOff className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible1} />
                                }
                            </span>
                        </div>
                        {
                            errors.oldPassword && errors.oldPassword.type === 'required' &&
                            <p className='xs:tw-hidden tw-text-pink-300'>{errors.oldPassword.message} <sup className='tw-text-pink-300'>*</sup></p>
                        }
                        <div className='tw-flex tw-flex-col tw-gap-y-4 tw-flex-1  tw-relative'>
                            <label className='tw-text-[16px] '>
                                Change Password <sup className='tw-text-red-400'>*</sup>
                            </label>
                            <input type={visible2 ? 'text' : 'password'} className='input tw-outline-none  tw-bg-richblack-700  tw-w-full tw-pr-12' placeholder='Enter New Password'
                                {...register('newPassword', {
                                    required: { value: true, message: 'New password is required' },

                                })}
                            />
                            <span className='tw-w-[31px] tw-aspect-square tw-absolute tw-block tw-right-[2%]  tw-top-[54%] tw-ml-10 '>
                                {
                                    !visible2 ?
                                        <LuEye className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible2} />
                                        : <LuEyeOff className='tw-w-full tw-h-full tw-text-richblack-300 tw-object-cover tw-cursor-pointer' onClick={handleVisible2} />
                                }
                            </span>

                        </div>
                        {
                            errors.newPassword && errors.newPassword.type === 'required' &&
                            <p className=' xs:tw-hidden tw-text-pink-300'>{errors.newPassword.message} <sup className='tw-text-pink-300'>*</sup></p>
                        }
                    </div>
                    <div className='tw-hidden xs:tw-flex tw-w-full  tw-gap-x-5'>
                        {
                            errors.oldPassword && errors.oldPassword.type === 'required' &&
                            <p className='tw-flex-1 xs:tw- tw-text-pink-300'>{errors.oldPassword.message} <sup className='tw-text-pink-300'>*</sup></p>
                        }
                        {
                            errors.newPassword && errors.newPassword.type === 'required' &&
                            <p className='xs:tw-hidde tw-w-[50%] tw-ml-auto tw-text-pink-300 '>{errors.newPassword.message}<sup className='tw-text-pink-300'>*</sup></p>
                        }
                    </div>



                </form>
                <div className='tw-mt-[40px] tw-flex tw-gap-x-2 tw-justify-end'>
                    <button className='tw-bg-richblack-700 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-5' onClick={() => navigate('/dashboard/my-profile')} >
                        Cancel
                    </button>
                    {
                        !apiCalled ?
                        <button className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-900' onClick={handleSubmit(submitData)}>
                            <p>Save</p>
                        </button>:
                    <button className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-900'>
                        <p>...Saving</p>
                    </button>
                    }
                </div>
            </div>


        </div>
    )
}

export default ChangePassword