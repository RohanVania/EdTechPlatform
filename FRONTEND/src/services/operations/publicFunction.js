import { setToken } from "../../slices/authSlice";
import { apiCaller } from "../apiconnector"
import { publicApi } from "../apiList"


//* Get All Categories Api Operation 
export const getAllCategories = async () => {
    try {
        const { data } = await apiCaller('GET', publicApi.SHOW_ALL_CATEGORY);
        return data;
    }
    catch (err) {
        throw new Error('Network Error while Fetching Categories');
    }
}


//* Check Authenticated Api Operation 
export const checkAuthenticated = async (dispatch, token) => {
    try {
        const { data } = await apiCaller('GET', publicApi.CHECK_ALREADY_LOGGED_IN);
        // console.log("Check Authenticated =>",data)

        if (data.status === "Success") {
            if (!token) {
                dispatch(setToken(data))
            }
        }

        if(data.status ==="Failed"){
            dispatch(setToken(null));
        }

    }
    catch (err) {
        console.log(err);
    }
}
