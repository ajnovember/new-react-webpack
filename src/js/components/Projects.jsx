import React, { Component } from "react";
import P5Canvas from "./P5Canvas.jsx"
import ReactDOM from "react-dom";
import img_Project from "./project_temp.jsx"

import {GroovePizza} from  "../projectData.js"
import {Cloud} from  "../projectData.js"
import {Macys} from  "../projectData.js"
import {GuitarHero} from  "../projectData.js"
import {Turntable} from  "../projectData.js"
import {SXSW} from  "../projectData.js"
import {Sequencer} from  "../projectData.js"
import {Slide} from  "../projectData.js"
import {Harp} from  "../projectData.js"
import {Whammy} from  "../projectData.js"
import {PlantMidi} from  "../projectData.js"
import {Drumlight} from  "../projectData.js"

import Project from "./project_temp.jsx"

import ReactPlayer from "react-player"


//import Turntable from "../../img/turntable.jpg";
//import style from "../../scss/app.scss";
import style from "../../scss/projects.scss";

class ProjectMenu extends Component {
  
  constructor(props){
    super(props);
    this.projectClicked = this.projectClicked.bind(this);
    this.state= {currentProject:GroovePizza, active:false};
    //console.log(GroovePizza);
  }
  
  projectClicked(projectData){
    this.setState({active:true, currentProject: projectData});
  }

  render() {
    
    return (
        <div className = "projects">

              <div className = "title"> Sound and light hardware creations including professional work and personal projects
              </div>    
           
                   
                   <div className="project_display_container">
                  

                   
                    <div className={this.state.active?"grid_shrink": "grid_full"}>
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "0" projectData={Cloud}  />
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "1" projectData={GroovePizza} />
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "2" projectData={Drumlight}/>
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "3" projectData={Sequencer}/>
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "4" projectData={GuitarHero}/>
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "5" projectData={Macys} />
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "6" projectData={Turntable}/>
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "7" projectData={Whammy} />
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "8" projectData={Harp} />
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "9" projectData={Slide}/>
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "10"projectData={PlantMidi} />
                      <Project currentActive = {this.state.activeIndex} parentState = {this.state.active} onClick ={this.projectClicked} index = "11"projectData={SXSW} />
                    </div>
                      <div className={this.state.active?"foldout_active": "foldout_inactive"}>
                          
                          <h1>{this.state.currentProject.name}</h1>

                          <div className="videoWrapper">
                              <ReactPlayer url={this.state.currentProject.video} width="100%" height="100%" />
                          </div>
                              <img className = "foldout_image" src={this.state.currentProject.image}/>
                          </div>

                      </div>
        </div>
    );
  
  }
}

export default ProjectMenu;
