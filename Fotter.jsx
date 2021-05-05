import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import web from "../src/images/fb.jfif";
import web1 from "../src/images/insta.png";
import web2 from "../src/images/fb.jfif";
import web3 from "../src/images/twitter.png";


class Fotter extends Component {
    state = {  }
    render() { 
        return ( <div>
             
            <div className="my-5">
                <h1 className="text-center"></h1>
            </div>
                
            
            <div className="container-pork mb-10">
             <div className="row">
                 <div className="col-10 mx-auto"  >
                 <div className="row ">

                 <footer class="footer-distributed">

<div class="footer-left">

    <h3>Meat Central Nepal <span>..</span></h3>

    <p class="footer-links">
        <NavLink to="/" class="link-1">Home</NavLink>
        
        <NavLink to="/About">About</NavLink>
    
        <NavLink to="/Buff">Buff</NavLink>
    
        <NavLink to="/Services">Service</NavLink>
        
        <NavLink to="/Contact">Contact</NavLink>
    </p>

    <p class="footer-company-name">Meat Central Nepal © 2020</p>
</div>

<div class="footer-center">

    <div>
        <i class="fa fa-map-marker"></i>
        <p><span></span> Mandikatar, Kathmandu</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>9817957999</p>
    </div>

    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">meatcentralnepal@gmail.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>we provide fresh and frozen meat.</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div class="footer-icons">

    <a href={"https://www.facebook.com/meatcentralnepal"}target="_blank"><i class="fa fa-facebook"></i><img src={web} className="img-fluid animated" alt="fb.jpg"/></a>
     <a href={"https://www.instagram.com/meatcentralnepal/"}target="_blank"><i class="fa fa-instagram"></i><img src={web1} className="img-fluid animated" alt="insta.png"/></a>
        <a href={"https://twitter.com/meatnepal?fbclid=IwAR1cFCZCHr1-ippSZKgv9__ZvtE3iSE0MRTy7pKgceP1XlDo183furfZdaM"}target="_blank"><i class="fa fa-linkedin"><img src={web3} className="img-fluid animated" alt="fb.jpg"/></i></a>
     <a href="#"><i class="fa fa-github"><img src={web2} className="img-fluid animated" alt="fb.jpg"/></i></a>

  </div>

</div>

</footer>

             

           

           

            


  

         
           
             </div>
                 </div>
            </div>
        </div>
        </div>);
    }
}
 
export default Fotter ;