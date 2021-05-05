import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';
import Navbar from "./Navbar";
import { NavbarBrand } from 'react-bootstrap';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Chicken from "./Chicken";
import Mutton from "./Mutton";
import Buff from "./Buff";
import Pork from "./Pork";
import Fotter from "./Fotter";




class App extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/About" component={About}/>
                    <Route exact path="/Mutton" component={Mutton}/>
                    <Route exact path="/Chicken" component={Chicken}/>
                    <Route exact path="/Buff" component={Buff}/>
                    <Route exact path="/Pork" component={Pork}/>
                    <Route exact path="/Service" component={Service}/>
                    <Route exact path="/Contact" component={Contact}/>
                    <Route exact path="/Fotter" component={Fotter}/>
                    <Redirect to="/" />
                </Switch>
                <Fotter/>

            </div>
          );
    }
}
 
export default App;