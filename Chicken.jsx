import React, { Component } from 'react';
import web from "../src/images/image4.jpg";
import web1 from "../src/images/drumstick.jpg";
import {NavLink} from "react-router-dom";

class Chicken extends Component {
    state = {  }
    render() { 
        return (
            <div id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
        <div className="chicken-container1 p-5">
            <div className="col-10 mx-auto"  >
                
                <div className="row "> 
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
             <h1>
                 New way to meet your meat<strong className="brand-name">MeatCentral Nepal</strong>
             </h1>
             <h2 className="m-1">
             Our company is a mart selling varieties of packaged meats of chicken, mutton and buff.
             </h2>
            <h3 className="m-1">
            We provide both physical and online services.
            </h3>
             <div className="mt-3">
                 <NavLink to="/Service"className="btn-get-started"> Contact us</NavLink>
               
              </div>
             </div>
             <div className="about-img col-lg-6 order-1 order-lg-2 " >
           <img src={web} className="img-fluid animated" alt="about jpg"/>
             </div>
             </div>
             </div>
        </div>
        </div>
         <p>
        
         <div className="my-5">
            <h1 className="tab-center">
                Our varieties
            </h1>
        </div>
        <div className=" container-fluid mb-5  ">
             <div className="row">
                 <div className="col-10 mx-auto"  >
                  <div className="row">
                      <div className="col-md-4 col-10 mx-auto">
                      <div className="card" >
                       <img src={web1} className="card-img-top" alt="drumstick.jpg"/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
                        </div>
                        </div>
                      </div>
                      </div>
                 
                 </div>
             </div>
  </div>
         </p>
        

   </div>
         );
    }
}
 
export default Chicken;