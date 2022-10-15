import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userManagment as user } from './Reducers/Reducers';
import { tokenManagment as token } from './Reducers/TokenReducers';
import createSagaMiddleware from 'redux-saga';
import watchersRootSaga from "./sagas/rootSaga";

const reducers = {  user, token};

const rootReducers = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

const ReduxStore  = configureStore({reducer : rootReducers ,  middleware : [sagaMiddleware]});

sagaMiddleware.run(watchersRootSaga);

export default ReduxStore;

