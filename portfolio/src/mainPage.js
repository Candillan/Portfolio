import React from 'react';
import AboutMe from './aboutMe.js';
import Projects from './projects.js';
import Menu from './menu.js';

class MainPage extends React.Component {
    state = {
        page: "aboutMe"
    }

    updateState = (newPage) => {
        this.setState({ page: newPage })
    }

    render(){
        return(
            <div>
                {console.log(this.state.page)}
                <Menu updateState={this.updateState}/>
                <AboutMe/>
                <Projects/>
            </div>
        )
    }  
}

export default MainPage;