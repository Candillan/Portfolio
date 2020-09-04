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