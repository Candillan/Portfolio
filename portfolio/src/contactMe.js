import React from 'react';

//look into using icons instead of buttons/hyperlinks
//consider having these as a module on the greater page rather than a separate page
//STYLING

function ContactMe(){
    return(
        <div>
            <div>Contact Page</div>
            <div>LinkedIn</div>
            <div>GitHub</div>
            <div>Email</div>
            {console.log("Hello from contact page")}
        </div>
    )
}

export default ContactMe;