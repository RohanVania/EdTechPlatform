import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function DisplayImageandEdit({ showabout }) {
    const navigate = useNavigate();
    const profileState = useSelector((state) => state.profile?.userData)


    return (
        <div className=' tw-gap-y-4 tw-border-[1px] tw-border-richblack-700 tw-bg-richblack-800 tw-w-full tw-p-3 md:tw-p-8 md:tw-px-12  tw-py-8 tw-rounded-md'>
            <div className='tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-gap-y-3'>
                <div className='tw-flex tw-gap-x-4 tw-items-center  '>
                    {
                        showabout ?
                            <h1 className='tw-capitalize md:tw-text-[15px] xl:tw-text-[19px]  tw-text-richblack-5 tw-font-semibold'>About</h1> :
                            <div className='tw-flex   tw-gap-x-3'>


                                {
                                   
                                        // <div className='tw-animate-pulse tw-w-[54px] dashboard-imgsetter:tw-w-[60px] xl:tw-w-[78px] tw-aspect-square tw-rounded-full tw-bg-gray-600' />
                                        // :
                                        <img  src={`${profileState?.image}`}  onLoad={() =>console.log("1")} alt='User-logo' className=' tw-w-[54px] dashboard-imgsetter:tw-w-[60px] xl:tw-w-[78px] tw-aspect-square tw-rounded-full' />
                                }
                                <div className='tw-flex tw-flex-col tw-gap-y-1 tw-mt-2'>
                                    <h1>{`${profileState?.firstName} ${profileState?.lastName}`}</h1>
                                    <p className=' tw-text-[12px] dashboard-imgsetter:tw-text-[12px] sm:tw-text-[16px] xl:tw-text-[16px] tw-lowercase tw-text-richblack-300'>{profileState?.email}</p>
                                </div>
                            </div>
                    }
                </div>
                <button className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[34px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[50px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-900' onClick={() => navigate("../settings", { relative: 'path' })}>
                    <FaEdit />
                    Edit
                </button>
            </div>
            {
                showabout &&
                <div className='tw-mt-10 '>
                    {
                        !profileState?.additionalDetails?.about ?
                            <h1 className='tw-text-[12px] 2xs:tw-text-[15px] sm:tw-text-[16px] xl:tw-text-[16px]  tw-text-richblack-300 tw-full tw-h-full tw-break-words'>Write Something about yourself</h1>
                            : <h1 className='tw-text-[12px] 2xs:tw-text-[15px] sm:tw-text-[16px] xl:tw-text-[16px]  tw-text-richblack-300'>{profileState?.additionalDetails?.about}</h1>
                    }
                </div>
            }

        </div>
    )
}

export default DisplayImageandEdit