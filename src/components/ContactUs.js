import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function ContactUs() {

        return (
            <div className="container-fluid" id="contactUs">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-4 col-sm-offset-2" >
                <h3>Sell your property with the help of our experts</h3>
                <p>If you're looking for an easy solution to sell your property, you've come to the right place.
                  We are experts in the industry and can help connect you with the perfect target group, identify interested
                  buyers, and find the right buyer for your property as quickly as possible.</p>
                <p>Our estate agents provide professional assistance to help you achieve the best possible price and guide you
                  through every step of the process.
                </p>
              </div>
              <div className="col-sm-4 ">
                <form id="contactForm">
                  <div className="form-group">
                    <label for="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp"/>
                  </div>
                  <div className="form-group">
                    <label for="inputPhone">Phone number</label>
                    <input type="tel" className="form-control" id="inputPhone" placeholder="555-555-5555"/>
                  </div>
                  <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="tel" className="form-control" id="inputEmail" placeholder="johndoe@myemail.com"/>
                  </div>
                  <div className="form-group">
                    <label for="sel1">Property Type</label>
                    <select className="form-control" id="sel1">
                      <option>rent</option>
                      <option>buy</option>
                    </select>
                  </div>
        
                  <button type="submit" className="btn btn-primary">Send Inquiry</button>
                </form>
              </div>
            </div>
            </div>
        
        );
    

}




export default ContactUs;