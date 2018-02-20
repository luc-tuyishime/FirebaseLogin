import React, { Component } from 'react';
import logo from './logo.svg';
import { addArticle } from './js/actions/index';
import { Link,Route } from 'react-router-dom';
import MenusPage from './js/components/MenusPage'
import './App.css';




class App extends Component {
    render() {
        return (
         <div className="App">
         <p className="App-title">Welcome to lunchex</p>
           <p className="App-intro">
             <Link className="size" to="menus">Menus</Link>
           </p>

           <Route path="/menus" component={MenusPage} />
         </div>   
        );
    }
}



export default App;


