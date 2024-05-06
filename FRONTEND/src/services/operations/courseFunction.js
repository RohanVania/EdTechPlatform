import toast from "react-hot-toast";
import { courseApi } from "../apiList";
import { apiCaller } from "../apiconnector";
import { setCourse} from "../../slices/addcourseSlice"

//* My Courses Fetch Function
export const fetchMyCourses = async () => {
    try {
        const { data } = await apiCaller('GET',courseApi.MY_COURSES );
        if(data.status==="Success"){
            return data
        }
    }
    catch (err) {
        console.log(err);
    }
}


//* Create Course
export const addMyCourse=async (formData,dispatch)=>{
    try{
               console.log(formData);
               const result= await apiCaller("POST",courseApi.ADD_COURSE,formData,{ 
                    'Content-Type': 'multipart/form-data'
               });
               
               if(result?.data?.status!="Failed"){
                toast.success('Course added  🔥', {
                    id: "course-1",
                })
                dispatch(setCourse(result?.data?.data))

               }

               if(result?.data?.status=="Failed"){
                toast.error(`${result.data.message} 😪`, {
                    id: "courseAdd-error1",
                    style: {
                        minWidth: '185px',
                        color: 'red',
                        fontSize:'14px'
                    },
                    duration: '120'
                })
               }
              
               return result?.data;
            }
    catch(err){
        console.log(err)
        toast.error("Something went while adding course 😪", {
            id: "course-add-error",
            style: {
                minWidth: '145px',
                color: 'red',
            },
            duration: '120'
        })
        return err
    }
}




//**  Delete a Particular Course
export const deleteACourse=async(id)=>{
    try{
        const {data}=await apiCaller('DELETE',courseApi.DELETE_PARTICULAR_COURSE(id));
       
        if(data.data==="Nothing"){
            toast("😁 Already deleted before / dont exists")
            return data;
        }
        if(data.status==="Success"){
            toast.success(data.msg)
            return data;
        }
    }
    catch(err){
        console.log(err)
    }
}