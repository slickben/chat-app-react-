import React, { Component } from 'react'

export default class NewRoomForm extends Component {
  render() {
    return (
      <div className={"col-sm-3 col-md-6 col-lg-4 col-xl-2"}>
        <div className="form-group">
          <label></label>
          <input type="text" className="form-control" id="usr" placeholder="CREATE NEW ROOM" name="username"/>
        </div>
      </div>
    )
  }
}
