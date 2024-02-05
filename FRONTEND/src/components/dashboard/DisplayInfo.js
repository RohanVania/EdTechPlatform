import React from 'react'
import { FaEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function DisplayInfo() {
    const navigate = useNavigate();
    const profileState = useSelector((state) => state.profile?.userData)
    console.log(profileState)
    return (
        <div className='tw-flex tw-flex-col tw-gap-y-4   tw-flex-wrap tw-border-[1px] tw-border-richblack-700 tw-bg-richblack-800 tw-w-full tw-p-3 md:tw-p-8 md:tw-px-12 tw-justify-between tw-items-center tw-py-8 tw-rounded-md'>

            <div className='tw-flex tw-flex-wrap tw-justify-between tw-gap-y-4  tw-w-full tw-items-center'>
                <h1 className='tw-capitalize md:tw-text-[15px] xl:tw-text-[19px]  tw-text-richblack-5 tw-font-semibold'>Personal Details</h1>
                <button onClick={() => { navigate("../settings", { relative: "path" }) }} className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-6 tw-h-[40px]  dashboard-imgsetter:tw-h-[50px] tw-gap-x-2 sm:tw-text-[17px] tw-text-richblack-900 '>
                    <FaEdit />
                    Edit
                </button>
            </div>

            <div className=' tw-w-full  tw-grid  info  tw-gap-y-4 tw-mb-[60px]  '>
                <div className='tw-flex tw-flex-col tw-gap-y-1'>
                    <h3 className='tw-text-richblack-100'>First Name</h3>
                    <p className='tw-text-richblack-400'>{profileState?.firstName}</p>
                </div>
                <div className='tw-flex tw-flex-col tw-gap-y-1'>

                    <h3 className='tw-text-richblack-100'>Last Name</h3>
                    <p className='tw-text-richblack-400'>{profileState?.lastName}</p>
                </div>
                <div className='tw-flex tw-flex-col tw-gap-y-1'>

                    <h3 className='tw-text-richblack-100'>Email</h3>
                    <p className='tw-text-richblack-400'>{profileState?.email}</p>
                </div>
                {
                    profileState?.additionalDetails?.dateOfBirth &&
                    <div className='tw-flex tw-flex-col tw-gap-y-1'>
                        <h3 className='tw-text-richblack-100'>Phone Number</h3>
                        <p className='tw-text-richblack-400'>(+91) 12345 67890</p>
                    </div>
                }
            </div>


          
        </div>
    )
}

export default DisplayInfo