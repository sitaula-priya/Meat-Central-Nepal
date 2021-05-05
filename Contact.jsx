import React, { Component } from 'react';
import web1 from "../src/images/logo.png";
import web from "../src/images/porkbacon.jpg";

class Contact extends Component {
    state = {  }
    render() { 
        return (<div>          
            <div className="container-fluid nav_bg">
             <div className="row">
                 <div className="col-10 mx-auto"  >
                 
            <div className="container-contact">
            <div className="text-center">
                  <h2>
                   We would love to listen from you....
                  </h2>
                </div>
            
             <div className="contact">
             
               <div>
               <a href="#"><i class="fa fa-map"></i></a>
               <a href="#"><i class="fa fa-Phone"></i></a>
               <a href="#"><i class="fa fa-envelope"></i></a>
               </div>
               
               <div class="container ">
  <form >
    <div class="row">
      
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Enter your name.."/>
      </div>
    </div>

    <div class="row">
    
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Enter your gmail address"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
    </div>

    <div class="row">
     
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Enter your mobile number"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your number with anyone else.</small>
      </div>
    </div>
    
    
    
    <div class="row">
     
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"/>
    </div>
  </form>
</div>



             </div>
             </div>
                 </div>
            </div>
        </div>
        </div> );
    }
}
 
export default Contact;