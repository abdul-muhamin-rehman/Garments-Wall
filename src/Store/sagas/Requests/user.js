import axios from "axios";
import ReduxStore from "../../ReduxStore";

export const requestUpdateUser = user =>{
    console.log(ReduxStore.getState().token);
    return axios.request({
        method:'get',
        url:`https://nisum.humhub.com/api/v1/user/${user.id}`,
        data: user,
        headers:{
            "Authorization" : `Bearer ${ReduxStore.getState().token}`
        }
    })
    
}

//TODO
//user not updating 