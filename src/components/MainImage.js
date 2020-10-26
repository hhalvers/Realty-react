import React, { Component } from 'react';


class MainImage extends Component {
    state = {}
    render() {
        return (

            <div className="containter">
                <div className="row" id="mainImage">
                    <div className="col">
                        <div className="thumbnail text-center">
                            <img src="../img/PalmSprings_1.jpg" alt="" className="img-responsive img-fluid" />
                            <div className="caption">
                                <p>Welcome to Palm Springs!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row propertiesCount">
                    <div className="col">
                        <h3>Properties for Sale</h3>
                    </div>
                </div>
                <div className="row propertiesCount">
                    <div className="col-4">
                        <h2>200</h2>
                        <p> Total Properties</p>
                    </div>
                    <div className="col-4">
                        <h2>12</h2>
                        <p>New Properties this week</p>
                    </div>
                    <div className="col-4">
                        <h2>40</h2>
                        <p>New Properties this month</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default MainImage;