import { call , put } from 'redux-saga/effects';
import { updateUser } from '../../Actions/UserActions';
import { requestUpdateUser } from '../Requests/user';

export function* handleUpdateUser(action){
    try {
        yield call(requestUpdateUser(action.payload));
        yield put(updateUser(action.payload.user))
    } catch (error) {
        console.log(error);
    }
}