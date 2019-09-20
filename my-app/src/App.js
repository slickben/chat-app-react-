import React, { Component } from 'react'
import {ChatManager, TokenProvider} from '@pusher/chatkit-client'
import {instanceLocator} from './config'
import './App.css';
import MessageList from '../src/component/MessageList'
import NewRoomForm from '../src/component/NewRoomForm'
import SendMessageForm from '../src/component/sendMessageForm'
import RoomList from '../src/component/RoomList'
import 'bootstrap/dist/css/bootstrap.css';



const Bgcolor = {
  backgroundColor: "#563d7c",
  height: "100vh"
}

export default class App extends Component {

  constructor () {
    super()
    this.state = {
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
    }
  }
  componentDidMount() {
    
          console.log(this.props.username)
          const chatManager = new ChatManager({
            instanceLocator: instanceLocator, 
            userId: this.props.username,
            tokenProvider: new TokenProvider({
              url: 'http://localhost:3001/auth',
            })
          }) 
          
          chatManager.connect()
          .then( currentUser => {
            this.currentUser = currentUser
            this.getRooms()

          })
          .catch(err => {
            console.log('Error on connection kiiii',  err)

          })  
           
  }

  SendMessage = (text) => {
    this.currentUser.sendSimpleMessage({ 
      text: text,
      roomId: this.state.roomId 

    })
  }

  getRooms = () => { 
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
      this.setState({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    })
    .catch(err => {
      console.log('Error on connection to rooms', err)
    })
  }

  subscribeToRoom = (roomId) =>{
    this.setState({
      messages: []
    })
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      messageLimit: 7,
      hooks: {
        onMessage: message => {
          // console.log('message.text: ', message.text);
          this.setState({
            messages: [...this.state.messages, message] 
          })
          
        }
      }
    }).then( room => {
      this.setState({
        roomId: room.id
      })
      this.getRooms()
    })
  }

  render() {
    console.log('message.text:', this.state.messages);
    return (
      <div className={"container-fliud"} style={Bgcolor}>
       <div>
        <div className={"row"}>
            <RoomList roomId={this.state.roomId} subscribeToRoom={this.subscribeToRoom} rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
            <MessageList messages={this.state.messages}/>
          </div>
          <div className={"row"}>
            <NewRoomForm/>
            <SendMessageForm sendMessage={this.SendMessage}/>
          </div>
      </div>
         
      </div>
    )
  }
}

