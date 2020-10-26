import React, { Component } from 'react';
import DisplayHomeCard from './DisplayHomeCard'


function PropertiesForRent(props) {



    const directory = props.rentProps.map(home => {

        return (
            <div key={home.id} className="col-md-3 d-flex align-items-stretch">
                <DisplayHomeCard home={home} />
            </div>
        );
    });


    return (
        <div className="container propertiesForSale">
            {/* <div className="row" style="text-align: center; padding-bottom: 20px"> */}
            <div className="row">
                <div className="col">
                    <h3>Featured Properties for Rent</h3>
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>

            



        );

}

export default PropertiesForRent;