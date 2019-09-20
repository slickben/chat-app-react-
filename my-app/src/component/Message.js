import React  from 'react'

const Message = (props) => {
  
    return (
      <div>
            <div className={"shadow p-3 mb-5 bg-white rounded text-capitalize ml-5"}><span style={{
              color: "white",
              backgroundColor: "#709775",
              padding: "7px",
              margin: "4px",
              borderRadius: "7px",
              marginTop: "8px",
              fontSize: "20px"
            }}>{props.userName}</span></div> 
            <div style={{paddingLeft: "50px", marginTop: "10px"}}><span style={{
              fontSize: "20px",
              color: "white",
              backgroundColor: "#8484E8",
              padding: "7px",
              borderRadius: "10px",
              marginTop: "8px"
            }}>{props.text}</span></div>
      </div>
    )
}

export default Message
