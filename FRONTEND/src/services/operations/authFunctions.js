import toast from "react-hot-toast";
import {apiCaller} from "../apiconnector"
import {authEndPoints} from "../apiList"
import {setLoading} from "../../slices/authSlice"


export const loginApiOperation=(formdata,navigate)=>{
    return async (dispatch)=>{
           dispatch(setLoading(true))
        try{
         const response=await apiCaller('POST',authEndPoints.LOGIN_API,formdata)
            console.log(response);
            
            if(response.data.success!=='Success'){
                throw new Error()
            }
            toast.success('Successfully Authenticated 🔥',{
                    id:"Login-1",
            })
            dispatch(setLoading(false));
            navigate('/profile')
        
        }catch(err){
            console.log('Error while Login',err);
            toast.error('Login Failed',{
                id:"login-error1",
                style:{
                    minWidth:'145px',
                    color:'red',
                },
            })
        }

    }
    

}


export const signupApiOperation =(formdata)=>{

}