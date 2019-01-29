import React, {Component} from 'react';



export default class Completed extends Component{


    render() {
        return(

                <ul>
                    <h3>Tarefas Completadas</h3>
                    {this.props.taskCompleted.map(({item, key}, i) =>
                        ( <li key={key}>
                            {item}<button onClick={() => this.props.deletedTaskCompleted(i)}>Excluir tarefa</button>
                        </li>))}
                </ul>
        )

    }


}

