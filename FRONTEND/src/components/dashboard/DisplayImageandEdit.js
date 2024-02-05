import React from 'react'
import { FaEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function DisplayImageandEdit({ showabout }) {
    const navigate=useNavigate();
    const profileState = useSelector((state) => state.profile?.userData)

    return (
        <div className=' tw-gap-y-4 tw-border-[1px] tw-border-richblack-700 tw-bg-richblack-800 tw-w-full tw-p-3 md:tw-p-8 md:tw-px-12  tw-py-8 tw-rounded-md'>
            <div className='tw-flex tw-flex-wrap tw-justify-between tw-items-center'>
                <div className='tw-flex tw-gap-x-4 tw-items-center  '>
                    {
                        showabout ?
                            <h1 className='tw-capitalize md:tw-text-[15px] xl:tw-text-[19px]  tw-text-richblack-5 tw-font-semibold'>About</h1> :
                            <>
                                <img src='https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' alt='User-logo' className=' tw-w-[44px] dashboard-imgsetter:tw-w-[60px] xl:tw-w-[78px] tw-aspect-square tw-rounded-full' />
                                <div className='tw-flex tw-flex-col tw-gap-y-1'>
                                    <p className=' tw-text-[12px] dashboard-imgsetter:tw-text-[12px] xl:tw-text-[16px] tw-lowercase tw-text-richblack-300'>KeithClaclaws@gmail.com</p>
                                </div>
                            </>
                    }
                </div>
                <button className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-6 tw-h-[40px]  dashboard-imgsetter:tw-h-[50px] tw-gap-x-2 sm:tw-text-[17px] tw-text-richblack-900' onClick={()=>navigate("../settings",{relative:'path'})}>
                    <FaEdit />
                    Edit
                </button>
            </div>
            {
                showabout &&
                <div className='tw-mt-10'>
                    {
                        !profileState?.additionalDetails?.about?
                        <h1 className='tw-text-richblack-400 tw-text-sm tw-font-medium'>Write Something about yourself.</h1>
                        :<h1 className='tw-text-richblack-400 tw-text-sm tw-font-medium'>{profileState?.additionalDetails?.about}</h1>
                    }
                </div>
            }

        </div>
    )
}

export default DisplayImageandEdit