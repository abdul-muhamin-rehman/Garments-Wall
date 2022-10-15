import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../Store/Actions/UserActions";
import ReduxStore from "../../Store/ReduxStore";

export const EditUser = () =>{
    const _ = require("lodash");
    const navigate = useNavigate();
	const storeUser=  ReduxStore.getState().user;
    const tempUser = _.merge({account:storeUser.account},{profile:storeUser.profile})
    const [lastName,setUser]=useState(storeUser?.profile.lastname);
    const submitHandler =(event)=>{
        event.preventDefault();
        tempUser.profile.lastname=lastName;
        storeUser.display_name=tempUser.profile.firstname+' '+tempUser.profile.lastname;
        console.log(_.extend(storeUser,tempUser));
        updateUser(_.extend(storeUser,tempUser));
        navigate('/');
    }
    return(
        <>
            <form onSubmit={submitHandler}>
                <label>Last Name :</label>
                <input value={lastName} onChange={(e)=>setUser(e.target.value)}/>
                <button type="submit" >save</button>
            </form>
        </>
    )
}