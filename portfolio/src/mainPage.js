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

    display = () => {
        let page = this.state.page
        switch(page){
            case 'aboutMe':
                return <AboutMe/>;
            case 'Projects':
                return <Projects/>;
            default:
                console.log("home")
        }
    }

    render(){
        return(
            <div>
                {console.log(this.state.page)}
                <Menu updateState={this.updateState}/>
                {(this.state.page === "Home") ? <div>Home Page Text</div> : this.display()}
            </div>
        )
    }  
}

export default MainPage;