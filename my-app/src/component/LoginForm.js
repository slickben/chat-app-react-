import React, { Component } from 'react'
import App from '../App';
import axios from "axios";

export default class LoginForm extends Component {

    constructor(){
        super()
        this.state = {
            username: '',
            currentScreen: "enter your username screen"
        }
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            currentScreen: "chart screen"
        })
        console.log(this.state.currentScreen)
        this.onUserSubmited(this.state.username)
    }

    onUserSubmited = (username) => {

        axios.post('http://localhost:3001/users', {
          username
         }) 
    
    }


    render() {               
        return (
            <div>
                {this.state.currentScreen === "enter your username screen" ? <form method="POST" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type={'text'} name={"username"}/>
                    <button type={"submit"}>submit</button>
                </form> : <App username={this.state.username}/>}                
            </div>
        )
    }
}
