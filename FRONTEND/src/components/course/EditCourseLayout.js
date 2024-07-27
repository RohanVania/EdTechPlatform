import React, { useState, useRef, useEffect } from 'react'
import CourseTip from './CourseTip'

import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import RenderStep from './RenderStep';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resetStep } from '../../slices/addcourseSlice';
import Step1Form from '../stepperForm/Step1Form';
import Step2Form from '../stepperForm/Step2Form';
import Step3Form from '../stepperForm/Step3Form';

function EditCourseLayout() {
    const { step } = useSelector((state) => state.addcourse);
    const dispatch = useDispatch();
    const params = useParams();



    const methods = useForm({
        // defaultValues: {
        //     category: "",
        //     tag: [],
        //     instructions: [],
        //     section: [],
        //     subsection: []
        // }
    })

    useEffect(() => {
        dispatch(resetStep())
    }, [])
    return (
        <div className='tw-pt-[40px]'>
            <h1 className='tw-text-3xl tw-text-richblack-5 tw-font-medium tw-mb-14'>Edit Course</h1>

            <div className='tw-flex tw-flex-col lg:tw-flex lg:tw-flex-row lg:tw-justify-between  tw-justify-center tw-items-center lg:tw-items-start tw-gap-y-5 tw-flex-wrap '>

                <div className=' tw-w-full xl:tw-basis-[580px]  '>
                    <RenderStep />

                    <FormProvider {...methods} className>
                        <form id='editcourse' className='tw-flex tw-flex-col tw-gap-y-7 tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-[#161d29] tw-p-5' onSubmit={(event) => { event.preventDefault() }} >
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

export default EditCourseLayout