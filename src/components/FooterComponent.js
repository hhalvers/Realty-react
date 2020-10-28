import React from 'react';
// import { Link } from 'react-router-dom';
import {
    Form,
    Input,
    Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
    return (
        <footer>
            <div className="container-fluid" id="page-footer-above">


                <div className="row ">
                    <div className="col d-flex justify-content-center">
                        <Form className="form-inline">
                            <label for="inlineFormInputGroupUsername2">
                                <h5>Sign up for our Newsletter </h5>
                            </label>
                            <div className="input-group mb-2 mr-sm-2 ml-sm-2">

                                <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="email address" />
            </div>

                                <Button type="submit" className="btn btn-primary mb-2">Submit</Button>
          </Form>
        </div>
                    </div>



                </div>
                <div className="container-fluid" id="page-footer">
                    <div className="row">
                        <div className="col-sm-4">
                        <FontAwesomeIcon icon={faPhone} size="3x" /> 
                            <h3>Phone</h3>
                            <a href="tel:612-555-5555">(612) 555-5555</a>
                        </div>
                        <div className="col-sm-4">
                        <FontAwesomeIcon icon={faEnvelope} size="3x" /> 
                            <h3>E-mail</h3>
                            <a href="mailto:hhalvers@gmail.com">hhalvers@gmail.com</a>
                        </div>
                        <div className="col-sm-4">
                        <FontAwesomeIcon icon={faEnvelope} size="3x" /> 
                            <h3>Address</h3>
                            <a href="https://maps.google.com/?q=Palm+Springs"> 123 Palm Springs Way <br />
            Palm Springs, CA 92264</a>

                    </div>
                </div>
            </div>
            <div className="container-fluid" id="copyright">
                <div className="row">
                    <div className="col"> &#169; Heath Halverson 2020</div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;