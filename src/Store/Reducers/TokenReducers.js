export const tokenManagment = (token = '', action ) =>{
    const {type,payload} = action;
    switch(type){
        case 'SET_TOKEN' : {
            token=payload;
            return token;
        }
        case 'DEL_TOKEN' : {
            token=null;
            return token;
        }
        default : return token;
    }
}