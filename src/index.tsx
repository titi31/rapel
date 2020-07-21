import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,tick} from './App';
import * as serviceWorker from './serviceWorker';
setInterval(tick,1000);
ReactDOM.render(<App update={0} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
