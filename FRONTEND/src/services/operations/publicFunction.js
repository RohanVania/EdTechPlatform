import { apiCaller } from "../apiconnector"
import {publicApi} from "../apiList"



export const getAllCategories=async ()=>{
     try{
       const {data}= await apiCaller('GET',publicApi.SHOW_ALL_CATEGORY);
       return data;
    }
    catch(err){
        throw new Error('Network Error while Fetching Categories');
    }
}