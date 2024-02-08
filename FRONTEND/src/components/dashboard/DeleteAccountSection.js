import React from 'react'
import { ImBin } from "react-icons/im";

function DeleteAccountSection() {
    return (
        <div className='tw-flex tw-flex-col tw-w-full sm:tw-px-[48px] tw-flex-wrap sm:tw-py-[32px]  tw-gap-x-5 tw-gap-y-5  tw-p-3 tw-py-[20px] tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-pink-900  tw-text-richblack-5 '>

            <div className='tw-flex tw-gap-x-4 tw-items-start'>
                <div className=' tw-bg-pink-700 tw-w-[55px] xs:tw-w-[60px] tw-aspect-square tw-rounded-full tw-flex tw-justify-center tw-items-center tw-cursor-pointer '>
                    <ImBin className='tw-text-pink-200 tw-object-contain tw-w-full tw-h-full xs:tw-p-4 tw-p-[15px] ' />
                </div>
                <div className='tw-flex tw-flex-col tw-gap-y-3 tw-w-3/5'>
                    <h1 className='tw-text-[16px] xs:tw-text-[16px] tw-font-semibold tw-text-richblack-5'>Delete Account</h1>
                    <div className='tw-text-pink-35 tw-text-[13px] xs:tw-text-[15px] tw-flex tw-flex-col tw-gap-y-1'>
                        <p>Would you like to delete account?</p>
                        <p>This account contains Paid Courses, Deleting your account will remove all the contents associated with it.</p>
                    </div>
                    <p className='tw-mt-3 tw-italic tw-text-pink-300 tw-cursor-pointer tw-text-[14px] xs:tw-text-[14px]'>I want to delete my account.</p>
                </div>
            </div>

        </div>
    )
}

export default DeleteAccountSection