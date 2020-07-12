import React, { Component } from "react";
import Header from './Header.jsx';
import About from './About.jsx' ;
import ProjectMenu from './Projects.jsx';
import Teaching from './Teaching.jsx';
import ReactDOM from "react-dom";
import style from "../../scss/app.scss";
//import animation from "../../scss/animation.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//import P5Canvas from './P5Canvas.jsx';
//import style from "../../scss/header.scss";
 
/*class App extends Component {
  
    render() {
      return (
        <div className="App">
           
            <div className = "content">
              <Header />
              <About />
              <Projects />
            </div>
           
        </div>
       
      );
    }
  }
  
  export default App;
  
  const wrapper = document.getElementById("mount");
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
  */

 
 
 export default function App() {
   return (
     <Router >
       <div className = "content">
       <Header />
       <div>
         {/* A <Switch> looks through its children <Route>s and
             renders the first one that matches the current URL. */}
         <Switch>
           <Route path="/projects">
             <RouteProjects/>
           </Route>
           <Route path="/teaching">
             <RouteTeaching/>
           </Route>
           <Route path="/">
             <RouteHome />
           </Route>
         </Switch>
       </div>
       </div>
     </Router>
   );
 }
 
 function RouteHome() {
   return (
        <About /> 
   );
 }
 
 function RouteProjects() {
   return (
      <ProjectMenu />
   );
 }
 
 function RouteTeaching() {
    return (
      <Teaching />
 );
 }


 const wrapper = document.getElementById("mount");
 wrapper ? ReactDOM.render(<App />, wrapper) : false;