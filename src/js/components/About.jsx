import React, { Component } from "react";
import styles from "../../scss/about.scss";

class About extends Component {

    render() {
        return (
            <div className="About animation fadeDown">
                <div className="About__description">
                Thanks for visiting! My name is Adam. I'm a musician, maker, programmer, and educator living
                in Brooklyn, New York.
                <br />
                <br/>
                I build sound and light installations, musical instruments and devices,
                and web-based audio/visual experiments. I also teach others to do these
                things.
                    
                </div>
               
            </div>
        );
    }

}

export default About;
