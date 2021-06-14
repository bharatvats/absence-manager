import { all, call, spawn } from 'redux-saga/effects';
import absenceSaga from './absenceSaga';

export default function* rootSaga() {
    const sagas = [
        absenceSaga
    ];

    yield all(sagas.map(saga => spawn(function* () {
        while (true) {
            try {
                yield call(saga);
                break;
            } catch (ex) {
                console.log(ex);
            }
        }
    })));
}