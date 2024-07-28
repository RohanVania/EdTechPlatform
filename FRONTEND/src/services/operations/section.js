import toast from "react-hot-toast";
import { apiCaller } from "../apiconnector"
import { sectionApi } from "../apiList"
import { setCourse, setEditCourse } from "../../slices/addcourseSlice";


export const addSection = async (inputbody, dispatch) => {
    try {

        // dispatch(setFormSubmit(true))
        const res = await apiCaller("POST", sectionApi.ADD_SECTION, inputbody)

        if (res?.data.status === "Success") {
            toast.success('Section added  🔥', {
                id: "Section-1",
            })

            dispatch(setCourse(res?.data.updatedCourseDetails));
            return res?.data;
        }

        if (res?.data.status === "Failed") {
            toast.error(`${res.data.message} 😪`, {
                id: "sectionAdd-error1",
                style: {
                    minWidth: '185px',
                    color: 'red',
                    fontSize: '14px'
                },
                duration: '120'
            })
        }


    }
    catch (err) {
        console.log(err)
        toast.error("Something went while adding section 😪", {
            id: "section-add-error",
            style: {
                minWidth: '145px',
                color: 'red',
            },
            duration: '120'
        })
        return err

    }
}


export const deleteSection = async (formBody, dispatch) => {
    try {
        const res = await apiCaller("DELETE", sectionApi.DELETE_SECTION, formBody)

        if (res?.data.status !== "Success") {
            toast.error(`${res.data.message} 😪`, {
                id: "deleteSection-error1",
                style: {
                    minWidth: '185px',
                    color: 'red',
                    fontSize: '14px'
                },
                duration: '120'
            })
            return res.data
        }

        toast.success('Section Deleted  🔥', {
            id: "Section-Delete-1",
        })
        console.log(res.data.updatedCourse);

        dispatch(setCourse(res.data.updatedCourse))
        return res?.data;

    }
    catch (err) {
        console.log(err)
        toast.error("Something went while deleting section 😪", {
            id: "section-add-error",
            style: {
                minWidth: '145px',
                color: 'red',
            },
            duration: '120'
        })
        return err

    }
}