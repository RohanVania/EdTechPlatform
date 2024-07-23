
import React, {  useState } from 'react'
import { LuPlusCircle } from "react-icons/lu";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../../slices/addcourseSlice';
import Faq from "../faq/Faq"
import { useFormContext } from 'react-hook-form';
import {setEditCourse} from "../../slices/addcourseSlice"
import { addSection } from '../../services/operations/section';
import { useParams } from 'react-router-dom';


function Step2Form() {

  const globalCourseState = useSelector((state) => state?.addcourse);
  console.log("Params =>",useParams());

  const dispatch = useDispatch();

  const { register, reset, trigger, setValue, getValues, formState: {
    errors
  } } = useFormContext();

  let [array, setArray] = useState([]);
  const [editSection, setEditSection] = useState(false);

  function GoBack() {
    dispatch(setStep(1))
    dispatch(setEditCourse(2))
  }

  async function createSection(event) {
    try{
      event.preventDefault();
      setValue('sectionName', getValues('sectionName').trim());
      const isValid = await trigger(['sectionName']);

      console.log(isValid);
      console.log(getValues("sectionName"))
      
      if (isValid) {
      const inputBody = {
        sectionName: getValues("sectionName"),
        courseId: "66a00b1f49fc45e3c7209c16"
      }
      
      const res = await addSection(inputBody, dispatch);
      
      // reset();

      // setArray((prev) => [...prev, { name: 'Extra' }]);
      
    }
  }
  catch(err){
    console.log(err);

  }

}

  function cancelEdit(){
    setEditSection(false);
    setValue("sectionName","");
  }

  return (
    <>
      <h1 className='tw-font-[400] tw-text-[18px]'>Course Builder</h1>

      {/* <form onSubmit={createSection}> */}
        <div className='tw-flex tw-flex-col'>
          <label className='tw-mb-3 tw-text-sm tw-text-richblack-5'>Section Name<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
          <input type='text' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow videobanner:tw-text-[13.1px] ' placeholder='Add a section to build your course'
            {...register("sectionName", {
              required: { value: true, message: 'Section name is required' }
            })}
          />
          {
            errors.sectionName && errors.sectionName?.type === 'required' &&
            <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>{errors.sectionName?.message}<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
          }
          {
            !globalCourseState?.formSubmit ?
              <div className='tw-flex  tw-w-fit tw-gap-5 tw-flex-wrap'>

                <button className='tw-flex tw-gap-x-2 tw-px-5 videobanner:tw-px-4 tw-py-3 tw-mt-5 videobanner:tw-text-[14px] tw-font-semibold tw-text-yellow-50 tw-mr-auto hover:tw-text-black hover:tw-bg-yellow-50 tw-duration-100  tw-items-center tw-rounded-lg tw-border-yellow-50 tw-border-[1px]' onClick={createSection}>
                  {!editSection ? 'Create Section' : 'Edit Section'}
                  <LuPlusCircle className='tw-text-[21px] videobanner:tw-text-[16px]  tw-font-semibold' />
                </button>
                {
                  editSection &&
                  <button className=' tw-w-fit tw-flex tw-gap-x-2 tw-px-5 videobanner:tw-px-4 tw-py-3 tw-mt-5 videobanner:tw-text-[14px] tw-font-semibold tw-text-yellow-50 tw-mr-auto hover:tw-text-black hover:tw-bg-yellow-50 tw-duration-100  tw-items-center tw-rounded-lg tw-border-yellow-50 tw-border-[1px] tw-cursor-pointer'>
                    Cancel Edit
                  </button>
                }

              </div>
              :
              <div className='tw-flex  tw-w-fit tw-gap-5 tw-flex-wrap'>
                <button className='tw-flex tw-gap-x-2 tw-px-5 videobanner:tw-px-4 tw-py-3 tw-mt-5 videobanner:tw-text-[14px] tw-font-semibold tw-text-yellow-50 tw-mr-auto hover:tw-text-black hover:tw-bg-yellow-50 tw-duration-100  tw-items-center tw-rounded-lg tw-border-yellow-50 tw-border-[1px] tw-opacity-[0.3] tw-cursor-wait'>
                  Create Section
                  <LuPlusCircle className='tw-text-[21px] videobanner:tw-text-[16px]  tw-font-semibold' />
                </button>
                {
                  editSection &&
                  <button className=' tw-w-fit tw-flex tw-gap-x-2 tw-px-5 videobanner:tw-px-4 tw-py-3 tw-mt-5 videobanner:tw-text-[14px] tw-font-semibold tw-text-yellow-50 tw-mr-auto hover:tw-text-black hover:tw-bg-yellow-50 tw-duration-100  tw-items-center tw-rounded-lg tw-border-yellow-50 tw-border-[1px] tw-cursor-pointer' onClick={cancelEdit}>
                    Cancel Edit
                  </button>
                }
              </div>

          }
        </div>
      {/* </form> */}

      {
        array.length !== 0 &&
        <ul className='tw-bg-richblack-700 tw-py-6    tw-rounded-md tw-space-y-5'>
          {

            // array?.map((el, indx) => {
            //   return <Faq key={indx} element={el} />
            // })


          }
        </ul>
      }


      <div className='tw-bg-red-40 tw-flex tw-gap-x-3 tw-justify-end'>
        {!globalCourseState?.formSubmit ?
          <>
            <button onClick={GoBack} className='tw-cursor-pointer tw-px-[24px] tw-font-semibold tw-py-[12px] tw-rounded-[8px] tw-text-center tw-text-richblack-5 tw-flex tw-justify-center tw-items-center tw-gap-x-2 tw-bg-richblack-700 '>
              <FaChevronLeft className='tw-text-[13px]' />
              Back
            </button>
            <button className='tw-cursor-pointer tw-font-semibold tw-px-[24px] tw-py-[12px] tw-rounded-[8px] tw-text-center tw-flex tw-justify-center tw-items-center tw-gap-x-2 tw-bg-yellow-50 tw-text-richblack-900'>
              Next
              <FaChevronRight className='tw-text-[13px]' />
            </button>
          </>
          :
          <>
            <button className='tw-cursor-wait tw-px-[24px] tw-font-semibold tw-py-[12px] tw-rounded-[8px] tw-text-center tw-text-richblack-5 tw-flex tw-justify-center tw-items-center tw-gap-x-2 tw-bg-richblack-700 tw-opacity-[0.3] '>
              <FaChevronLeft className='tw-text-[13px]' />
              Back
            </button>
            <button className='tw-cursor-wait tw-font-semibold tw-px-[24px] tw-py-[12px] tw-rounded-[8px] tw-text-center  tw-flex tw-justify-center tw-items-center tw-gap-x-2 tw-bg-yellow-50 tw-text-richblack-900 tw-opacity-[0.3]'>
              Next
              <FaChevronRight className='tw-text-[13px]' />
            </button>
          </>
        }
      </div>
      <p className='tw-text-wrap' >
        {
          JSON.stringify(globalCourseState,null,'\t')
        }
      </p>

    </>
  )
}

export default Step2Form




