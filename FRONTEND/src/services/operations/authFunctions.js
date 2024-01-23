import toast from "react-hot-toast";
import { apiCaller } from "../apiconnector"
import { authEndPoints } from "../apiList"
import { setLoading } from "../../slices/authSlice"

export const loginApiOperation = async (formdata, navigate,dispatch) => {
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
            navigate('/profile')
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


export const forgotPasswordApiOperation = async (formdata, setEmailSent, setApiCalled,dispatch) => {
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
            setApiCalled(false);
            setLoading(false)
        }

    }

    export const sendOtpApiOperation=()=>{
        try{

        }catch(err){
            
        }
    }

