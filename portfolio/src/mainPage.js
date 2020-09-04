import React from 'react';
import AboutMe from './aboutMe.js';
import Projects from './projects.js';
import Menu from './menu.js';
import ContactMe from './contactMe.js';

class MainPage extends React.Component {
    state = {
        page: "Home"
    }

    updateState = (newPage) => {
        this.setState({ 
            page: newPage,
            navigations: 0,
            hiddenCounter: 0,
            theme: "light"
         })
    }

    display = () => {
        let page = this.state.page
        switch(page){
            case 'AboutMe':
                return <AboutMe/>;
            case 'Projects':
                return <Projects/>;
            case 'ContactMe':
                return <ContactMe/>;
            default:
                console.log("home")
        }
    }

    theme = () => {
        if (this.state.theme === "light"){
            //enter color theme CSS changing function here
        } else if (this.state.theme === "dark"){
            //enter color theme CSS changing function here
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