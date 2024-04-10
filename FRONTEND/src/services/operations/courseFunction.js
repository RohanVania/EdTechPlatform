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
