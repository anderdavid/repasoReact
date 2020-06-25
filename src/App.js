import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloBulma from './components/HelloBulma';
import NavBarBulma from './components/NavBarBulma';


class App extends Component {

  componentDidMount =()=>{
    const script =document.createElement("script");
    script.async=true;
    script.src="https://use.fontawesome.com/releases/v5.3.1/js/all.js";
    this.div.appendChild(script);
  }
  render() {
    return (
      <div className="App" ref={el => (this.div = el)}>
           {/*  <Hello></Hello> */}
            {/* <HelloBulma/> */}
            <NavBarBulma/>

      </div>
    );
  }
}

export default App;