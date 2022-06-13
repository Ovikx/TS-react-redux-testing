import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './app/store';
import { Provider } from 'react-redux';
import { Counter } from './features/counter/Counter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <div>
        <Counter />
    </div>
  </Provider>
);