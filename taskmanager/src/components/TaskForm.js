import React, { Component } from 'react';



class TaskForm extends Component {
    constructor(){
        super();
        this.state = {
            title : '',
            responsable : '',
            description : '',
            priority : 'low',
            time : '0'
       }

       this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
      const { value, name } = e.target;
      this.setState({[name]:value})
    }

    handleSubmit(e) {
        e.preventDefault()
      }

    render() {
        return (
                <div className="card">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Title"
                    />
                    </div>

                    <div className="form-group">
                    <input
                        type="text"
                        name="responsable"
                        className="form-control"
                        placeholder="Responsable"
                    />
                    </div>


                    <div className="form-group">
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                    />  
                    </div>

                    <div className="form-group">
                    <input
                        type="text"
                        name="priority"
                        className="form-control"
                        placeholder="Priority"
                    />  
                    </div>


                    <div className="form-group">
                    <input
                        type="text"
                        name="time"
                        className="form-control"
                        placeholder="Time"
                    />  
                    </div>








                    </form>
                </div>



                )
            }


}

export default TaskForm;