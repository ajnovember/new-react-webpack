import React, { Component } from "react";
import ReactDOM from "react-dom";
import  "../../scss/header.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Header extends Component {
  


  render() {
    return (
    
        <header className="Header ">
            <div className="Header__name animation fadeDown ">adam november</div>
            <ul className="Header__nav">
                <li className="delay0 Header__nav__item animation fadeDown">
                  <Link to="/">home</Link>
                </li>
                <li className="delay1 Header__nav__item animation fadeDown">
                  <Link to="/projects">projects</Link>
                </li>
                <li className="delay2 Header__nav__item animation fadeDown">
                  <Link to="/teaching">teaching</Link>
                </li>
                  <li className="delay3 Header__nav__item animation fadeDown">
                        <a  target="_blank" href="/AdamNovemberResume.pdf">resume</a>
                </li>

            </ul>
        </header>
  
    );
  }
}

export default Header;


