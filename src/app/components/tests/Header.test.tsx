import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Display Header component', () => {
    it('should render its text', () => {
        const children = /Absence Manager/i;
        const { container, queryByText } = render(<Header />);
        expect(container.firstChild!.nodeName).toEqual('H3');
        expect(queryByText(children)).toBeInTheDocument();
    });
});