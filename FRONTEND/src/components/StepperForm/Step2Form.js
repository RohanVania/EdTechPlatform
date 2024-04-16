
import React from 'react'
import { LuPlusCircle } from "react-icons/lu";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";


function Step2Form() {



  function createSection(event) {
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

      <ul className='tw-bg-richblack-700 tw-py-5 tw-pb-9 tw-px-4 tw-rounded-md'>
        <li className='tw-bg-yellow-30   tw-flex tw-flex-col   tw-gap-x-3 tw-px-0' >
          <div className='tw-flex tw-gap-x-3 tw-flex-wrap tw-w-full tw-border-b-[2px] tw-border-richblack-500 tw-py-3 tw-gap-y-4'>
            <div className='tw-flex tw-justify-cente tw-items-cente tw-bg-red-40 tw-px-1 tw-gap-x-3'>
              <FaChevronDown className='tw-self-center tw-text-[17px] tw-hidden btnalign:tw-block' />
              <GiHamburgerMenu className='tw-text-[17px] tw-self-center' />
            </div>
            <p className='tw-text-[17px]'>
              Introduction
            </p>
            <div className='tw-flex  tw-gap-x-2 tw-items-center tw-justify-center  btnalign:tw-ml-auto  tw-px-3'>
              <FiEdit2 className='tw-text-[19px] tw-cursor-pointer' />
              <MdDelete className='tw-text-[19px] tw-cursor-pointer' />
              <div className=' tw-border-l-[2px] tw-border-richblack-500  tw-pl-2 tw-flex tw-items-center tw-self-center'>
                <FaChevronDown className=' tw-text-[19px] tw-self-start tw-cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='tw-w-[90%] tw-mx-auto tw-flex tw-flex-col tw-gap-y-2'>
            <div className='tw-flex tw-gap-x-3 tw-gap-y-3 tw-flex-wrap tw-w-full tw-border-b-[2px] tw-border-richblack-500 tw-py-3'>
              <div className='tw-flex tw-justify-cente tw-items-cente tw-bg-red-40 tw-px-1 tw-gap-x-3'>
                <FaChevronDown className='tw-self-center tw-text-[17px] tw-hidden btnalign:tw-block' />
                <GiHamburgerMenu className='tw-text-[17px] tw-self-center' />
              </div>
              <p>
                Lecture
              </p>
              <div className='tw-flex  tw-gap-x-2 tw-items-center tw-justify-center  btnalign:tw-ml-auto '>
                <FiEdit2 className='tw-text-[19px] tw-cursor-pointer' />
                <MdDelete className='tw-text-[19px] tw-cursor-pointer' />
                <div className=' tw-border-l-[2px] tw-border-richblack-500  tw-pl-2 tw-flex tw-items-center tw-self-center'>
                  <FaChevronDown className=' tw-text-[19px] tw-self-start tw-cursor-pointer' />
                </div>
              </div>
            </div>

            <div className='tw-bg-red-40 tw-py-2  tw-px-1'>
              <button className=' tw-flex tw-items-center tw-gap-x-3 tw-text-yellow-50  tw-cursor-pointer tw-px-2 tw-py-1' onClick={()=>{console.log("Add Lectures")}}>
                <FaPlus className='tw-font-bold ' />
                Add Lecture
              </button>
            </div>

          </div>


        </li>

      </ul>

      <div className='tw-bg-red-40 tw-flex tw-gap-x-3 tw-justify-end'>
        <button className='tw-cursor-pointer tw-px-[24px] tw-font-semibold  tw-py-[12px] tw-rounded-[8px] tw-text-center tw-text-richblack-5 tw-flex tw-justify-center tw-items-center tw-gap-x-2 tw-bg-richblack-700 '>
          <FaChevronLeft className='tw-text-[13px]' />
          Back
        </button>
        <button className='tw-cursor-pointer tw-font-semibold tw-px-[24px] tw-py-[12px] tw-rounded-[8px] tw-text-center tw-text-richblack-5 tw-flex tw-justify-center tw-items-center tw-gap-x-2 tw-bg-yellow-50 tw-text-richblack-900'>
          Next
          <FaChevronRight className='tw-text-[13px]' />
        </button>
      </div>

    </>
  )
}

export default Step2Form