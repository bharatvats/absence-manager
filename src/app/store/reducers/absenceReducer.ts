import produce from 'immer';
import { AbsenceActionType } from '../actions/actionTypes';
import { Member } from '../../types/membersType';
import { Absence } from '../../types/absencesType';
import { AbsenceActionReturnTypes } from '../actions/absenceAction';

export interface AbsenceState {
    membersMap: Map<number, Member>;
    absenceList: Absence[],
    isLoading: boolean;
    isError: boolean;
}
export const initialState: AbsenceState = {
    membersMap: new Map(),
    absenceList: [],
    isLoading: true,
    isError: false
};
const absence = (
    state: Readonly<AbsenceState> = initialState,
    action: Readonly<AbsenceActionReturnTypes>
) => produce(state, draft => {
    switch (action.type) {
        case AbsenceActionType.SetIsLoading:
            draft.isLoading = action.payload;
            break;
        case AbsenceActionType.SetMemberList:
            draft.membersMap = new Map(action.payload.map(member => [member.userId, member]));
            break;
        case AbsenceActionType.SetAbsenceList:
            draft.absenceList = action.payload;
            break;
        case AbsenceActionType.SetIsError:
            draft.isError = action.payload;
            break;
    }
});
export default absence;