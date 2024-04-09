
import React from 'react'
import { LuPlusCircle } from "react-icons/lu";


function Step2Form() {

  function createSection(event){
    event.preventDefault();
    console.log("Add Section")
  }

  return (
    <>
      <h1 className='tw-font-[400] tw-text-[18px]'>Course Builder</h1>
      
      <form onSubmit={createSection}>
        <div className='tw-flex tw-flex-col'>
          <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Section Name<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
          <input type='text' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow videobanner:tw-text-[13.1px] ' placeholder='Add a section to build your course'
          />

          <button className='tw-flex tw-gap-x-2 tw-px-5 videobanner:tw-px-4 tw-py-3 tw-mt-5 videobanner:tw-text-[14px] tw-font-semibold tw-text-yellow-50 tw-mr-auto hover:tw-text-black hover:tw-bg-yellow-50 tw-duration-100  tw-items-center tw-rounded-lg tw-border-yellow-50 tw-border-[1px]' onClick={createSection}>
            Create Section
            <LuPlusCircle className='tw-text-[21px] videobanner:tw-text-[16px]  tw-font-semibold' />
          </button>
        </div>
      </form>

      <ul className='tw-bg-red-400'>
        <li className='tw-bg-yellow-300'>
          asjdos
        </li>
      </ul>

    </>
  )
}

export default Step2Form