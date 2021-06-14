import { ResponseStatus } from './membersType';

export enum AbsenceType {
    sickness = 'sickness',
    vacation = 'vacation',
}

export interface Absence {
    admitterId: number | null;
    admitterNote: string;
    confirmedAt: string | null;
    createdAt: string;
    crewId: number;
    endDate: string;
    id: number;
    memberNote: string;
    rejectedAt: string | null;
    startDate: string;
    type: AbsenceType;
    userId: number;
}

export interface AbsencesResponseType {
    message: ResponseStatus;
    payload: Absence[];
}

export enum AbsenceStatus {
    Requested = 'Requested',
    Confirmed = 'Confirmed',
    Rejected = 'Rejected'
}

