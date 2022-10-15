import axios from "axios"

export const requestGetCurrentUser = token =>{
    return axios.request({
        method:'get',
        url:'https://nisum.humhub.com/api/v1/auth/current',
        headers:{
            "Authorization" : `Bearer ${token}`
        }
    })
    
}