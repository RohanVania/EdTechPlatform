

import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import ModalLoader from '../components/core/ModalLoader.js';




function VerifyEmailPage() {
    return (
        <div className='tw-bg-richblack-900  tw-mt-[77px] tw-min-h-[92.2vh] tw-flex tw-justify-center tw-items-center'>
            <div className='tw-max-w-[510px] tw-px-[10px] tw-relative  '>
                <h1 className='2xs:tw-text-[22px] sm:tw-text-[30px] tw-font-[600] tw-text-richblack-5'>Verify Email</h1>
                <p className='tw-text-[13px] sm:tw-text-[17px] tw-text-richblack-100 tw-mt-[10px] tw-font-[400] '>
                    A verification code has been sent to you. Enter the code below.
                </p>

                <form className='tw-mt-[24px] tw-flex tw-flex-col' >
                    {
                        !false ? <button  className='tw-p-[12px] tw-mt-[30px] tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[15px] xs:tw-text-[18px] tw-font-[500] active:tw-scale-[.9] tw-transition-all tw-disbale' >Resend email</button>
                            : <p className='tw-p-[12px] tw-mt-[30px] tw-rounded-[8px] tw-bg-yellow-50 tw-cursor-not-allowed tw-w-full tw-text-richblack-900 tw-text-[15px] xs:tw-text-[18px] tw-font-[500]  tw-text-center tw-opacity-[0.6]' >Resend email</p>
                    }
                </form>
                <p className='tw-text-richblack-5 tw-mt-[30px] tw-flex tw-gap-2 tw-items-center tw-w-fit tw-text-[14px] xs:tw-text-base tw-cursor-pointer ' >
                    <FaArrowLeft />
                    Back to Login
                </p>

                {true &&
                    <ModalLoader/>
                }

            </div>
        </div>
    )
}



export default VerifyEmailPage