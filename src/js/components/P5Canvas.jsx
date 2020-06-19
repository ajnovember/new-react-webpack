import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "../../scss/p5canvas.scss"
import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
//import 'p5/lib/addons/p5.dom';

class P5Canvas extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
  
    Sketch = (p) => {
      
        let drops = new Array();
        let cnv;
        let s;
        let oscs = new Array();
        let freqs = [92,103,123,138,155,185,207,247];
        let envs = new Array();
        let f; 

        class Drop {
            constructor() {

                this.pos = p.createVector(p.mouseX, p.mouseY);
                this.opy = p.mouseY;
                

                this.update = function () {
                   this.pos.y += 4; 
                   if(this.pos.y>p.height-17){
                       
                       //this.pos.x=p.mouseX;
                       this.pos.y=this.opy;
                       let o = p.round(p.map(this.pos.x,0,p.width,0,7));
                       //console.log(o);
                       envs[o].setADSR(.05,.1,.5,.1);
                       envs[o].setRange(.2,0); 
                       envs[o].play();
                   }
                };
                this.show = function () {
                    p.noStroke();   
                    p.fill(0,50,100,p.random(50,100));
                    p.ellipse(this.pos.x+p.random(0,1), this.pos.y, 2, 7);
                    p.fill(210,50);

                    for(let i = 0; i < 6; i++){
                        p.ellipse(this.pos.x+p.random(-20,20),this.opy+p.random(-7,7),15,15);
                    }
                    if(this.pos.y>p.height-23){
                        for(let j = 0; j<10; j++){
                            p.noFill();
                            p.stroke(0,50,100,p.random(150-j));
                            p.arc(this.pos.x+p.random(0,1), p.height-18, j*4, j*3,p.PI,p.TWO_PI);
                        }
                    }
                };
                
            }
        }

        
        p.setup = () => {
            p.windowResized();
            f = new p5.LowPass();
            f.set(1000,.6);
            p.rectMode(p.CENTER);
            s=false;
            p.noStroke();
            p.fill(50,10)
            //let o  = new p5.Oscillator('sine');
           // o.start();
            for(let i = 0; i<8; i++){
                oscs[i] = new p5.Oscillator(freqs[i]*2,'sine');
                envs[i] = new p5.Envelope(); 
                oscs[i].start();
                envs[i].setInput(oscs[i]);
                envs[i].connect(f);

            }
              
            
        }
     
        
        p.draw = () => {
        if(!s){
            if(p.millis()>4000){
                s=true;
            }
        } 
            if(s){
                p.background(255,40);
                for(let j = 0; j<8; j++){
                    p.noStroke();
                    p.fill(107, 32, 6,50);
                   // if(oscs)

                    p.rect(j*(p.width/8)+(p.width/16),p.height-18,(p.width/8)-1,18-(j*2),3);
                }
                
              
                        
                if(drops.length>0){
                    for(let i = 0; i<drops.length; i++){
                        drops[i].update();
                        drops[i].show();
                    }
                }
            }
        } 

        p.mousePressed = () => {
            p.userStartAudio();
            p.mouseCheck();
            drops.push(new Drop);
            
        }

        p.windowResized = () =>{
            let h = window.innerHeight-300;
            let w = window.innerWidth*.80;
            if(w>800)w=800;
            cnv = p.createCanvas(w,h);
        }

        p.keyPressed = () =>{
            drops = new Array();
        }

        p.mouseCheck = (drop) => {
            for(let i = 0;i<drops.length; i++){
           
                if(p.abs(p.mouseX-drops[i].pos.x<10)){
                    if(p.abs(p.mouseY-drops[i].pos.y<10)){
                       // drops.splice(i,1);
                    }
                }
            }
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
  
    render() {
      return (
        <div ref={this.myRef}>
  
        </div>
      )
    }
  }

 

export default P5Canvas;