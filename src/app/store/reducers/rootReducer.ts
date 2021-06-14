import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import absenceReducer from './absenceReducer';

const createRootReducer = (history: History) => combineReducers({
    absenceReducer,
    router: connectRouter(history),
});

export default createRootReducer;
export type RootState = ReturnType<typeof createRootReducer>;