import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AbsenceListComponent, { AbsenceListProps } from '../AbsenceList';
import { createRow } from '../../services/utils';
import { mockAbsences, mockMembers } from '../../store/actions/tests/mockData';

const mockMembersMap = new Map(mockMembers.map(member => [member.userId, member]));
const mockTable = mockAbsences.map(absenceEmployee => createRow(absenceEmployee, mockMembersMap.get(absenceEmployee.userId)));
const renderComponent = (props: AbsenceListProps) =>
    render(
        <AbsenceListComponent
            tableRows={props.tableRows}
        />
    );

describe('Display Absence List component', () => {
    it('Should render Table', () => {
        const { container } = renderComponent({ tableRows: mockTable });
        expect(container.firstChild!.nodeName).toEqual('DIV');
        const thead = container.querySelector('.MuiTableHead-root') as HTMLTableHeaderCellElement;
        expect(thead).not.toBeNull();

        const nextButton = screen.getByTitle(/Next page/i) as HTMLButtonElement;
        const previosButton = screen.getByTitle(/Previous page/i) as HTMLButtonElement;
        fireEvent.click(nextButton);
        fireEvent.click(previosButton);
    });
});