import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import web1 from "../src/images/buffmomo.jpg";
import web2 from "../src/images/buffsausage.jpg";
import web3 from "../src/images/buffachar.jpg";

class Buff extends Component {
    state = {  }
    render() { 
        return ( <div>

            <div className="my-5">
                <h1 className="text-center">Our Buff Products</h1>
            </div>
                
            
            <div className="container-buff mb-5">
             <div className="row">
             <div className="col-10 mx-auto"  >

               
               
             <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={web1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={web3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

                 
                 <div className="row gy-4">

                 <div className="col-md-4 col-10 mx-auto">
             <div className="card" >
             <img src={web1} className="card-img-top" alt="buffmomo.jpg"/>
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
             <h5 className="card-title">Buff sausage</h5>
            <p className="card-text">Pride is all very well, but a sausage is a sausage.</p>
             <NavLink to="/contact" className="btn btn-primary">Contact us</NavLink>
            </div>
             </div>
             </div>

             <div className="col-md-4 col-10 mx-auto">
             <div className="card" >
             <img src={web3} className="card-img-top" alt="buffmomo.jpg"/>
             <div className="card-body">
             <h5 className="card-title">Buff Achar</h5>
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
        </div> );
    }
}
 
export default Buff;