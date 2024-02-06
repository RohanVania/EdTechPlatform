import { setToken } from "../../slices/authSlice";
import { apiCaller } from "../apiconnector"
import { publicApi } from "../apiList"



export const getAllCategories = async () => {
    try {
        const { data } = await apiCaller('GET', publicApi.SHOW_ALL_CATEGORY);
        return data;
    }
    catch (err) {
        throw new Error('Network Error while Fetching Categories');
    }
}


export const checkAuthenticated = async (dispatch, token) => {
    try {
        const { data } = await apiCaller('GET', publicApi.CHECK_ALREADY_LOGGED_IN);
        console.log(data)

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