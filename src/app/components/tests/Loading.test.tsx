import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../Loading';

describe('Display Loading component', () => {
    it('should render its text', () => {
        const children = /Loading.../i;
        const { container, queryByText } = render(<Loading />);
        expect(container.firstChild!.nodeName).toEqual('DIV');
        expect(queryByText(children)).toBeInTheDocument();
    });
});