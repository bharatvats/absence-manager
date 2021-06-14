import { AbsenceActionType } from './actionTypes';
import { Member } from '../../types/membersType';
import { Absence } from '../../types/absencesType';

export type AbsenceActionReturnTypes = ReturnType<typeof setMemberList>
    | ReturnType<typeof setAbsenceList>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setIsError>;

export function getMemberList(): {
    type: AbsenceActionType.GetMemberList
} {
    return {
        type: AbsenceActionType.GetMemberList
    };
}

export function setMemberList(payload: Member[]): {
    type: AbsenceActionType.SetMemberList,
    payload: Member[]
} {
    return {
        type: AbsenceActionType.SetMemberList,
        payload
    }
}

export function setAbsenceList(payload: Absence[]): {
    type: AbsenceActionType.SetAbsenceList,
    payload: Absence[]
} {
    return {
        type: AbsenceActionType.SetAbsenceList,
        payload
    }
}

export function setIsLoading(isLoading: boolean): {
    type: AbsenceActionType.SetIsLoading,
    payload: boolean
} {
    return {
        type: AbsenceActionType.SetIsLoading,
        payload: isLoading
    }
}

export function setIsError(isError: boolean): {
    type: AbsenceActionType.SetIsError,
    payload: boolean
} {
    return {
        type: AbsenceActionType.SetIsError,
        payload: isError
    }
}