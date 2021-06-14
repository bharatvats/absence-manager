import React from 'react';
import { render } from '@testing-library/react';
import Error from '../Error';

describe('Display Error component', () => {
    it('should render its text', () => {
        const children = /An Error occurred/i;
        const { container, queryByText } = render(<Error />);
        expect(container.firstChild!.nodeName).toEqual('DIV');
        expect(queryByText(children)).not.toBeNull();
    });
});