import React, { Component } from 'react'

export default class SendMessageForm extends Component {
  constructor(props){
    super()
    this.state = {
      message: ""
    }

  }

  HandleChange = (e) => {
    // alert(e.target.value)
    this.setState({
      message: e.target.value
    })
  }

  HandleSubmit = (e) => {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ""
    })
  }
  render() {
    return (
      <div className={"col-sm-9 col-md-6 col-lg-8 col-xl-10"}>
        <form className="form-group" onSubmit={this.HandleSubmit}>
          <input type="text" onChange={this.HandleChange} value={this.state.message} className="p-5 form-control" id="usr" placeholder="Type your message and hit ENTER " />
        </form>
      </div>
    )
  }
}

