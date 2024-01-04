

import React, { useRef } from 'react'
import Buttons from '../core/Buttons';
import { useForm } from 'react-hook-form'

function AboutForm() {
    
    const textbox = useRef();

    const { register, handleSubmit, setValue,reset,formState: {
        errors,
    } } = useForm();

    const onSubmit = (data) => {
        if (textbox.current.innerText === "") {
            if (!data.message) {
                data.message = "Please Contact Back"
            }
        }
        console.log("Form Data After Submitting", data)
        reset();
    }

    const handleContentChange = (data) => {
        setValue('message', data.target.innerText)
    };


    return (
        <form id='about_contact_form' className={`  tw-flex tw-flex-col tw-justify-center tw-px-3  tw-gap-y-7 tw-text-white`} onSubmit={handleSubmit(onSubmit)}>
            <div className='tw-grid tw-grid-cols-1 btnalign:tw-grid-cols-2 tw-gap-y-6 tw-gap-x-6 tw-justify-center '>
                <div className='tw-flex tw-flex-col tw-gap-y-2'>
                    <label htmlFor='firstname' className='tw-text-richblack-5 tw-font-[400] tw-text-[15px]'>First Name</label>
                    <input type='text' id='firstname' placeholder='Enter first name' {...register('firstname', {
                        required: { value: true, message: `First name is required` },
                        maxLength: { value: 50, message: `First name exceeded limit` }
                    })} />
                    {errors.firstname && errors.firstname.type === 'required' && <p className='tw-text-red-400'>{errors.firstname.message} <sup>*</sup></p>}
                </div>
                <div className='tw-flex tw-flex-col tw-gap-y-2'>
                    <label htmlFor='lastname' className='tw-text-richblack-5 tw-font-[400] tw-text-[15px]'>Last Name</label>
                    <input type='text' id='lastname' placeholder='Enter Last name' {...register('lastname', {
                        required: { value: true, message: 'Last name is required' },
                        maxLength: { value: 50, message: 'Last name exceeded limit' }
                    })} />
                    {
                        errors.lastname && <p className='tw-text-red-400'>{errors.lastname.message} <sup>*</sup></p>
                    }
                </div>
            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-2'>
                <label htmlFor='emailaddress' className=' tw-font-[400] tw-text-[15px] tw-text-white'>Email Address</label>
                <input type='email' id='emailaddress' placeholder='Enter email address' {...register('email', {
                    required: { value: true, message: 'Email is required' },
                    validate: {
                        length: (v) => v.length <= 30 || 'Email exceeded limit',
                        special: (v) => /^[^@]*@[^@]*$/.test(v) || 'Email should contain atleast @',
                        pattern: (v) => /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(v) || 'Email should be of form a@domain.topdomain'
                    }
                })} />
                {
                    errors.email && errors.email.type === 'required' && <p className='tw-text-red-400'>{errors.email.message} <sup>*</sup></p> ||
                    errors.email && errors.email.type === 'length' && <p className='tw-text-red-400'>{errors.email.message} <sup>*</sup></p> ||
                    errors.email && errors.email.type === 'special' && <p className='tw-text-red-400'>{errors.email.message} <sup>*</sup></p> ||
                    errors.email && errors.email.type === 'pattern' && <p className='tw-text-red-400'>{errors.email.message} <sup>*</sup></p>
                }

            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-2'>
                <label htmlFor='phonenumber' className=' tw-font-[400] tw-text-[15px]'>Phone Number</label>
                <div className='tw-flex tw-gap-x-5'>
                    <select className='' {...register('country-code')}>
                        <option value={91}>+91</option>
                        <option value={92}>+92</option>
                        <option value={93}>+93</option>
                        <option value={94}>+94</option>
                        <option value={95}>+95</option>
                    </select>
                    <input type='tel' id='phonenumber' placeholder='1234 567890' className='tw-w-full' {...register('phonenumber', {
                        required: 'Phone number is required',
                        minLength: { value: 9, message: 'Number should be atleast 9 digits' },
                        maxLength: { value: 9, message: 'Number exceeded limit' },
                        validate: {
                            onlyDigit: (v) => /^[0-9]+$/.test(v) || 'Only digits are allowed'
                        }
                    })} />
                </div>
                {
                    errors.phonenumber && errors.phonenumber.type === 'required' && <p className='tw-text-red-400'>{errors.phonenumber.message} <sup>*</sup></p> ||
                    errors.phonenumber && errors.phonenumber.type === 'minLength' && <p className='tw-text-red-400'>{errors.phonenumber.message} <sup>*</sup></p> ||
                    errors.phonenumber && errors.phonenumber.type === 'maxLength' && <p className='tw-text-red-400'>{errors.phonenumber.message} <sup>*</sup></p> ||
                    errors.phonenumber && errors.phonenumber.type === 'onlyDigit' && <p className='tw-text-red-400'>{errors.phonenumber.message} <sup>*</sup></p>
                }
            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-2'>
                <label htmlFor='message' className=' tw-font-[400] tw-text-[15px]'>Message</label>
                <div
                    id='message'
                    role="textbox"
                    contentEditable="true"
                    className='textarea'
                    ref={textbox}
                    onInput={handleContentChange}
                ></div>
            </div>

            <Buttons onClick={handleSubmit(onSubmit)} text="Send Message" active className="tw-text-black tw-font-[500] tw-text-center tw-text-[18px]" />
        </form>
    )
}

export default AboutForm