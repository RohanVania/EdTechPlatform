import toast from "react-hot-toast";
import { courseApi } from "../apiList";
import { apiCaller } from "../apiconnector";

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
export const addMyCourse=async ()=>{
    try{
                
    }
    catch(err){
        console.log(err)
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