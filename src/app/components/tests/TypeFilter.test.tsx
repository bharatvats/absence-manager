import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TypeFilter, { TypeFilterProps } from '../TypeFilter';

const handleChangeType = (_event: React.ChangeEvent<{ value: unknown }>) => { };
const filterByType = 'vacation';

const renderComponent = (props: TypeFilterProps) =>
    render(
        <TypeFilter
            filterByType={filterByType}
            handleChangeType={handleChangeType}
        />
    );

describe('Display PeriodFilter component', () => {
    it('Should render PeriodFilter', () => {
        const { container } = renderComponent({ filterByType, handleChangeType });
        expect(container.firstChild!.nodeName).toEqual('DIV');
        const selectType = container.querySelector('.MuiSelect-nativeInput') as HTMLInputElement;
        if (selectType) {
            fireEvent.change(selectType, { target: { value: filterByType } });
            expect(selectType.value).toBe('vacation');
        }
    });
});