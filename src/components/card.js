import React from "react";

function Card(props){
    return(
        <div className="data">
            <div className="comment">{props.comment}</div>
            <br/>
            <div className="auther"> {props.auther}</div>
        </div>
    )
}

export default Card;