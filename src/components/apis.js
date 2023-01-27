import axios from "axios";
import { CONSTANTS } from "./constants";

export const apis = async (method, url, params={})=>{
    let parameter={
        responseType:params.responseType||"json",
        headers:{
            "content-Type": "application/json",
            ...params.headers,
        },
        method:method,
        url:url  //using axios package
    }
    switch (method) {
        case CONSTANTS.apis.POST:
            parameter.data=params.data||{}
            break;
        default:
            break;
    }
    console.log(parameter)
    // return fetch(url,parameter).then(resp=>resp?.json())  //using fetch 
   return await axios(parameter).then(res=> res?.data);   //using axios package
   
}
