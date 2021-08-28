/**
 * The index file of application.
 * @since 0.1.0
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();