import React, {Component} from 'react';

export default class Header extends Component{



    render(){
        return(

            <div>
                <input type="text" id="task" onChange={this.props.setInput} value={this.props.inputValue}/>
                <button onClick={() => this.props.setTask()} >Cadastrar Tarefa</button>
                <button onClick={() => this.props.clearTask()} >Limpar tarefas</button>
            </div>

        )
    }



}

