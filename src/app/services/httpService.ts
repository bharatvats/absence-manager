import { members } from '../../api/json_files/members';
import { absences } from '../../api/json_files/absences';

export const getData = (dataType: string) => {
    return new Promise((resolve) => {
        if (dataType === 'members') {
            resolve(members);
        } else if (dataType === 'absences') {
            resolve(absences);
        }
    })
}