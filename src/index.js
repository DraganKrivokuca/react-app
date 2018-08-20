/*jshint esversion: 6 */
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    BrowserRouter
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

const rootEl= document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <BrowserRouter>
        <App />
        </BrowserRouter>,
        rootEl
    );
};

if(module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    });
}

render();

registerServiceWorker();