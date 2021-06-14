import { AllEffect, ForkEffect } from 'redux-saga/effects';
import rootSaga from '../rootSaga';

describe('Root saga suite', () => {
    const rootGen: Generator<AllEffect<ForkEffect<void>>, void, unknown> = rootSaga();

    it('should wait for all sagas to be loaded', () => {
        const allDescriptor = rootGen.next().value;
        expect(allDescriptor).toMatchSnapshot();
    });
});