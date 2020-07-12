import React, { Component } from "react";
import styles from "../../scss/about.scss";

class About extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="About " ref={this.myRef}>
                <div className="About__description">
                     <div className="delay4 animation fadeDown">
                        Thanks for visiting! I'm a musician, maker, programmer, and educator living
                        in Brooklyn.
                    </div>
                    <br></br>
                    <div className="delay5 animation fadeDown">
                        I build sound and light installations, musical instruments and devices,
                        and web-based audio/visual experiences. I also teach others to do these
                        things. Reach out by emailing me at <strong>ajnovember@gmail.com.</strong>
                    </div>   
                   {/*} <br></br> 
                    <div className="delay3 animation fadeDown">
                        I'm currently in the process of documenting my projects and work here... 
                        <br></br>In the meantime, please enjoy playing with a web musical rain instrument below. 
                        Click below to create rainclouds. Press any key to start over. 
                      
                     </div>   */} 
                </div>
            </div>
        );
    }

} 

export default About;
