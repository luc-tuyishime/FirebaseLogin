import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";
import { provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';

//store import reducers
// reducers import constant
// actions import constant

window.store = store;


const store = createStore(
 rootReducer,
 composeWithDevTools(
  applyMiddleware(thunk)	
 )
);




ReactDOM.render(
	<BrowserRouter>
	<Provider store={store}>
	<App />
	</Provider>
	</BrowserRouter>,
	document.getElementById('root'));
registerServiceWorker();
