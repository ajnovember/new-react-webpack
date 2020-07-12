import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "../../scss/projects.scss";


class Project extends React.Component {
    constructor(props){
        super(props)
        this.imgSrc = props.imgSrc;
        this.title = props.title;
        if(this.props.currentActive === this.props.index){
          this.state = {active:true}
        }
    }

    






    render(){
      if(this.props.parentState){
        if(this.props.currentActive === this.props.index){
          this.state = {class:"project_active", active:true}
        }
        else{
        this.state = {class:"project_shrink", active:false} 
        }
      } 
      else{
        this.state = {class:"project_full", active:false}
      }
    
      return (
        <div onClick={() => this.props.onClick(this.props.projectData)} className={this.state.class}>
             <img className="project_image"  src={this.props.projectData.image}/>
            <div className="project_title"> {this.props.projectData.name} </div>
        </div>
      );
    }
}

export default Project;