//  Api Caller Instance

import axios from "axios"

const axiosInstance=axios.create({
    baseURL:process.env.REACT_APP_API_BASE_URL,
})

//* Api Connector 
export const apiCaller=(method,url,bodyData,header,params)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        headers:header?header:null,
        data:bodyData? bodyData:null,
        params:params?params:null,
        withCredentials:true
    })
}




export default axiosInstance;



