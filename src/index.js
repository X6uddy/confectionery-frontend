import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/app/App.js';
import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //временно отключен strict mode. В продакшн включить
    <Provider store={store}>
        <App />
    </Provider>
);

