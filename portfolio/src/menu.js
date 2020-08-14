import React from 'react';

function Menu(props){
    return(
        <div>
            <button onClick={() => {props.updateState("Home")}}>Home</button>
            <button onClick={() => {props.updateState("aboutMe")}}>About Me</button>
            <button onClick={() => {props.updateState("Projects")}}>Portfolio</button>
        </div>
    )
}

export default Menu;