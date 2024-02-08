
import React from 'react'
import DisplayImageandEdit from './DisplayImageandEdit'
import ChangeImage from './ChangeImage' 
import ChangeProfileInfo from './ChangeProfileInfo'
import ChangePassword from './ChangePassword'
function Settings() {
  return (
    <div className=''>
            <div className=' tw-px-[10px] tw-py-[22px] tw-mb-5'>
                <h1 className='tw-text-[22px] sm:tw-text-[24px] md:tw-text-[29px] tw-font-[400]'>Edit Profile</h1>
            </div>
            <div className=' tw-flex tw-flex-col tw-gap-y-5  tw-items-center'>
                {/* <div className='tw-flex tw-flex-col   tw-flex-wrap tw-gap-y-6 tw-border-[1px] tw-border-richblack-700 tw-bg-richblack-800 tw-w-full tw-p-3 md:tw-p-8 md:tw-px-12 tw-justify-between tw-items-center tw-py-8 tw-rounded-md'> */}
                        {/* <DisplayImageandEdit /> */}
                        <ChangeImage/>
                        <ChangeProfileInfo/>
                        <ChangePassword/>

                {/* </div> */}


            </div>
        </div>
  )
}

export default Settings