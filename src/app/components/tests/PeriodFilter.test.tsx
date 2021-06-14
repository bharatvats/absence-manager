import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PeriodFilter, { PeriodFilterProps } from '../PeriodFilter';

const selectedDate = '2021-06-13T12:28:42.989Z';
const handleChangePeriod = () => { };

const renderComponent = (props: PeriodFilterProps) =>
    render(
        <PeriodFilter
            selectedDate={props.selectedDate}
            handleChangePeriod={props.handleChangePeriod}
        />
    );

describe('Display PeriodFilter component', () => {
    it('Should render PeriodFilter', () => {
        const { container } = renderComponent({ selectedDate: new Date(selectedDate), handleChangePeriod });
        expect(container.firstChild!.nodeName).toEqual('DIV');
        const datePicker = container.querySelector('#date-picker-inline') as HTMLInputElement;
        if (datePicker) {
            fireEvent.change(datePicker, { target: { value: selectedDate } });
            expect(datePicker.value).toBe('20/21/0613');
        }
    });
});