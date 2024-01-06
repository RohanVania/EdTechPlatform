

import React, { useState } from 'react'
import studentformImage from "../../assets/Images/framelogin.png"
import instructorformImage from "../../assets/Images/InstructorForm.jpg"
import Frame from "../../assets/Images/frame.png"
import LoginForm from './loginForm/LoginForm';
import RegisterForm from './registerForm/RegisterForm';


function AuthFormTemplate({ title, description1, description2, formtype }) {
    const [activebtntype, setActivebtntype] = useState('instructor');
    return (
        <div className='2xs:tw-flex  tw-justify-evenly tw-flex-row-reverse tw-flex-wrap tw-space-y-[64px] tw-items-center tw-pt-[80px] sm:tw-pb-[133px] tw-py-[70px'>
            <div className='tw-max-w-[558px] sm:tw-min-w-[558px] tw-h-[580px]  lg:tw-h-[610px]  tw-bg-orange-30 xs:tw-px-4 tw-px-3 tw-bg-red-40 tw-relative '>
                <img src={activebtntype==='instructor'?instructorformImage:studentformImage} alt='LoginImage' className='tw-w-full tw-relative tw-z-50 tw-h-full tw-object-cover tw-shadow-md tw-shadow-[#ffffffd9] xl:tw-shadow-none ' />
                <img src={Frame} alt='Frame' className='tw-hidden sm:tw-block tw-absolute tw-top-[4.7%] tw-z-10 tw-left-[8%] tw-w-[95.6%] tw-h-full '/>
            </div>
            <div className=' tw-bg-richblack-00 tw-bg-red-10   tw-max-w-[508px] '>
                <div className='tw-flex tw-flex-col tw-gap-y-5 tw-bg-red-5 xs:tw-px-4 tw-px-5'>
                    <h1 className='tw-text-[30px] tw-font-[600] tw-text-richblack-5'>{title}</h1>
                    <p className='sm:tw-text-[18px]  tw-text-richblack-100 tw-font-[400]'>
                        {description1} <span
                            className='tw-text-blue-100 tw-text-[16px] tw-font-[500] tw-font-edu-sa'>{description2}</span>
                    </p>
                </div>
                <div className=' tw-mt-10 tw-text-[16px] tw-font-[500] tw-bg-[#161d29] tw-w-fit tw-mx-[10px]    tw-shadow-sm tw-fle tw-flex-wrap tw-gap-2 tw-shadow-[#ffffffd9] tw-rounded-[40px]'>
                    {
                        activebtntype === 'student' ?
                            <button className='tw-px-[30px] tw-py-[15px] tw-w-full xs:tw-w-fit tw-bg-richblack-900 tw-text-white xs:tw-rounded-[80px] tw-rounded-tl-[40px] tw-rounded-tr-[40px] tw-transition-all tw-duration-300 ' >
                                Student
                            </button> :
                            <button className='tw-px-[30px] tw-py-[15px] tw-w-full xs:tw-w-fit tw-bg-richblack-800 tw-text-[#999daa] xs:tw-rounded-[80px] tw-rounded-tl-[40px] tw-rounded-tr-[40px] tw-transition-all tw-duration-300 ' onClick={() => setActivebtntype('student')}>
                                Student
                            </button>
                    }
                    {activebtntype === 'instructor' ?
                        <button className='tw-px-[30px] tw-py-[15px] tw-w-full xs:tw-w-fit   xs:tw-rounded-[80px] tw-bg-richblack-900 tw-text-white tw-rounded-bl-[40px] tw-rounded-br-[40px] tw-transition-all tw-duration-300' >
                            Instructor
                        </button> : <button className='tw-px-[30px] tw-py-[15px] tw-w-full xs:tw-w-fit   xs:tw-rounded-[80px] tw-bg-richblack-800 tw-text-[#999daa] tw-rounded-bl-[40px] tw-rounded-br-[40px] tw-transition-all tw-duration-300' onClick={() => setActivebtntype('instructor')}>
                            Instructor
                        </button>
                    }
                </div>
                <div className='tw-mt-[45px] xs:tw-px-4 tw-px-5'>
                        {formtype === 'login' &&
                            <LoginForm usertype={activebtntype} />
                        }
                        {
                            formtype === 'register' && 
                            <RegisterForm usertype={activebtntype}/>
                        }

                </div>
            </div>

        </div>
    )
}

export default AuthFormTemplate