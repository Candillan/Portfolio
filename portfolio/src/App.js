import React from 'react';
import './App.css';
import AboutMe from './aboutMe.js';
import Projects from './projects.js';
import Menu from './menu.js';

function App() {
  return (
    <div>
      {console.log("Make buttons that switch which data is shown from the modules")}
      <AboutMe/>
      <Projects/>
      <Menu/>
    </div>
  );
}

export default App;
