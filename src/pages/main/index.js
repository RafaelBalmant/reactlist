import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component{


    // Por que devemos armazena esse tipo de dados recebidos nos state?
    // Porque a variavel state está de certa formada atrelada ao metodo render
    // o metodo render escuta a variavel state e se ela for alterada ele recarrega a pagina



    state = {
        users: [],
    };


    // Quando usamos funções que pertence ao proprio react
    // como componentDidMount() ou render() podemos utilizar
    // o modelo de função como o abaixo
    // porem se criamor uma função devemos usar o arrow function
    // pois se não ele não conseguira acessar o escopo THIS da classe

    componentDidMount() {

        this.loadProducts();

    }

    loadProducts= async () =>{

        const response = await api.get('/users?id>1')
        this.setState({users: response.data})
        return console.log(this.state.users)

    };



    render()
    {
        return <div className='users-list'>
            {this.state.users.map(users => (
                <article key={users.id}>
                    <img src={users.avatar_url }/>
                    <br/>
                    <strong>Login: {users.login}</strong>
                    <p>ID NODE: <b>{users.node_id}</b></p>
                    <a href={users.html_url}>Acessar Usuario</a>
                </article>
            ))}
        </div>
    }

}


