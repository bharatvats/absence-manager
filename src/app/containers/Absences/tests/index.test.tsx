import React from 'react';
import { Provider } from 'react-redux';
import AbsenceEmployees from '../index';
import { render } from '@testing-library/react';
import { configuredStore } from '../../../store/store';
import { setIsError } from '../../../store/actions/absenceAction';

const store = configuredStore();

const renderComponent = () =>
    render(
        <Provider store={store}>
            <AbsenceEmployees />
        </Provider>
    );

describe('Absences Container', () => {
    it('Should render <AbsenceEmployees />', () => {
        const { container } = renderComponent();
        expect(container.firstChild!.nodeName).toEqual('DIV');
    });

    it('Should show error state', () => {
        const children = /An Error occurred/i;
        const { queryByText } = renderComponent();
        store.dispatch(setIsError(true));
        expect(queryByText(children)).not.toBeNull();
    });
})