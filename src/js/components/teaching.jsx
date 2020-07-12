import React, { Component } from "react";
import styles from "../../scss/teaching.scss";

class Teaching extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }


    render() {
        return (
           <div className = "teaching_description"> Since 2014 I have taught computer science and music technology to students of all ages around New York City
            for various programs and schools including New York University, Manhattan Youth, Maker-State and Urban Arts Partnership. 
            </div>
        );
    }

} 

export default Teaching;
