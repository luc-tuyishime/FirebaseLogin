import React, { Component } from 'react';
import logo from './logo.svg';
import store from './js/store/index';
import { addArticle } from './js/actions/index';
import './App.css';
import List from "./js/components/List";
import ConnectedForm from "./js/components/Form";






const App = () => (
  <div>
  <div className="col-md-4 col-offset-4">
    <div className="">
    <h3>Menu</h3>
      <List />
      </div>
      <div className="">
      <ConnectedForm />
      </div>
    </div>
  </div>

);
export default App;


