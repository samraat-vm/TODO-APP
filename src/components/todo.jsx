import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../sass/todo-app.css';
class Todo extends Component {
    state = { 
        id:1,
        title:"Redux",
        task:"Reducers && Actions",

     }

     handleClick=() =>{
         if(this.state.id !==0){
             this.setState({id:this.state.id -1});
         }
     }

     handleEvent = (e) => {
        let UpdatedState = {};
        if(e !== undefined && e !== null){
        let $element = e.currentTarget.getAttribute('name');
        if($element === 'task') {
            UpdatedState = {
                task:e.target.value
            }
        } else if($element === 'task_title') {
            UpdatedState = {
                title:e.target.value
            }
        }
        this.setState(UpdatedState);
    }
 }
        addTask=(e)=>{
            this.setState({id:this.state.id +1});
        }
    render() { 
        return ( 
            <div className="cards">
                <h1>Tasks  <span className="badge">{this.state.id}</span></h1>
                    { this.state.id >0 &&
                <section>
                    <h2>{this.state.title}</h2> <br/>
                    <p>{this.state.task}</p> <br/><br/>
                    <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
                </section>}

                    {this.state.id === 0 &&
                    <React.Fragment>
                    <h2 id ="no-task">No tasks found</h2>
                    <div className="add-task">
                    <input name="task_title"type="text" placeholder="Title" className="form-control" onChange={this.handleEvent}/> <br/> <br/>
                    <textarea name="task" placeholder="Tasks....Start typing" className="form-control" onChange={this.handleEvent} cols="30" rows="10" ></textarea> <br/>
                    <button className="btn btn-primary" onClick={this.addTask}>+ Add item </button>
                    </div>
                    </React.Fragment>
                    }
            </div>
         );
    }
}
 
export default Todo;