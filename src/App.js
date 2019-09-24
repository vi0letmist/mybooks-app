import React, {Component} from 'react';
import Main from "./component/Main";
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component{
  render(){
  return (
        <div>
            
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <p><Main/></p>
         
        </div>
  );
}
}

export default App;
