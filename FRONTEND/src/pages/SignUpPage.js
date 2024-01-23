
import React from 'react'
import AuthFormTemplate from '../components/AuthFormTemplate/AuthFormTemplate'

function SignUpPage() {
  return (
    <div id='login' className=' tw-mt-[78px] tw-bg-red-5 tw-bg-richblack-900   sm:tw-py-[133px] tw-py-[70px] tw-min-h-[92.1vh]'>
      <div className='sm:tw-w-11/12 tw-mx-auto  tw-min-h-[92.1vh]'>

        <AuthFormTemplate title={'Join the millions learning to code with StudyNotion for free'} description1={'Build skills for today, tomorrow, and beyond'} description2={'Education for future-proof your career'} formtype={'register'} />

      </div>
    </div>
  )
}

export default SignUpPage