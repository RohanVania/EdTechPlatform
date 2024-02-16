import toast from "react-hot-toast";
import { apiCaller } from "../apiconnector";
import { userApiEndpoints } from "../apiList"

export const changePasswordApiOperation = async (formData, setApiCalled) => {
    try {
        console.log("Change Password API Called");
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
        console.log("Change Image API Called");
        setApiCalled(true);
        const response = await apiCaller('PUT', userApiEndpoints.CHANGE_IMAGE_API,file)
        if(response.data.status==='Success'){
            toast.success('Image changed successfully 🔥',{
                id:'image-changed-1'
            });
        }
        else{
            toast.error('Something went wrong, pls contact us',{
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
        toast.error("Something went wrong in change  😪", {
            id: "changePassword-error1",
            style: {
                minWidth: '145px',
                color: 'red',
            },
            duration:'1000'
        })

    }
}