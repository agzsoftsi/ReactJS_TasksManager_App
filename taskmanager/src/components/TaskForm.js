import React, { Component } from 'react';



class TaskForm extends Component {
    constructor(){
        super();
        this.state = {
            title : '',
            responsable : '',
            description : '',
            priority : 'low',
            time : '0 hours'
       };

       this.handleInputChange = this.handleInputChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
      const { value, name } = e.target;
      console.log(value, name);
      this.setState({[name]:value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onAddTask(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low',
            time : '0 hours'
          });
      }

    render() {
        return (
                <div className="card">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Title"
                    />
                    </div>

                    <div className="form-group">
                    <input
                        type="text"
                        name="responsable"
                        className="form-control"
                        value={this.state.responsible}
                        onChange={this.handleInputChange}
                        placeholder="Responsable"
                    />
                    </div>


                    <div className="form-group">
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        placeholder="Description"
                    />  
                    </div>

                    <div className="form-group">
                    <select
                        name="priority"
                        className="form-control"
                        value={this.state.priority}
                        onChange={this.handleInputChange}
                    >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                    </select>  
                    </div>


                    <div className="form-group">
                    <input
                        type="text"
                        name="time"
                        className="form-control"
                        value={this.state.time}
                        onChange={this.handleInputChange}
                        placeholder="Time"
                    />  
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Add Task
                    </button>


                    </form>
                </div>



                )
            }


}

export default TaskForm;