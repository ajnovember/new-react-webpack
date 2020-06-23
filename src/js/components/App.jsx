import React, { Component } from "react";
import Header from './Header.jsx';
import About from './About.jsx' ;
import Projects from './Projects.jsx';
import P5Canvas from './P5Canvas.jsx';
import ReactDOM from "react-dom";
import style from "../../scss/app.scss";
import animation from "../../scss/animation.scss";
//import style from "../../scss/header.scss";
 
class App extends Component {
  


    render() {
      return (
        <div className="App">
           
            <div className = "content">
              <Header />
              <About />
            </div>
            <P5Canvas />
      

           
        </div>
       
      );
    }
  }
  
  export default App;
  
  const wrapper = document.getElementById("mount");
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
  