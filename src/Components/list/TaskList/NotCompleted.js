import React, {Component} from 'react';

export default class NotCompleted extends Component{


    render() {
        return(

                <div>
                    {this.props.task.map(({item, key}, i) =>
                        ( <li key={key}>
                            {item}<button onClick={() => this.props.completedTask(i)}>Completar</button>
                            <button onClick={() => this.props.deletedTask(i)}>deletar</button>
                        </li>))}
                </div>

        )

    }


}

