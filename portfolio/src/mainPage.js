import React from 'react';
import AboutMe from './aboutMe.js';
import Projects from './projects.js';
import Menu from './menu.js';

class MainPage extends React.Component {
    render(){
        return(
            <div>
                {console.log("Make buttons that switch which data is shown from the modules")}
                <Menu/>
                <AboutMe/>
                <Projects/>
            </div>
        )
    }  
}

export default MainPage;