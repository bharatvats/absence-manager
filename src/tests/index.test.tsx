// import ReactDOM from "react-dom";
import Root from '../app/containers/Root';
import { render } from 'react-dom';
import { history, configuredStore } from '../app/store/store';
import { reactRender } from '../index';

jest.mock('react-dom');

describe("test ReactDOM.render", () => {
    const store = configuredStore();
    let rootContainer: HTMLDivElement;

    beforeEach(() => {
        rootContainer = document.createElement("div");
        document.body.appendChild(rootContainer);
    });

    afterEach(() => {
        document.body.removeChild(rootContainer);
    });

    it("should call ReactDOM.render", () => {
        reactRender();
        expect(render).toHaveBeenCalledTimes(1);
    });
});