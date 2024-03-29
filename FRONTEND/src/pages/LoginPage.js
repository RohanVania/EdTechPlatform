// Create a Template for Login and Signup
// Adding Pure Css and functionality

//** Form Submitting Data as Student or Instructor  */

import React from 'react'

import AuthFormTemplate from '../components/AuthFormTemplate/AuthFormTemplate';

function LoginPage() {

    return (

        <div id='login' className=' tw-mt-[78px] tw-bg-red-5 tw-bg-richblack-900 sm:tw-py-[133px] tw-py-[70px] tw-min-h-[92.1vh]'>
                <div className='sm:tw-w-11/12 tw-mx-auto '>
                    <AuthFormTemplate formtype={'login'} title={'Welcome Back'} description1={'Build skills for today, tomorrow, and beyond.'} description2={'Education to future-proof your career'} />
                </div> 
        </div>
    )
}

export default LoginPage


