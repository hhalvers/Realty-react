import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Map from './DisplayGoogleMap';

function PropertyInfo(props) {
    if (props.property) console.log(`props: ${props.property}`);
    console.log("property lat: " + props.property.lat);
    console.log("property lng: " + props.property.lng);
    // const location = {
    //     address: props.property.address,
    //     lat: props.property.lat,
    //     lng: props.property.lng,       
    //   } 
      const location = {
        address: props.property.address,
        lat: props.property.lat,
        lng: props.property.lng,
      } 
    if (props.property)
    
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row propertyTitle" >
                        <h2>For Sale - {props.property.address} - { props.property.price}</h2>
                    </div>
                    <div className="row" >
                        <div className="col-md-6">
                            <Carousel dynamicHeight={true}>
                                <div>
                                    <img src={props.property.photos[0]} />
                                </div>
                                <div>
                                    <img src={props.property.photos[1]} />

                                </div>
                                <div>
                                    <img src={props.property.photos[2]}/>

                                </div>
                                <div>
                                    <img src={props.property.photos[3]}/>

                                </div>
                            </Carousel>
                        </div>
                        <div className="col-md-6">
                            <h4>Beds: {props.property.beds} - Baths: {props.property.baths}</h4>
                            <h6> {props.property.description}</h6>
                            <p>{props.property.longDescription}</p>
                        </div>

                    </div>

                </div>
            </React.Fragment >


        )


    return <div />;
}

export default PropertyInfo;