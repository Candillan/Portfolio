import React from 'react';
import './App.css';
import MainPage from './mainPage.js';

/* **TODO** */

//change it so that app accesses a container that is the real home page, with states (not hooks)
//add functionality (ternaries?) for seamless smooth SPA action.
//look into asking friends (ian?) for CSS advice



function App() {
  return (
    <div>
      {console.log("Make buttons that switch which data is shown from the modules")}
      <MainPage/>
    </div>
  )
}

export default App;
