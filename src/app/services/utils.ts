import { AbsenceType, AbsenceStatus, Absence } from '../types/absencesType';
import { Member } from '../types/membersType';

export interface RowType {
    id: number;
    name?: string;
    type: AbsenceType;
    startDate: number;
    endDate: number;
    period: string;
    memberNote: string;
    status: AbsenceStatus;
    admitterNote: string;
}

export function createRow(absenceEmployee: Absence, member?: Member): RowType {
    return {
        id: absenceEmployee.id,
        name: member?.name,
        type: absenceEmployee.type,
        startDate: new Date(absenceEmployee.startDate).getTime(),
        endDate: new Date(absenceEmployee.endDate).getTime(),
        period: `${absenceEmployee.startDate} ~ ${absenceEmployee.endDate}`,
        memberNote: absenceEmployee.memberNote,
        status: getStatus(absenceEmployee),
        admitterNote: absenceEmployee.admitterNote
    };
}

function getStatus(absenceEmployee: Absence): AbsenceStatus {
    if (absenceEmployee.confirmedAt) {
        return AbsenceStatus.Confirmed;
    } else if (absenceEmployee.rejectedAt) {
        return AbsenceStatus.Rejected;
    } else {
        return AbsenceStatus.Requested;
    }
}