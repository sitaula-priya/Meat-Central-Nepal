import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import web1 from "../src/images/bg.PNG";
import web2 from "../src/images/image2.jpg";



class Service extends Component {
    state = {  }
    render() { 
        return ( <div className="container-services">

            <div className="services my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            
            <div className=" mb-5">
             <div className="row">
                 <div className="col-10 mx-auto text-center"  >
                
                 <div className="col-md-4 col-10 mx-auto">
             <div className="card" >
             <img src={web2} className="card-img-top" alt="porksausage.jpg"/>
             <div className="card-body">
             <h5 className="card-title">Pork sausage</h5>
            <p className="card-text">Pride is all very well, but a sausage is a sausage.</p>
             <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
            </div>
             </div>
             </div>

                
                 

                
               
                 </div>
            </div>
        </div>
        </div>  );
    }
}
 
export default Service;