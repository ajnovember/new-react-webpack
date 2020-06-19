import React, { Component } from "react";
import styles from "../../scss/about.scss";

class About extends Component {

    render() {
        return (
            <div className="About ">
                <div className="About__description">
                     <div className="delay1 animation fadeDown">
                        Thanks for visiting! I'm a musician, maker, programmer, and educator living
                        in Brooklyn.
                    </div>
                    <br></br>
                    <div className="delay2 animation fadeDown">
                        I build sound and light installations, musical instruments and devices,
                        and web-based audio/visual experiences. <br></br>I also teach others to do these
                        things.
                    </div>   
                    <br></br> 
                    <div className="delay3 animation fadeDown">
                        I'm currently in the process of documenting my projects and work here... 
                        <br></br>In the meantime, enjoy playing with a web musical rain instrument below. Click below to create rainclouds. Press any key to start over. 
                      
                    </div>    
                </div>
            </div>
        );
    }

}

export default About;
