import { fork, all } from 'redux-saga/effects';
import UserSaga from './UserSaga'
import PostSaga from './PostSaga'

export default function* rootSaga() {
    //fork is used for running non blocking task or sagas
    yield all([
        fork(UserSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(PostSaga)
    ]);
}