import { all, takeLatest } from "redux-saga/effects"
import { handleDelToken, handleSetToken } from "./Handlers/token";
import { handleUpdateUser } from "./Handlers/user"

function* watcherSaga() {
    yield takeLatest('UPDATE_USER', handleUpdateUser);
}

function* tokenWatcherSaga() {
    yield takeLatest('SET_TOKEN',handleSetToken);
}

function* tokenDeleteWatcherSaga() {
    yield takeLatest('DEL_TOKEN',handleDelToken);
}

export default function* watchersRootSaga() {
    yield all ([
        watcherSaga(),
        tokenWatcherSaga(),
        tokenDeleteWatcherSaga()
    ]);
  }