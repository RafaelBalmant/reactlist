import React, {Component} from 'react'

class TodoList extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.todo} onChange={this.props.setTodo}/>
        <button onClick={this.props.addTodo}>Adicionar</button>

        <br/>

        <pre>
    {JSON.stringify(this.props.tarefas)}
</pre>
      </div>
    )
  }
}

export default TodoList