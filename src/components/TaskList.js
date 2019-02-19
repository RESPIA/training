import React, { Component } from 'react';
import TaskItem from './TaskItem';
// connect store
import {connect} from 'react-redux';


class TaskList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterName : '',
        filterStatus : -1 // -1 -> all, 1->active , 0->unactive
      }
    }

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        //console.log(value);
        // send data to app.js
        this.props.onFillter(
          name === 'filterName' ? value : this.state.filterName,
          //console.log(name),
          name === 'filterStatus' ? value : this.state.filterStatus
          )
        this.setState({
          [name] : value
        });


    }
    
    render() {
        console.log(this.props.todos);
        // show list data
        var { tasks } = this.props;
        var {filterName,filterStatus} = this.state;
        var elmTasks = tasks.map((task,index)=>{
          return <TaskItem onUpdate={this.props.onUpdate} onUpdateStatus={this.props.onUpdateStatus} onDelete={this.props.onDelete} key={task.id} index={index} task={task}/>
        });
        return (
            <div>
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <input type="text" name="filterName" value={filterName} onChange={this.onChange} className="form-control" />
                      </td>
                      <td>
                        <select name="filterStatus" value={filterStatus} onChange={this.onChange}  className="form-control">
                          <option value={-1}>All</option>
                          <option value={0}>Visibility</option>
                          <option value={1}>Active</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                    
                    { elmTasks }
                  </tbody>
                </table>
            </div>
        );
    }
}

// convert state of store to props of components
const mapStateToProps = (state) =>{
  return {
    // get var tasks in file index reducer

    // this.props.tasks
    tasks : state.tasks
  }
}


export default connect(mapStateToProps)(TaskList)
//export default TaskList;