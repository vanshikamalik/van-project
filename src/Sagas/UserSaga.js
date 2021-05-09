import { put, takeLatest, all } from 'redux-saga/effects';
import ActionConstant from '../Constant'

function* getUsers() {
    console.log("333333333");
    const json = yield fetch('https://dummyapi.io/data/api/user', {
        method: 'GET',
        headers: { 'app-id': '609067161288b4504732bed3' }
    })
        .then(response => response.json());
    yield put({ type: ActionConstant.RECIEVED_USERS, json: json.data, });
}
function* getUsersWatcher() {
    console.log("22222222222");
    yield takeLatest(ActionConstant.GET_USERS, getUsers)
}
export default function* UserSaga() {
    console.log("11111111111");
    yield all([
        getUsersWatcher(),
    ]);
}