import { put, takeLatest, CallEffect, PutEffect } from 'redux-saga/effects';
import { Absence } from '../../../types/absencesType';
import { MembersResponseType, ResponseStatus, Member } from '../../../types/membersType';
import { setAbsenceList, setMemberList, setIsLoading, setIsError } from '../../actions/absenceAction';
import { AbsenceActionType } from '../../actions/actionTypes';
import absenceRootSaga, { getMemberList, getAbsenceList } from '../absenceSaga';
import { mockAbsences, mockMembers } from '../../actions/tests/mockData';
import * as mockAPI from '../../../services/httpService';

describe('Absence saga suite', () => {
    const rootGen = absenceRootSaga();

    it('should wait for latest GetMemberList and execute getMemberList', () => {
        expect(rootGen.next().value)
            .toEqual(takeLatest(AbsenceActionType.GetMemberList, getMemberList))
    });

    it('should be done on next iteration', () => {
        expect(rootGen.next().done).toBeTruthy();
    });

    describe('getMemberList Saga', () => {
        let memberListGen: Generator<CallEffect<unknown> | PutEffect<{
            type: AbsenceActionType.SetMemberList;
            payload: Member[];
        }> | PutEffect<{
            type: AbsenceActionType.SetIsError;
            payload: boolean;
        }>, void, MembersResponseType>

        beforeEach(() => {
            memberListGen = getMemberList();

            const callDescriptor = memberListGen.next().value;
            expect(callDescriptor).toMatchSnapshot();

        });

        it('should call getMemberList API and dispatch success action', async () => {
            const requestMembers = jest.spyOn(mockAPI, 'getData')
                .mockResolvedValue({ "message": ResponseStatus.SUCCESS, payload: mockMembers });


            const putDescriptor = memberListGen.next({ "message": ResponseStatus.SUCCESS, payload: mockMembers }).value
            expect(putDescriptor).toEqual(put(setMemberList(mockMembers)));

            memberListGen.next();

            expect(memberListGen.next().done).toBeTruthy();
            requestMembers.mockClear();
        });

        it('should call getMemberList api and dispatch error action', async () => {
            const requestMembers = jest.spyOn(mockAPI, 'getData')
                .mockResolvedValue({ "message": ResponseStatus.FAILURE, payload: [] });

            const putDescriptor = memberListGen.next({ "message": ResponseStatus.FAILURE, payload: mockMembers }).value
            expect(putDescriptor).toEqual(put(setIsError(true)));

            expect(memberListGen.next().done).toBeTruthy();
            requestMembers.mockClear();
        });
    });

    describe('getAbsenceList Saga', () => {
        let AbsenceListGen: Generator<CallEffect<unknown> | PutEffect<{
            type: AbsenceActionType.SetAbsenceList;
            payload: Absence[];
        }> | PutEffect<{
            type: AbsenceActionType.SetIsError;
            payload: boolean;
        }> | PutEffect<{
            type: AbsenceActionType.SetIsLoading;
            payload: boolean;
        }>>;

        beforeEach(() => {
            AbsenceListGen = getAbsenceList();

            const callDescriptor = AbsenceListGen.next().value;
            expect(callDescriptor).toMatchSnapshot();

        });

        it('should call getMemberList API and dispatch success action', async () => {
            const requestMembers = jest.spyOn(mockAPI, 'getData')
                .mockResolvedValue({ "message": ResponseStatus.SUCCESS, payload: mockAbsences });

            const putDescriptor = AbsenceListGen.next({ "message": ResponseStatus.SUCCESS, payload: mockAbsences }).value;
            expect(putDescriptor).toEqual(put(setAbsenceList(mockAbsences)));

            const loadingDescriptor = AbsenceListGen.next().value;
            expect(loadingDescriptor).toEqual(put(setIsLoading(false)));

            expect(AbsenceListGen.next().done).toBeTruthy();
            requestMembers.mockClear();
        });

        it('should call getMemberList api and dispatch error action', async () => {
            const requestMembers = jest.spyOn(mockAPI, 'getData')
                .mockResolvedValue({ "message": ResponseStatus.FAILURE, payload: mockAbsences });

            const putDescriptor = AbsenceListGen.next({ "message": ResponseStatus.FAILURE, payload: mockAbsences }).value;
            expect(putDescriptor).toEqual(put(setIsError(true)));

            const loadingDescriptor = AbsenceListGen.next().value;
            expect(loadingDescriptor).toEqual(put(setIsLoading(false)));

            expect(AbsenceListGen.next().done).toBeTruthy();
            requestMembers.mockClear();
        });
    });
});