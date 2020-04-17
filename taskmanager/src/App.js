import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm'
//Importamos nuestros datos de task.json
import { Task } from './Task.json';
//ver registros del diccionario
//console.log(Task);

class App extends Component{
  constructor(){
    super();
    this.state = {
      Task
    }
  }
  render(){
  const Task = this.state.Task.map((tk, i) => {
    return(
      <div className="col-md-4">
        <div className="card mt-4">
          <div className="card-header">
              <h3>{ tk.title }</h3>
              <span className="badge badge-pill badge-danger ml-2">{tk.priority}</span>
          </div>
          <div className="card-body">
            <p>{ tk.description }</p>
            <p><mark>{ tk.responsable }</mark></p>
            <p>{ tk.time }</p>
          </div> 
        </div>
      </div>
    )
  })

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    Tasks
                    <span className="badge badge-pill badge-light ml-2">
                      {this.state.Task.length}
                      </span>
                </a>
      </nav>
      <div className="container">
        <div className="row mt-4">
        <div className="col md-3">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskForm />
          
         </div>
         <div className="col md-9">
         <div className="row">
            {Task}
          </div>
          </div>
          </div>
          </div>
     
       
    </div>
  );
}
}

export default App;
