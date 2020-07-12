import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "../../scss/p5canvas.scss"
import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
//import 'p5/lib/addons/p5.dom';

class P5Canvas extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef();
      
    }
  
    Sketch = (p) => {
        let drops = new Array();
        let cnv;
        let freqs = [92,103,123,138,155,185,207,247,276,310];
      //  let freqs = [21,23,25,27,28,30,32,34,35,37,39,40,42,44,45,47,49,51,52,54,56,57,59,61,63,64,];
        let synths = new Array();
        let f; 
        let count = 0;
        let steps = 10;

        
        class Drop {
            constructor() {

                this.pos = p.createVector(p.mouseX, p.mouseY);
                this.opy = p.mouseY;
                this.size = p.random(5,10);
                this.c = p.random(180,240);
                this.sc = p.random(0,255);
                
                //this.c = 
                

                this.update = function () {
                   this.pos.y += 4; 
                   if(this.pos.y>p.height-20){

                       this.pos.y=this.opy;
                       let o = p.round(p.map(this.pos.x,0,p.width,0,7));
                       this.splash();
                       synths[o].play();

                   }
                };
                this.show = function () {

                    p.noStroke();   
                    p.fill(10,10,50,p.random(50,100));
                    p.ellipse(this.pos.x+p.random(0,1), this.pos.y, p.random(2,4), p.random(7,10));
                    
                };

                this.cloud = function(){
                    p.fill(this.c);
                    for(let i = 0; i < this.size; i++){
                        p.ellipse(this.pos.x+p.random(-20,20),this.opy+p.random(-5,5),p.random(10,23));
                    }
                }



                this.splash = function(){
                        p.colorMode(p.HSB);
                        p.noFill();
                        p.strokeWeight(2);
                        for(let j = 0; j<10; j++){
                           // p.fill(0,50,100,p.random(10));
                            p.stroke(this.sc+ (j*5),100,100);
                            p.arc(this.pos.x+p.random(0,1), p.height-18, j*6, j*5,p.PI,p.TWO_PI);
                        }
                        p.colorMode(p.RGB);
                    
                };
                
            }
        }

        class Synth { 
            constructor(num){
                this.freq = freqs[num];
                this.vibrate = 0;
                this.osc = new p5.Oscillator(this.freq*2,'sine');
                this.env = new p5.Envelope();
                this.env.setADSR(.05,.1,.4,.3);
                this.env.setRange(.2,0); 
                this.env.setInput(this.osc);
                this.env.connect(f);
                this.osc.start();

                this.play= function(){
                    this.env.setADSR(.05,.1,.4,.3);
                    this.env.setRange(.2,0);
                    this.env.play()
                }

               /* this.show=function(){
                    p.noStroke();
                    p.fill(this.r,this.g,this.b);
                    p.quad(this.x+this.w,this.y+this.h/2,this.x,this.y+this.h/2,  this.x+(this.w/16),this.y-this.h/2, this.x+(15*this.w/16),this.y-this.h/2);
                }*/
            }
        }

        
        p.setup = () => {
            f = new p5.LowPass();
            f.set(1000,.6);
        
            p.windowResized();
            for(let i = 0; i< steps; i++){
                synths[i] = new Synth(i);
            }
              
           
        }
     
        
        p.draw = () => {
                
                p.background(255,  40); 

                count++; 
                



                if(drops.length>0){
                    for(let i = 0; i<drops.length; i++){
                        drops[i].update();
                        drops[i].show();
                        drops[i].cloud();
                        
                    }
                }
            
        } 

        p.mousePressed = () => {
            if(p.mouseY>50){
                p.userStartAudio();
                p.mouseCheck();
                drops.push(new Drop);
                
        }
            
        }

        p.windowResized = () =>{
            //let a = React.findDOMNode(this.refs.about)
           //  console.log(a);
            let h = window.innerHeight-50;
            let w = window.innerWidth;
            //if(w>800)w=800;
            cnv = p.createCanvas(w,h);
            drops = new Array();
            p.background(255);
        }

        p.keyPressed = () =>{
            drops = new Array();
            p.background(255);
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
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }
  
    render() {
      return (
        <div ref={this.myRef}>
        </div>
      )
    }
  }

 

export default P5Canvas;


