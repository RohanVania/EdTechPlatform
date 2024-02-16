import toast from "react-hot-toast";
import { apiCaller } from "../apiconnector";
import { userApiEndpoints } from "../apiList"
import {updateUser,setChangeProfileFlag} from "../../slices/profileSlice"

export const changePasswordApiOperation = async (formData, setApiCalled) => {
    try {
        setApiCalled(true);
        const response = await apiCaller('POST', userApiEndpoints.CHANGE_PASSWORD_API,formData)
        if(response.data.status==='Success'){
            toast.success('Password changed successfully 🔥',{
                id:'changepassword-1'
            });
        }
        else{
            toast.error('Incorrect Password',{
                id:'Incorrect-oldpassword-1',
                duration:1000
            })
        }
        setApiCalled(false)
        return response;
    }
    catch (err) {
        setApiCalled(false);
        console.log(err)
        toast.error("Something went wrong in change password 😪", {
            id: "changePassword-error1",
            style: {
                minWidth: '145px',
                color: 'red',
            },
            duration:'1000'
        })

    }
}


export const changeImageOperation = async (file,dispatch,setApiCalled) => {
    try {
        setApiCalled(true);
        const response = await apiCaller('PUT', userApiEndpoints.CHANGE_IMAGE_API,file,{
            'Content-Type': 'multipart/form-data'
          })
        if(response.data.status==='Success'){
            dispatch(updateUser(response.data.data));
            toast.success('Image changed successfully 🔥',{
                id:'image-changed-1'
            });
        }
        else{
            toast.error(response.data.msg,{
                id:'Incorrect-changeimage-1',
                duration:1000
            })
        }
        setApiCalled(false)
        return response;
    }
    catch (err) {
        setApiCalled(false);
        console.log(err)
        toast.error("Something went wrong in updating Image  😪", {
            id: "changeImage-error1",
            style: {
                minWidth: '145px',
                color: 'red',
            },
            duration:'1000'
        })

    }
}

export const changeProfileInfo = async (formData,dispatch) => {
    try {
        dispatch(setChangeProfileFlag(true))
        const response = await apiCaller('PUT', userApiEndpoints.CHANGE_PROFILE_INFO_API,formData)
        console.log(response)
        if(response.data.status==='Success'){
            dispatch(updateUser(response.data.updatedDocument));
            toast.success('Details changed successfully 🔥',{
                id:'details-changed-1'
            });
        }
        else{
            toast.error(response.data.msg,{
                id:'incorrect-changeinfo-1',
                duration:1000
            })
        }
        dispatch(setChangeProfileFlag(false))
        return response;
    }
    catch (err) {
        dispatch(setChangeProfileFlag(false))
        console.log(err)
        toast.error("Something went wrong in updating Info  😪", {
            id: "changeinfo-error1",
            style: {
                minWidth: '145px',
                color: 'red',
            },
            duration:'1000'
        })

    }
}