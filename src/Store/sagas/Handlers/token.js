import { call } from 'redux-saga/effects';
import { delUser, setUser } from '../../Actions/UserActions';
import { requestGetCurrentUser } from '../Requests/token';

export function* handleSetToken(action){
    try {
        const response = yield call(requestGetCurrentUser,action.payload);
        setUser(response.data);
        } catch (error) {
        console.log(error);
    }
}
export function* handleDelToken(){
    try {
        yield delUser();
        } catch (error) {
        console.log(error);
    }
}