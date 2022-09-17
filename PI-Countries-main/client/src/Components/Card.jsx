import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <div>
            <div>
                <h1>{props.nameCommon}</h1>
            </div>

            <div>
                <img src={props.img} alt="flag"/> 
            </div>
            
        </div>
    )
}  