

import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import ModalLoader from '../components/core/ModalLoader.js';
import OtpInput from 'react-otp-input';
import { PiClockCounterClockwise } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {registerApiOperation,sendOtpApiOperation} from "../../src/services/operations/authFunctions.js"

function VerifyEmailPage() {
    const [otperror, setOtpError] = useState(false)
    const [apiCalled,setApiCalled]=useState(false);
    const { registerData } = useSelector((state) => state.auth);
    const dispatch=useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (!registerData) {
            navigate('/signup')
        }
    }, [])


    const [otp, setOtp] = useState('');


    async function handleVerificationAndRegistration(event) {
        setOtpError(false)
        event.preventDefault();
        if (otp.length != 6) {
            return setOtpError(true)
        }
        setApiCalled(true)
        setOtpError(false);
        const dataToSubmit = { ...registerData, otp: otp };
        console.log(dataToSubmit)
        //* Call the Api
       const result= await registerApiOperation(dataToSubmit,setApiCalled,navigate,dispatch)
        setOtp('')
        setApiCalled(false)

    }

    return (
        <div className='tw-bg-richblack-900  tw-mt-[77px] tw-min-h-[92.2vh] tw-flex tw-justify-center tw-items-center'>
            <div className='tw-max-w-[510px] tw-px-[10px] tw-relative  '>
                <h1 className='2xs:tw-text-[22px] sm:tw-text-[30px] tw-font-[600] tw-text-richblack-5'>Verify Email</h1>
                <p className='tw-text-[13px] sm:tw-text-[17px] tw-text-richblack-100 tw-mt-[10px] tw-font-[400] '>
                    A verification code has been sent to your email <span className='tw-text-blue-200'>{registerData?.email}</span> , Enter the code below.
                </p>

                <form className='tw-mt-[24px] tw-flex tw-flex-col' onSubmit={handleVerificationAndRegistration}>
                    <OtpInput

                        value={otp}

                        onChange={setOtp}
                        numInputs={6}
                        inputType='number'
                        shouldAutoFocus={true}
                        renderInput={(props) =>
                            <input {...props}
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className='  tw-w-[30px] 2xs:tw-w-[35px] sm:tw-w-[60px] tw-border-0 tw-bg-richblack-800 tw-rounded-[0.5rem] tw-text-richblack-5 tw-aspect-square tw-text-center focus:tw-border-0 focus:tw-outline-2 focus:tw-outline-yellow-50'
                            />}
                        containerStyle={{

                            justifyContent: "space-between",
                            gap: "0 6px",
                        }}

                    />
                    {
                        otperror &&
                        <p className=' tw-mt-5 tw-text-red-500'>All fields are required</p>
                    }
                    {
                        !false ? <button className=' tw-p-[12px] tw-mt-[30px] tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[15px] xs:tw-text-[18px]  active:tw-scale-[.9] tw-transition-all tw-font-normal' >Verify and Register</button>
                            : <p className='tw-p-[12px] tw-mt-[30px] tw-rounded-[8px] tw-bg-yellow-50 tw-cursor-not-allowed tw-w-full tw-text-richblack-900 tw-text-[15px] xs:tw-text-[18px] tw-font-[500]  tw-text-center tw-opacity-[0.4]' >Verify and Register</p>
                    }
                </form>
                <div className='tw-flex tw-justify-between tw-items-center '>
                    <p className='tw-text-richblack-5 tw-mt-[30px] tw-flex tw-gap-2 tw-items-center  tw-w-fit tw-text-[14px] xs:tw-text-base tw-cursor-pointer' onClick={() => navigate('/login')} >
                        <FaArrowLeft />
                        Back to Login
                    </p>
                    <p className='tw-text-white tw-mt-[30px] tw-flex tw-gap-1 tw-items-center tw-cursor-pointer tw-text-blue-200' >
                        <PiClockCounterClockwise className='tw-w-[20px] tw-h-[20px]' />
                        Resend
                    </p>
                </div>

                {apiCalled &&
                    <ModalLoader />
                }
                   
            </div>
        </div>
    )
}



export default VerifyEmailPage