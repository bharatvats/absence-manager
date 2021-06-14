import { Member } from '../../../types/membersType';
import { Absence, AbsenceType } from '../../../types/absencesType';

const mockMembers: Member[] = [
    {
        "crewId": 352,
        "id": 709,
        "image": "https://loremflickr.com/300/400",
        "name": "Max",
        "userId": 644
    },
    {
        "crewId": 352,
        "id": 713,
        "image": "https://loremflickr.com/300/400",
        "name": "Ines",
        "userId": 649
    }
];

const mockAbsences: Absence[] = [
    {
        "admitterId": null,
        "admitterNote": "",
        "confirmedAt": "2020-12-12T18:03:55.000+01:00",
        "createdAt": "2020-12-12T14:17:01.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-13",
        "id": 2351,
        "memberNote": "",
        "rejectedAt": null,
        "startDate": "2021-01-13",
        "type": AbsenceType.sickness,
        "userId": 664
    },
    {
        "admitterId": null,
        "admitterNote": "Sorry",
        "confirmedAt": null,
        "createdAt": "2021-01-03T17:36:52.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-05",
        "id": 2521,
        "memberNote": "ganzer tag",
        "rejectedAt": "2021-01-03T17:39:50.000+01:00",
        "startDate": "2021-01-05",
        "type": AbsenceType.vacation,
        "userId": 649
    },
    {
        "admitterId": null,
        "admitterNote": "",
        "confirmedAt": "2020-12-12T18:03:55.000+01:00",
        "createdAt": "2020-12-12T14:17:01.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-13",
        "id": 2353,
        "memberNote": "",
        "rejectedAt": null,
        "startDate": "2021-01-13",
        "type": AbsenceType.sickness,
        "userId": 664
    },
    {
        "admitterId": null,
        "admitterNote": "Sorry",
        "confirmedAt": null,
        "createdAt": "2021-01-03T17:36:52.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-05",
        "id": 2554,
        "memberNote": "ganzer tag",
        "rejectedAt": "2021-01-03T17:39:50.000+01:00",
        "startDate": "2021-01-05",
        "type": AbsenceType.vacation,
        "userId": 649
    },
    {
        "admitterId": null,
        "admitterNote": "",
        "confirmedAt": "2020-12-12T18:03:55.000+01:00",
        "createdAt": "2020-12-12T14:17:01.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-13",
        "id": 2355,
        "memberNote": "",
        "rejectedAt": null,
        "startDate": "2021-01-13",
        "type": AbsenceType.sickness,
        "userId": 664
    },
    {
        "admitterId": null,
        "admitterNote": "Sorry",
        "confirmedAt": null,
        "createdAt": "2021-01-03T17:36:52.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-05",
        "id": 2556,
        "memberNote": "ganzer tag",
        "rejectedAt": "2021-01-03T17:39:50.000+01:00",
        "startDate": "2021-01-05",
        "type": AbsenceType.vacation,
        "userId": 649
    },
    {
        "admitterId": null,
        "admitterNote": "",
        "confirmedAt": "2020-12-12T18:03:55.000+01:00",
        "createdAt": "2020-12-12T14:17:01.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-13",
        "id": 2357,
        "memberNote": "",
        "rejectedAt": null,
        "startDate": "2021-01-13",
        "type": AbsenceType.sickness,
        "userId": 664
    },
    {
        "admitterId": null,
        "admitterNote": "Sorry",
        "confirmedAt": null,
        "createdAt": "2021-01-03T17:36:52.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-05",
        "id": 2558,
        "memberNote": "ganzer tag",
        "rejectedAt": "2021-01-03T17:39:50.000+01:00",
        "startDate": "2021-01-05",
        "type": AbsenceType.vacation,
        "userId": 649
    },
    {
        "admitterId": null,
        "admitterNote": "",
        "confirmedAt": "2020-12-12T18:03:55.000+01:00",
        "createdAt": "2020-12-12T14:17:01.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-13",
        "id": 2359,
        "memberNote": "",
        "rejectedAt": null,
        "startDate": "2021-01-13",
        "type": AbsenceType.sickness,
        "userId": 664
    },
    {
        "admitterId": null,
        "admitterNote": "Sorry",
        "confirmedAt": null,
        "createdAt": "2021-01-03T17:36:52.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-05",
        "id": 2560,
        "memberNote": "ganzer tag",
        "rejectedAt": "2021-01-03T17:39:50.000+01:00",
        "startDate": "2021-01-05",
        "type": AbsenceType.vacation,
        "userId": 649
    },
    {
        "admitterId": null,
        "admitterNote": "",
        "confirmedAt": "2020-12-12T18:03:55.000+01:00",
        "createdAt": "2020-12-12T14:17:01.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-13",
        "id": 2361,
        "memberNote": "",
        "rejectedAt": null,
        "startDate": "2021-01-13",
        "type": AbsenceType.sickness,
        "userId": 664
    },
    {
        "admitterId": null,
        "admitterNote": "Sorry",
        "confirmedAt": null,
        "createdAt": "2021-01-03T17:36:52.000+01:00",
        "crewId": 352,
        "endDate": "2021-01-05",
        "id": 2562,
        "memberNote": "ganzer tag",
        "rejectedAt": "2021-01-03T17:39:50.000+01:00",
        "startDate": "2021-01-05",
        "type": AbsenceType.vacation,
        "userId": 649
    }
];

export { mockMembers, mockAbsences };