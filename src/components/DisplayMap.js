import React from 'react';
import GoogleMapReact from 'google-map-react'
import '../css/map.css'

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
                  <iframe src="https://maps.google.com/maps?q=Palm+Springs&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0"
                     allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        );
    }




export default DisplayMap;