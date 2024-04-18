import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { changeProfileInfo } from "../../services/operations/userFunctions"

function ChangeProfileInfo() {
    const profileState = useSelector((state) => state.profile?.userData)
    const changeInfoLoading = useSelector((state) => state.changeProfileFlag)
    
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: {
        errors
    } } = useForm({
        defaultValues: {
            gender: profileState?.additionalDetails?.gender,
            contactNumber: profileState?.additionalDetails?.contactNumber,
            about: profileState?.additionalDetails?.about,
            dateOfBirth: profileState?.additionalDetails?.dateOfBirth
        }
    });


    async function submitData(formdata) {
        formdata.contactNumber = formdata.contactNumber === '' ? null : formdata.contactNumber
        console.log(formdata);
        const result = await changeProfileInfo(formdata, dispatch)
    }

    return (
        <div className='tw-flex tw-flex-col tw-w-full sm:tw-px-[48px] tw-flex-wrap sm:tw-py-[32px]  tw-gap-x-5 tw-gap-y-5  tw-p-3 tw-py-[20px] tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-richblack-800  tw-text-richblack-5 tw-bg-[#161d29]'>

            <h1 className='tw-text-[17.5px] sm:tw-text-[19px] md:tw-text-[21px] tw-font-[400]'>Profile Information</h1>
            <div className=" tw-w-full">
                <form className='tw-flex tw-flex-col tw-gap-y-7 tw-w-full' onSubmit={handleSubmit(submitData)}>
                    {/* <div className='tw-flex tw-flex-col xs:tw-flex-row tw-gap-x-5 tw-flex-wrap tw-gap-y-4 tw-w-full'>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                                First Name
                            </label>
                            <input type='text' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full'
                                {...register('firstName', {
                                    required: { value: true, message: 'First name is required' }
                                })}
                            />
                        </div>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                                Last Name
                            </label>
                            <input type='text' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full'
                                {...register('lastName', {
                                    required: { value: true, message: 'Last name is required' }
                                })}
                            />
                        </div>
                    </div> */}

                    <div className='tw-flex tw-flex-col xs:tw-flex-row tw-gap-x-5 tw-flex-wrap tw-gap-y-4 tw-w-full'>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                                Date of Birth
                            </label>
                            <input type='date' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full'
                                {...register('dateOfBirth')}
                            />
                        </div>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                                Gender
                            </label>
                            {/* <input type='text' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full' /> */}
                            <select className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full'
                                {...register('gender')}
                            >
                                <option value="" disabled hidden>Choose</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='others'>Others</option>
                                <option value='prefer not to say'>Prefer not to say</option>
                            </select>

                        </div>
                    </div>

                    <div className='tw-flex tw-flex-col xs:tw-flex-row tw-gap-x-5 tw-flex-wrap tw-gap-y-4 tw-w-full'>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                                Contact Number
                            </label>
                            <input type='number' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full' placeholder='Enter Contact Number'
                                {...register('contactNumber', {
                                    minLength: { value: 10, message: 'Min length is 10' },
                                    maxLength: { value: 10, message: 'Max length is 10' }
                                })}
                            />
                            {
                                (errors.contactNumber && errors.contactNumber.type === 'maxLength' && <p className='tw-text-red-500'>{errors.contactNumber.message}<sup>*</sup></p>) ||
                                (errors.contactNumber && errors.contactNumber.type === 'minLength' && <p className='tw-text-red-500'>{errors.contactNumber.message}<sup>*</sup></p>)

                            }

                        </div>
                        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-flex-1'>
                            <label className='tw-text-[16px] '>
                                About
                            </label>
                            <input type='text' className='input tw-outline-none tw-w-ful tw-bg-richblack-700 videobanner:tw-w-ful tw-w-full' placeholder='Enter Bio'
                                {...register('about')}
                            />
                        </div>
                    </div>

                </form>
                <div className='tw-mt-[40px] tw-flex tw-gap-x-2 tw-justify-end'>
                    <button className='tw-bg-richblack-700 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-5' onClick={() => navigate('/dashboard/my-profile')}>
                        Cancel
                    </button>
                    {
                        !changeInfoLoading ?
                            <button className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-900 ' onClick={handleSubmit(submitData)}>
                                <p>Save</p>
                            </button> :
                            <button className='tw-bg-yellow-100 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-900 '>
                                <p>Saving ...</p>
                            </button>
                    }
                </div>
            </div>

        </div>
    )
}


export default ChangeProfileInfo