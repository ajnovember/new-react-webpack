import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "../../scss/header.scss";

class Header extends Component {
  


  render() {
    return (
    
        <header className="Header ">
            <div className="Header__name animation fadeDown">adam november</div>
            <ul className="Header__nav">
                <li className="Header__nav__item animation fadeDown">
                    <a target="_blank" href="AdamNovemberResume.pdf">resume</a>
                </li>
            </ul>
        </header>
  
    );
  }
}

export default Header;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Header />, wrapper) : false;

