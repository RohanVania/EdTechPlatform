import React, { useState, useRef } from 'react'
import CourseTip from './CourseTip'

import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import Step1Form from '../stepperForm/Step1Form';
import { useSelector } from 'react-redux';
import Step2Form from '../stepperForm/Step2Form';
import Step3Form from "../stepperForm/Step3Form"
import { FaCheck } from "react-icons/fa";


function CourseAddLayout() {
    const { step } = useSelector((state) => state.addcourse);
    const { control } = useForm()

    const methods = useForm({
        defaultValues: {
            category: "",
            tag: [],
            instructions: [],
            section:[],
        }
    })


    return (
        <div className='tw-pt-[40px] '>

            <h1 className='tw-text-3xl tw-text-richblack-5 tw-font-medium tw-mb-14'>Add Course</h1>
            <div className='tw-flex tw-flex-col lg:tw-flex lg:tw-flex-row lg:tw-justify-between  tw-justify-center tw-items-center lg:tw-items-start tw-gap-y-5 tw-flex-wrap'>

                <div className=' tw-w-full xl:tw-basis-[580px]  '>
                    <div className='tw-flex tw-items-center 2xs:tw-px-[40px]  tw-mb-10'>
                        <div className='tw-flex tw-flex-col tw-gap-y-[10px] tw-pt-[40px] tw-px-1'>
                            <div className='tw-flex tw-flex-col  tw-items-center tw-gap-y-2'>
                                {
                                    step > 1 ?
                                        <div className='tw-w-[40px] tw-aspect-square tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-yellow-100 tw-bg-richblack-800 tw-text-yellow-5'>
                                            <FaCheck />
                                        </div>
                                        :
                                        <div className='tw-w-[40px] tw-aspect-square tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-richblack-600 tw-bg-richblack-800 tw-text-richblack-300'>1</div>
                                }
                            </div>
                            {
                                step > 1 ?
                                    <label className='tw-text-center tw-text-xs tw-text-yellow-100'>Course Information</label>
                                    :
                                    <label className='tw-text-center tw-text-xs'>Course Information</label>
                            }
                        </div>
                        {
                            step > 1 ?
                                <div className=' tw-w-[100%] tw-mr-3 tw-border-dashed tw-border-b-2 tw-border-yellow-200' />
                                :
                                <div className=' tw-w-[100%] tw-mr-3 tw-border-dashed tw-border-b-2 tw-border-richblack-700' />

                        }
                        <div className='tw-flex tw-flex-col tw-gap-y-[10px] tw-pt-[40px] tw-px-1'>
                            <div className='tw-flex tw-flex-col  tw-items-center tw-gap-y-2'>
                                <div className='tw-w-[40px] tw-aspect-square tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-richblack-600 tw-bg-richblack-800 tw-text-richblack-300'>2</div>
                            </div>
                            {
                                step > 2 ?
                                    <label className='tw-text-center tw-text-xs tw-text-yellow-100'>Course Builder</label>
                                    :
                                    <label className='tw-text-center tw-text-xs'>Course Builder</label>
                            }
                        </div>
                        {
                            step > 2 ?
                                <div className=' tw-w-[100%] tw-mr-3 tw-border-dashed tw-border-b-2 tw-border-yellow-200' />
                                :
                                <div className=' tw-w-[100%] tw-mr-3 tw-border-dashed tw-border-b-2 tw-border-richblack-700' />

                        }
                        <div className='tw-flex tw-flex-col tw-gap-y-[10px] tw-pt-[40px] tw-px-1'>
                            <div className='tw-flex tw-flex-col  tw-items-center tw-gap-y-2'>
                                <div className='tw-w-[40px] tw-aspect-square tw-rounded-full  tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-richblack-600 tw-bg-richblack-800 tw-text-richblack-300'>3</div>
                            </div>
                            {
                                step > 3 ?
                                    <label className='tw-text-center tw-text-xs tw-text-yellow-100'>Publishing course</label>
                                    :
                                    <label className='tw-text-center tw-text-xs'>Publishing course</label>
                            }

                        </div>
                    </div>
                    <FormProvider {...methods}>
                        <form id='addcourse' className='tw-flex tw-flex-col tw-gap-y-7 tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-[#161d29] tw-p-5' onSubmit={(event) => { event.preventDefault() }} >
                            {step === 1 && <Step1Form />}
                            {step === 2 && <Step2Form />}
                            {step === 3 && <Step3Form />}

                        </form>
                    </FormProvider>
                </div>

                <div className=''>
                    <CourseTip />
                </div>

            </div>

        </div>
    )
}

export default CourseAddLayout