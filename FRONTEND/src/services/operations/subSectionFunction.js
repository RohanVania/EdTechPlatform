import toast from "react-hot-toast";
import { apiCaller } from "../apiconnector";
import { subSectionApi } from "../apiList";


export const addSubSectionApiCall = async (formObject, dispatch) => {
    try {
        const apiResult = await apiCaller('POST', subSectionApi.ADD_SUB_SECTION, formObject, {
            'Content-Type': 'multipart/form-data'
        })

        if (apiResult?.data?.status !== 'Success') {
            toast.error(`${apiResult.data.message} 😪`, {
                id: "lecture-error1",
                style: {
                    minWidth: '185px',
                    color: 'red',
                    fontSize: '14px'
                },
                duration: '120'
            })
            return

        }

        toast.success('Lecture added  🔥', {
            id: "lecture-1",
        })

        // dispatch(setCourse(result?.data?.data));
        // dispatch(updateUser(result?.data?.updatedUserDetails))


        return apiResult?.data;

    } catch (err) {
        console.log(err)
        toast.error("Something went while adding lecture 😪", {
            id: "lecture-add-error",
            style: {
                minWidth: '145px',
                color: 'red',
            },
            duration: '120'
        })
    }

}

//**  Delete a Particular Course
export const deleteSubSectionApiCall = async (data) => {
    try {
        console.log(data)
        const apiResult = await apiCaller('DELETE', subSectionApi.DELETE_SUB_SECTION, data);

        if (apiResult.data.status !== 'Success') {
            toast.error(`${apiResult.data.message} 😪`, {
                id: "delete-lectur-error",
                style: {
                    minWidth: '185px',
                    color: 'red',
                    fontSize: '14px'
                },
                duration: '120'
            })
            return apiResult.data
        }

        toast.success('Lecture Deleted  🔥', {
            id: "delete-lecture-1",
        })

        return apiResult.data
    }
    catch (err) {
        console.log(err)
        toast.error("Something went while deleting lecture 😪", {
            id: "lecture-delete-error",
            style: {
                minWidth: '145px',
                color: 'red',
            },
            duration: '120'
        })
    }
}