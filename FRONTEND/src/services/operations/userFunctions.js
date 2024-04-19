import toast from "react-hot-toast";
import { apiCaller } from "../apiconnector";
import { userApiEndpoints } from "../apiList"
import {updateUser,setChangeProfileFlag, setUser} from "../../slices/profileSlice"
import { setToken, setdeleteAccount } from "../../slices/authSlice";

//* Change Password Api Operation 
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

//* Change Image Operation 
export const changeImageOperation = async (file,dispatch,setApiCalled) => {
    try {
        setApiCalled(true);
        let localStorageUser=JSON.parse(localStorage.getItem('user'));
        const response = await apiCaller('PUT', userApiEndpoints.CHANGE_IMAGE_API,file,{
            'Content-Type': 'multipart/form-data'
          })
        if(response.data.status==='Success'){
            dispatch(updateUser(response.data.data));
            toast.success('Image changed successfully 🔥',{
                id:'image-changed-1'
            });
            localStorageUser.image=response.data.data.image
            localStorage.setItem('user',JSON.stringify(localStorageUser));
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

//* Change Profile Info Api Operation 
export const changeProfileInfo = async (formData,dispatch) => {
    try {
        dispatch(setChangeProfileFlag(true))
        const response = await apiCaller('PUT', userApiEndpoints.CHANGE_PROFILE_INFO_API,formData)
        let localstorageitem=JSON.parse(localStorage.getItem('user'))
        console.log(response)
        if(response.data.status==='Success'){
            dispatch(updateUser(response.data.updatedDocument));
            toast.success('Details changed successfully 🔥',{
                id:'details-changed-1'
            });
            localstorageitem={...response.data.updatedDocument};
            localstorageitem.password=undefined;
            localStorage.setItem('user',JSON.stringify(localstorageitem))
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



//* Has Bugs
export const deleteOperation=async(dispatch)=>{
    try{
       const axiosResponse= await apiCaller('DELETE',userApiEndpoints.DELETE_ACCOUNT_API)
       localStorage.clear();
        if(axiosResponse?.data?.data?.status==="Success"){
            toast.success('Account deleted successfully 😁',{
                id:'Delete-account-1'
            })
            dispatch(setToken(null))
            dispatch(setUser(null))
        }
        
        dispatch(setdeleteAccount(false))
        return axiosResponse       
        
    }catch(err){
        console.log(err);
        dispatch(setdeleteAccount(false))
        toast.error('Something went wrong 😪',{
            id:'Delete-error-1'
        })
        return err
    }
}

