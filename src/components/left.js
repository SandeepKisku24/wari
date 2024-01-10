import "../app.css";
import React from "react";
import image from "./Work_7.png";
function Left(){
    return(
        <div className="left" >
            <div className="container-left">
            <h1>From our students...</h1>
            <img src= {image} className="image_div"/>
            </div>
        </div>
    )
}

export default Left;