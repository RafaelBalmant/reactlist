import React, {Component} from 'react'
import './styles.css'
import NotCompleted from './TaskList/NotCompleted';
import Completed from './TaskList/Completed'
import Header from './Header'
import TaskList from './TaskList/List'



export default class List extends Component{

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            task: [],
            taskCompleted: [],


        };

    }

    setInput = (event) =>
    {
        this.setState({inputValue: event.target.value})
    };

    setTask = () =>
    {
        var task =  this.state.inputValue;
        if (!task){
            return this.setState({inputValue: ""})
        }
        this.setState({task:[...this.state.task, {item: task, key: new Date().getTime()}]});
        this.setState({inputValue: ""})

    };

    clearTask = () =>
    {
        return this.setState( { task: []})

    };

    completedTask = async (i) => {
        // async ele tranca o codigo até que AWAIT seja executado
        const tasks = this.state.task;
        await this.setState({taskCompleted: [...this.state.taskCompleted, tasks[i]]});
        tasks.splice(i, 1);
        await this.setState({task: tasks});
    };

    deletedTask = (i) =>{
        const tasks = this.state.task;
        tasks.splice(i, 1);
        this.setState({task: tasks});



    };

    deletedTaskCompleted = (i) =>{
        const taskCompleted= this.state.taskCompleted;
        taskCompleted.splice(i, 1);
        this.setState({taskCompleted: taskCompleted})
    };


    render(){

        return(
            <div>
                <Header
                    inputValue={this.state.inputValue}
                    setInput={(event) => this.setInput(event)}
                    setTask={this.setTask}
                    clearTask={this.clearTask}
                />
                <TaskList>
                    <NotCompleted
                        task={this.state.task}
                        deletedTask={(i) => this.deletedTask(i)}
                        completedTask={(i) => this.completedTask(i)}
                    />

                    <Completed
                        taskCompleted={this.state.taskCompleted}
                        deletedTaskCompleted={(i) => this.deletedTaskCompleted(i)}
                    />
                </TaskList>


            </div>
        )
    }
}
