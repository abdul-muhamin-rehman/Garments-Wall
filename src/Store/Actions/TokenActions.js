import  ReduxStore  from "../ReduxStore";

export const setToken = token =>{
    ReduxStore.dispatch({
        type : "SET_TOKEN",
        payload : token,
    })
    
};

export const delToken = () =>{
    ReduxStore.dispatch({
        type : "DEL_TOKEN",
        payload : '',
    })
    
};
