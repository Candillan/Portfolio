import React from 'react';

function Menu(){
    return(
        <div>
            <button onClick={() => {console.log("clicked home")}}>Home</button>
            <button onClick={() => {console.log("clicked portfolio")}}>Portfolio</button>
            <button onClick={() => {console.log("clicked resume")}}>Resume</button>
        </div>
    )
}

export default Menu;