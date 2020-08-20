import React from 'react';

function Menu(props){
    return(
        <div>
            <button onClick={() => {props.updateState("Home")}}>Home</button>
            <button onClick={() => {props.updateState("AboutMe")}}>About Me</button>
            <button onClick={() => {props.updateState("Projects")}}>Portfolio</button>
            <button onClick={() => {props.updateState("ContactMe")}}>Contact Me</button>
        </div>
    )
}

export default Menu;