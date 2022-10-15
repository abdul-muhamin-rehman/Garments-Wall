import  ReduxStore  from "../ReduxStore";

export const setUser = user =>{
    ReduxStore.dispatch({
        type : "SET_USER",
        payload : user,
    })
    
};
export const updateUser = user =>{
    ReduxStore.dispatch({
        type:'UPDATE_USER',
        payload: user
    })
}
export const delUser = () =>{
        ReduxStore.dispatch({
            type : "DEL_USER",
            payload:{}
        })
};