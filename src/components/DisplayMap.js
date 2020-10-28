import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function DisplayMap() {

        return (
            <div className="container-fluid" id="propertiesMap">
            <div className="row" >
              <div className="col-12">
                <h3>Areas with our Properties</h3>
              </div>
            </div>
            <div clas="row">
              <div className="col">
                <div id="map-container-google-1" className="z-depth-1-half map-container map-size" >
                  <iframe src="https://maps.google.com/maps?q=Palm+Springs&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0"
                     allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        );
    }




export default DisplayMap;