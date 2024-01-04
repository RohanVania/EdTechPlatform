
import axios from "axios"

const axiosInstance=axios.create({
    baseURL:'localhost:4000/api/v1',
})


export const apiCaller=(method,header,bodyData,url,params)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        headers:header?header:null,
        data:bodyData? bodyData:null,
        params:params?params:null,
    })
}




export default axiosInstance;



