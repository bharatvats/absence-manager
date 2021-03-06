import { call, put, takeLatest } from 'redux-saga/effects';
import { getData } from '../../services/httpService';
import { AbsencesResponseType } from '../../types/absencesType';
import { MembersResponseType, ResponseStatus } from '../../types/membersType';
import { setAbsenceList, setMemberList, setIsLoading, setIsError } from '../actions/absenceAction';
import { AbsenceActionType } from '../actions/actionTypes';

export default function* rootSaga() {
    yield takeLatest(AbsenceActionType.GetMemberList, getMemberList);
}

export function* getMemberList() {
    try {
        const members: MembersResponseType = yield call(getData, 'members');
        if (members.message === ResponseStatus.SUCCESS) {
            yield put(setMemberList(members.payload));
            yield call(getAbsenceList);
        } else {
            yield put(setIsError(true));
        }
    } catch (e) {
        console.error('Error while fetching members', e);
        yield put(setIsError(true));
        yield put(setIsLoading(false));
    }
}

export function* getAbsenceList() {
    try {
        const absences: AbsencesResponseType = yield call(getData, 'absences');
        if (absences.message === ResponseStatus.SUCCESS) {
            yield put(setAbsenceList(absences.payload));
        } else {
            yield put(setIsError(true));
        }
    } catch (e) {
        console.error('Error while fetching Absences', e);
        yield put(setIsError(true));
    } finally {
        yield put(setIsLoading(false));
    }
}