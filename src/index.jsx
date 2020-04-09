import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'core-js/stable';

import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from './views/app/App';
import './views/app/app.scss';
import './i18n';

import rootReducer from './redux/reducers/';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={null}>
            <App />
        </Suspense>
    </Provider>,
    document.getElementById('app')
);
