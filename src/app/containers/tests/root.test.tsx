import React from 'react';
import { render } from '@testing-library/react';
import Root from '../Root';
import { history, configuredStore } from '../../store/store';

const store = configuredStore();

test('renders learn react link', () => {
  const { getByText } = render(
    <Root store={store} history={history} />
  );

  expect(getByText(/Loading.../i)).toBeInTheDocument();
});
