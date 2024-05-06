import toast from "react-hot-toast";
import { apiCaller } from "../apiconnector"
import { sectionApi } from "../apiList"
import { setFormSubmit } from "../../slices/addcourseSlice";


export const addSection = async (inputbody,dispatch) => {
    try {

        dispatch(setFormSubmit(true))
        const res = await apiCaller("POST", sectionApi.ADD_SECTION, inputbody)

        if (res?.data.status === "Success") {
            toast.success('Section added  🔥', {
                id: "Section-1",
            })
        }

        if (res?.data.status === "Failed") {
            toast.error(`All Fields are required 😪`, {
                id: "courseAdd-error1",
                style: {
                    minWidth: '185px',
                    color: 'red',
                    fontSize: '14px'
                },
                duration: '120'
            })
        }

        dispatch(setFormSubmit(false))

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
        dispatch(setFormSubmit(false))
        return err

    }
}