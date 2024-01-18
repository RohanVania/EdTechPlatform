
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from "react-icons/fa6";

function ForgotPasswordPage() {
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: {
        errors
    } } = useForm();

    function onSubmit(formData) {
        //** Call Forgot Api From Here */
        console.log(formData);
        reset();
    }

    //** What the response is receieved whether email is sent make the state true */
    return (
        <div className='tw-bg-richblack-900 tw-mt-[77px] tw-min-h-[91.3vh] tw-flex tw-justify-center tw-items-center'>
            {false ?
                <div className='tw-max-w-[500px] tw-px-[10px]  '>
                    <h1 className='2xs:tw-text-[22px] sm:tw-text-[30px] tw-font-[600] tw-text-richblack-5'>Reset your password</h1>
                    <p className='tw-text-[13px] sm:tw-text-[17px] tw-text-richblack-100 tw-mt-[10px] tw-font-[400]'>
                        Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery
                    </p>

                    <form className='tw-mt-[24px] tw-flex tw-flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <label className='tw-text-richblack-5 tw-text-[14px] xs:tw-text-[16px] tw-mb-[20px]'>Email Address <sup className='tw-ml-[2px] tw-text-pink-200'>*</sup></label>
                        <input type='text' className=' tw-p-[12px] tw-rounded-[8px] tw-shadow-sm tw-shadow-[#ffffffd9] tw-bg-richblack-800 tw-text-[16px] tw-text-richblack-200 tw-outline-none '
                            {...register('email', {
                                required: { value: true, message: 'Email is required' },
                                validate: {
                                    length: (v) => v.length <= 30 || 'Email exceeded limit',
                                    special: (v) => /^[^@]*@[^@]*$/.test(v) || 'Email should contain atleast @',
                                    pattern: (v) => /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(v) || 'Email should be of form a@domain.topdomain'
                                }


                            })}
                        />
                        {
                            (errors.email && errors.email.type === 'required' && <p className='tw-text-pink-200 tw-mt-3'>{errors.email.message} <sup className='tw-text-pink-200'>*</sup></p>) ||
                            (errors.email && errors.email.type === 'length' && <p className='tw-text-pink-200 tw-mt-3'>{errors.email.message} <sup className='tw-text-pink-200'>*</sup></p>) ||
                            (errors.email && errors.email.type === 'special' && <p className='tw-text-pink-200 tw-mt-3'>{errors.email.message} <sup className='tw-text-pink-200'>*</sup></p>) ||
                            (errors.email && errors.email.type === 'pattern' && <p className='tw-text-pink-200 tw-mt-3'>{errors.email.message} <sup className='tw-text-pink-200'>*</sup></p>)
                        }
                        <button onClick={handleSubmit(onSubmit)} className='tw-p-[12px] tw-mt-[30px] tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[15px] xs:tw-text-[18px] tw-font-[500] active:tw-scale-[.9] tw-transition-all' >Sign In</button>
                    </form>
                    <p className='tw-text-richblack-5 tw-mt-[30px] tw-flex tw-gap-2 tw-items-center tw-w-fit tw-text-[14px] xs:tw-text-base ' onClick={() => navigate('/login')}>
                        <FaArrowLeft />
                        Back to Login
                    </p>
                </div>
                :
                <div className='tw-max-w-[510px] tw-px-[10px]  '>
                    <h1 className='2xs:tw-text-[22px] sm:tw-text-[30px] tw-font-[600] tw-text-richblack-5'>Check Email</h1>
                    <p className='tw-text-[13px] sm:tw-text-[17px] tw-text-richblack-100 tw-mt-[10px] tw-font-[400] '>
                        We have sent the reset email to youremailaccount@gmail.com
                    </p>

                    <form className='tw-mt-[24px] tw-flex tw-flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <button className='tw-p-[12px] tw-mt-[12px] tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[15px] xs:tw-text-[18px] tw-font-[500] active:tw-scale-[.9] tw-transition-all' >Resend email</button>
                    </form>
                    <p className='tw-text-richblack-5 tw-mt-[30px] tw-flex tw-gap-2 tw-items-center tw-w-fit tw-text-[14px] xs:tw-text-base ' onClick={() => navigate('/login')}>
                        <FaArrowLeft />
                        Back to Login
                    </p>
                </div>
                

            }
        </div>
    )
}

export default ForgotPasswordPage




//** Reset - Css and Html Done Responsive */
{/* <div className='tw-max-w-[510px] tw-px-[10px]  '>
    <h1 className='2xs:tw-text-[22px] sm:tw-text-[30px] tw-font-[600] tw-text-richblack-5'>Reset complete !</h1>
    <p className='tw-text-[13px] btnalign:tw-text-[17px] tw-text-richblack-100 tw-mt-[10px] tw-font-[400] '>
        All done! We have sent an email to m*************@gmail.com to confirm
    </p>

    <div className='tw-mt-[24px] tw-flex tw-flex-col'>
        <button className='tw-p-[12px] tw-mt-[12px] tw-rounded-[8px] tw-bg-yellow-50 tw-w-full tw-text-richblack-900 tw-text-[15px] xs:tw-text-[18px] tw-font-[500] active:tw-scale-[.9] tw-transition-all' onClick={() => navigate('/login')} >Return to login</button>
    </div>

</div> */}

//**  https://curity.io/resources/learn/token-handler-spa-example/