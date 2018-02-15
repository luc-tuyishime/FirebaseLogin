import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./js/store/index";
import { addMenu } from './js/actions/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//store import reducers
// reducers import constant
// actions import constant

window.store = store;
window.addMenu = addMenu;

store.subscribe(() => console.log('Look ma, Redux!!'))

store.dispatch( addMenu({ name: 'Pilao', id: 1 }) )


ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
