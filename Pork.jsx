import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import web1 from "../src/images/porkbacon.jpg";
import web2 from "../src/images/porksausage.jpg";
import web3 from "../src/images/ham.jpg";
class Pork extends Component {
    state = {  }
    render() { 
        return (<div>

            <div className="my-5">
                <h1 className="text-center">Our Pork Products</h1>
            </div>
                
            
            <div className="container-pork mb-5">
             <div className="row">
                 <div className="col-10 mx-auto"  >
                 <div className="row gy-4">

                 <div className="col-md-4 col-10 mx-auto">
             <div className="card" >
             <img src={web1} className="card-img-top" alt="porkbacon.jpg"/>
             <div className="card-body">
             <h5 className="card-title">Bacon</h5>
            <p className="card-text"> Pork belly, which comes from the side of the hog, is called bacon once it has been cured and smoked. </p>
             <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
            </div>
             </div>
             </div>

             
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

             <div className="col-md-4 col-10 mx-auto">
             <div className="card" >
             <img src={web3} className="card-img-top" alt="ham.jpg"/>
             <div className="card-body">
             <h5 className="card-title">Ham</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
            </div>
             </div>
             </div>

             <div className="col-md-4 col-10 mx-auto">
             <div className="card" >
             <img src={web2} className="card-img-top" alt="buffmomo.jpg"/>
             <div className="card-body">
             <h5 className="card-title">Buff momo</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
            </div>
             </div>
             </div>

             <div className="col-md-4 col-10 mx-auto">
             <div className="card" >
             <img src={web2} className="card-img-top" alt="buffmomo.jpg"/>
             <div className="card-body">
             <h5 className="card-title">Buff momo</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
            </div>
             </div>
             </div>

             <div className="col-md-4 col-10 mx-auto">
             <div className="card" >
             <img src={web2} className="card-img-top" alt="buffmomo.jpg"/>
             <div className="card-body">
             <h5 className="card-title">Buff momo</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
            </div>
             </div>
             </div>


             

           

           

            


  

         
           
             </div>
                 </div>
            </div>
        </div>
        </div>   );
    }
}
 
export default Pork;