import React, { Component } from 'react'

const Bgcolor = {
  // backgroundColor: "#fff",
  height: "90vh",
 
}
export default class RoomList extends Component {
  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id);
    console.log(this.props.rooms)
    return (
      <div className={"col-sm-3 col-md-6 col-lg-4 col-xl-2"} style={Bgcolor}>
        <ul className={"list-group"}>
        <h3 style={{textAlign: "center", textTransform: "uppercase", color: "white", fontWeight: "700"}}>your ROOMS:</h3>
          {orderedRooms.map((room) =>{
            const Active = this.props.roomId === room.id ? "active" : ""
            return <li style={{
              backgroundColor: "#45017c",
              border: "none",
              margin: "20px",
              borderRadius: "5px"
            }}  className={"list-group-item " + Active} key={room.id}>
                <a onClick={() => {this.props.subscribeToRoom(room.id)}} href="#" style={{color: "white", textAlign: "center", fontSize: "20px", textDecoration: "none"}}>#{room.name}</a>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
