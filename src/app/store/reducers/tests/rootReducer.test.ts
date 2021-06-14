import createRootReducer from '../rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { initialState } from '../absenceReducer';
import { history } from '../../store';

describe('Root Reducer suite', () => {
    let store = configureStore({
        reducer: createRootReducer(history),
        middleware: [],
    });
    it('Loaded correctly', () => {
        expect(store.getState().absenceReducer).toEqual(initialState);
    });
});