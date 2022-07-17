import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Switch>
          <Route path="/sports">
          <News pageSize={6} country="in" category="sports"/>
            
          </Route>
          <Route path="/business">
          <News pageSize={6} country="in" category="business"/>
            
          </Route>
          <Route path="/science">
          <News pageSize={6} country="in" category="science"/>
            
          </Route>
          <Route path="/entertainment">
          <News pageSize={6} country="in" category="entertainment"/>
            
          </Route>
          <Route path="/technology">
          <News pageSize={6} country="in" category="technology"/>
            
          </Route>
          <Route path="/health">
          <News pageSize={6} country="in" category="health"/>
            
          </Route> 
          <Route path="/">
          <News pageSize={6} country="in" category="general"/>
            
          </Route>
         
          
          
        </Switch>
        
        </Router>
        
      </div>
    )
  }
}
export default App

