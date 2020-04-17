import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
//Importamos nuestros datos de task.json
import { Task } from './Task.json';
//ver registros del diccionario
//console.log(Task);

class App extends Component{
  constructor(){
    super();
  }
  render(){
  return (
    <div className="App">
      <Navigation dato = "Nav 1"/>
     
      <img src={logo} className="App-logo" alt="logo" />
       
    </div>
  );
}
}

export default App;
