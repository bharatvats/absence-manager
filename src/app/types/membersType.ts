export enum ResponseStatus {
    SUCCESS = 'Success',
    FAILURE = 'Failure'
}

export interface Member {
    crewId: number;
    id: number;
    image: string;
    name: string;
    userId: number;
}

export interface MembersResponseType {
    message: ResponseStatus;
    payload: Member[];
}

