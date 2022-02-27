import React from 'react';
import axios from 'axios';
import './App.css';


import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';



import HomePage from './components/HomePage';


function App() {
  return (
  <Router>
  
    <div className="App">
      
      <Switch>
      
        <Route  exact path='/' component = { HomePage }/>
      
      </Switch>
    </div>
  </Router>
  );
}

export default App;