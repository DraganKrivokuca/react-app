/*jshint esversion: 6 */
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
