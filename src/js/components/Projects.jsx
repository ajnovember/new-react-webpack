import React, { Component } from "react";
import P5Canvas from "./P5Canvas.jsx"
import ReactDOM from "react-dom";
//import style from "../../scss/app.scss";
import style from "../../scss/projects.scss";

class Projects extends Component {
  


  render() {
    return (
        <div className = "projects">
                {/*<div className = "title animation fadedown">projects</div>*/}

                <P5Canvas />
        </div>

       
     
    );
  }
}

export default Projects;
