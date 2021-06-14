import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { history, configuredStore } from './app/store/store';
import Root from './app/containers/Root';

const store = configuredStore();

function reactRender() {
  ReactDOM.render(
    <>
      <Root store={store} history={history} />
    </>,
    document.getElementById('root')
  );
}

reactRender();

export { reactRender }