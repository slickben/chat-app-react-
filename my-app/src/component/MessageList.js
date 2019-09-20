import React, { Component } from 'react'
import Message from './Message'

const Bgcolor = {
  backgroundColor: "#fff",
  height: "90vh",
  overflow: "scroll"
 
}



export default class MessageList extends Component {
  render() {
    let { messages} = this.props

    return (
      <div className={"col-sm-9 col-md-6 col-lg-8 col-xl-10"} style={Bgcolor}>
          <ul className={"list-group"}>
            {messages.map((message, index) => {
                return (
                  <div>
                    <li className={"list-group-item "} style={{ border: 'none' }} key={index} >
                      <Message key={index} userName={message.senderId} text={message.text}/>
                    </li>
                  </div>
                    
                )
            })}  
          </ul>
      </div>
    )
  }
}
