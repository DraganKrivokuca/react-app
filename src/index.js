/*jshint esversion: 6 */
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    BrowserRouter
} from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './app/store/configureStore';
import scrollToTop from './app/common/util/scrollToTop';

const store = configureStore();

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render( 
        <Provider store = { store } >
        <BrowserRouter >
        <scrollToTop>
        <App/>
        </scrollToTop>
        </BrowserRouter> 
        </Provider>,
        rootEl
    );
};

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    });
}

render();

registerServiceWorker();