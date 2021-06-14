import * as actions from '../absenceAction';
import { AbsenceActionType } from '../actionTypes';
import { mockAbsences, mockMembers } from './mockData';

describe('Absence Actions', () => {
    it('should create an action to get MemberList', () => {
        const expectedAction = {
            type: AbsenceActionType.GetMemberList
        };
        expect(actions.getMemberList()).toEqual(expectedAction);
    });

    it('should create an action to setMemberList', () => {
        const expectedAction = {
            type: AbsenceActionType.SetMemberList,
            payload: mockMembers
        };
        expect(actions.setMemberList(mockMembers)).toEqual(expectedAction);
    });

    it('should create an action to setAbsenceList', () => {
        const expectedAction = {
            type: AbsenceActionType.SetAbsenceList,
            payload: mockAbsences
        };
        expect(actions.setAbsenceList(mockAbsences)).toEqual(expectedAction);
    });

    it('should create an action to setIsLoading', () => {
        const expectedAction = {
            type: AbsenceActionType.SetIsLoading,
            payload: true
        };
        expect(actions.setIsLoading(true)).toEqual(expectedAction);
    });

    it('should create an action to setIsError', () => {
        const expectedAction = {
            type: AbsenceActionType.SetIsError,
            payload: true
        };
        expect(actions.setIsError(true)).toEqual(expectedAction);
    });
});