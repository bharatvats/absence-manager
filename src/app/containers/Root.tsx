import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { History } from 'history';
import { Store } from 'redux';
import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AbsenceEmployees from './Absences';

const Root = ({ store, history }: { store: Store, history: History }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <CssBaseline />
            <StylesProvider injectFirst>
                <Route path="/">
                    <AbsenceEmployees />
                </Route>
            </StylesProvider>
        </ConnectedRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default Root;