import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'


ReactDOM.render(<App/> ,document.getElementById('root'));
































/*
const name = 'Rafael';
const postname= 'Brandt balmant';

function formatName(user)
{
    if(user)
    {
        return user.firstname + ' ' + user.lastname
    }

}

const user= {
    firstname: "Rafael",
    lastname: "Balmant",
};


function helloUser(user){


    if(!user.firstname || !user.lastname){

        return <h1>Hello Stranger</h1>


    }

    return <h1> Hello { formatName(user)}</h1>

}

function Welcome(props){
    return <p>Hello, {props.name}</p>

}


function App(){
        return (
            <div>
                <Welcome name="Sara"/>
                <Welcome name="Cahal"/>
                <Welcome name="Joao"/>
            </div>
        );

}

const element = <Welcome value="rafael" sex="gay"/>;


// ExtractingComponents




function formatDate(date){


    return date.toLocaleDateString();


}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    );
}

function Comment(props){

    return(
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <UserInfo user={props.author}/>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );

}

const comment=
    {
        date: new Date(),
        text: "batata",
        author: {
            name:"Usuario qualquer",
            avatarUrl:"fotinha",
        }

    };






class Clock extends React.Component {

    constructor (props)
    {
        super(props);
        this.state={date: new Date()};

    }

    componentDidMount() {
        this.timerID=setInterval(
            () => this.tick(),1000
        )
    }

    componentWillMount() {
        clearInterval(this.timerID)
    }

    tick(){
        this.setState(
            {
                date: new Date()
            }

        )
    }

    render(){

        return (
            <h1> to time {this.state.date.toLocaleTimeString()}</h1>
        );
    }
}

ReactDOM.render(
    <div>
        <Clock/>
        <Clock/>
        <Clock/>
        <Clock/>
    </div>,
    document.getElementById('root')

    );


*
*
*
*
*
*
*
*
*
*
*
*
*
*/