import absenceReducer from '../absenceReducer';
import { AbsenceActionType } from '../../actions/actionTypes';
import { mockMembers, mockAbsences } from '../../actions/tests/mockData';

const mockInitialState = {
    membersMap: new Map(),
    absenceList: [],
    isLoading: true,
    isError: false
}
describe('Absence Reducer', () => {
    it('should handle SetIsLoading', () => {
        expect(absenceReducer(mockInitialState, {
            type: AbsenceActionType.SetIsLoading,
            payload: true
        })).toEqual({
            ...mockInitialState, isLoading: true
        })
    });

    it('should handle SetMemberList', () => {
        expect(absenceReducer(mockInitialState, {
            type: AbsenceActionType.SetMemberList,
            payload: mockMembers
        })).toEqual({
            ...mockInitialState, membersMap: new Map(mockMembers.map(member => [member.userId, member]))
        });
    });

    it('should handle SetAbsenceList', () => {
        expect(absenceReducer(mockInitialState, {
            type: AbsenceActionType.SetAbsenceList,
            payload: mockAbsences
        })).toEqual({
            ...mockInitialState, absenceList: mockAbsences
        });
    });

    it('should handle SetIsError', () => {
        expect(absenceReducer(mockInitialState, {
            type: AbsenceActionType.SetIsError,
            payload: true
        })).toEqual({
            ...mockInitialState, isError: true
        })
    });

});