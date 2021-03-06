import React, { Component } from 'react';
import logo from './logo1.png';
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
    this.handleAddTask = this.handleAddTask.bind(this);

  }

  removeTask(index) {
    if (window.confirm('Are you sure you want to delete this Task?')){
    this.setState({
      Task: this.state.Task.filter((e, i) => {
        return i !== index
      })
    });
  }
  }

  handleAddTask(tk) {
    this.setState({
      Task: [...this.state.Task, tk]
    })
  }
  render(){
  const Task = this.state.Task.map((tk, i) => {
    return(
      <div className="col-md-4" key={i}>
        <div className="card mt-4 border border-danger">
          <div className="card-header">
              <h3>{ tk.title }</h3>
              <span className="badge badge-pill badge-danger ml-2">{tk.priority}</span>
          </div>
          <div className="card-body">
            <p>{ tk.description }</p>
            <p><mark>{ tk.responsable }</mark></p>
            <p><strong>Start: </strong>{ tk.date1 }</p>
            <p><strong>End: </strong>{ tk.date2 }</p>
          </div> 

          <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTask.bind(this, i)}>
                Delete
              </button>
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
        <div className="col md-3 border border-danger bg-dark">
        <img src={logo} className="p-3" alt="logo" />
        <TaskForm onAddTask={this.handleAddTask}/>
          
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
