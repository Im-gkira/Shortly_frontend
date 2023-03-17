import React from "react";

export default function Card(props){
    return (
        <div>
            <img src={props.img} alt="logo"></img>
            <h2>{props.title}</h2>
            <h4>{props.data}</h4>
        </div>
    )
}