import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import TodoList from "./TodoList"

class App extends Component {
  state = {
    value: '',
    todo: '',
    tarefas: []
  }

  setTodo = event => this.setState({todo: event.target.value})

  addTodo = () => {
    if (this.state.todo !== '') {
      const todo = this.state.todo

      this.setState({
        tarefas: [todo, ...this.state.tarefas],
        todo: '',
      })
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={event => this.setState({value: event.target.value})}/>
        <button>clique aqui</button>

        <br/>
        <br/>

        <input
          type="text"
          value={this.state.value}
          onChange={event => this.setState({value: event.target.value.split('').reverse().join('')})}
        />
        <button>clique aqui tbm</button>

        <p>{this.state.value}</p>

        <h1>Tarefas</h1>

        <input type="text" value={this.state.todo} onChange={this.setTodo}/>
        <button onClick={this.addTodo}>Adicionar</button>

        <br/>

<pre>
    {JSON.stringify(this.state.tarefas)}
</pre>

        <br/><br/>

        <TodoList tarefas={this.state.tarefas} setTodo={this.setTodo} addTodo={this.addTodo}/>
        <TodoList tarefas={this.state.tarefas} setTodo={this.setTodo} addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App
