import React from 'react';

function Menu(props){
    return(
        <div>
            <button onClick={() => {props.updateState("Home")}}>Home</button>
            <button onClick={() => {props.updateState("aboutMe")}}>Portfolio</button>
            <button onClick={() => {props.updateState("Projects")}}>Resume</button>
        </div>
    )
}

export default Menu;