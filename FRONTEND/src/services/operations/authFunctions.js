import toast from "react-hot-toast";
import { apiCaller } from "../apiconnector"
import { authEndPoints } from "../apiList"
import { setLoading, setRegisterData } from "../../slices/authSlice"
import {setUser} from "../../slices/profileSlice"

export const loginApiOperation = async (formdata, navigate, dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await (apiCaller('POST', authEndPoints.LOGIN_API, formdata));
        if (response.data.success !== 'Success') {
            throw new Error(response.data.msg)
        }
        toast.success('Successfully Authenticated 🔥', {
            id: "Login-1",
        })
        dispatch(setLoading(false));
        console.log(response)
        dispatch(setUser(response.data.user));
        localStorage.setItem('user',JSON.stringify(response.data.user));
        navigate('/dashboard/my-profile')
        return response

    } catch (err) {
        console.log("Error while Login", err);
        toast.error("Credentials don't match try again 😪", {
            id: "login-error1",
            style: {
                minWidth: '145px',
                color: 'red',
            },
            duration: '120'
        })
        dispatch(setLoading(false))
    }
}


export const forgotPasswordApiOperation = async (formdata, setEmailSent, setApiCalled, dispatch) => {
    try {
        dispatch(setLoading(true))
        setApiCalled(true)
        const response = await toast.promise(apiCaller('POST', authEndPoints.FORGOT_PASSWORD_TOKEN_API, formdata),
            {
                loading: 'Thank you for waiting 🙏',
                success: "Reset password link sent 😎",
                error: 'Email not registered with us 🤷‍♀️ '
            },
            {
                style: {
                    minWidth: '280px'
                },
                onClose: () => {
                    setApiCalled(false);
                },
            },
            {
                success: { icon: "🔥" },
                error: {
                    icon: '❌',
                }
            },
        )

        if (response.data.status !== 'Success') {
            throw new Error(response.data.msg)
        }

        setEmailSent(true)
        setApiCalled(false)
        dispatch(setLoading(false))
        return response

    } catch (err) {
        console.log('Reset Password token error', err)
        toast.error(`${err}`, {
            id: 'Forgot-Password-error-1'
        });
        setApiCalled(false);
        setLoading(false)
    }

}

export const sendOtpApiOperation = async (formData, setApiSent, dispatch) => {
    try {
        setApiSent(true)
        const response = await toast.promise(apiCaller('POST', authEndPoints.SEND_OTP_API, { email: formData.email }),
            {
                loading: 'Please wait before registering 🙏',
                success: 'Verification code is sent to email 😎',
                error: `Can't send verification code 🤷‍♂️ `,
            },
            {
                style: {
                    minWidth: '299px',
                }
            },
            {
                success: { icon: '🔥' },
                error: {
                    icon: '❌'
                }
            }
        )


        if (response.data.status !== 'Success') {
            throw new Error(response.data.msg);
        }

        //* Dispatch Register Data only when the otp is sent
        dispatch(setRegisterData(formData))
        setApiSent(false)
        return response;


    } catch (err) {
        console.log('Otp sending error', err);
        setApiSent(false)
        dispatch(setRegisterData(null))
        return err
    }
}

export const registerApiOperation = async (formData, setApiCalled, navigate, dispatch) => {
    try {
        setApiCalled(true)
        const response = await apiCaller('POST', authEndPoints.REGISTER_API, formData)

        if (response.data.status !== 'Success') {
            throw new Error(response.data.msg);
        }

        toast.success('User registered successfully', {
            id: 'Register-successs-1'
        })
        dispatch(setRegisterData(null))


        navigate('/login')



    } catch (err) {
        console.log('Registration Error =>', err)
        console.log(err.toString().split("Error: ")[1])
        toast(`${err.toString().split("Error: ")[1]}`, {
            id: 'Register-Error-1',
            icon: '😆',
            style: {
                minWidth: '280px'
            }
        })
        setApiCalled(false)
        return err;
    }
}

export const checkResetPasswordTokenApiOperation = async (params, setApiCalled, navigate) => {
    try {
        const token = params.resetToken
        setApiCalled(true);
        const result = await apiCaller('GET', authEndPoints.RESET_PASSWORD_VALID_TOKEN(token))
        setApiCalled(false)
        
        return result;
    } catch (err) {
        setApiCalled(false)
        console.log("Error", err);
        navigate("/error")
    }
}

export const resetPasswordApiOperation = async (formData,navigate) => {
    try {
        const apiResult = await toast.promise(apiCaller('POST', authEndPoints.RESET_PASSWORD, formData),
            {
                loading: 'Please Wait while resetting 🙏',
                success: 'Password  has been reset 😎',
                error:'Something went wrong, try again'
            },
            {
                style: {
                    minWidth: '299px',
                }
            },
            {
                success: { icon: '🔥' },
                error: {
                    icon: '❌'
                }
            }
        )
        
    return apiResult

    } catch (err) {
        console.log("Error Message", err)
        navigate('/');
    }
}