import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MainImage from './MainImage';
import PropertiesForSale from './PropertiesForSale';
import PropertiesForRent from './PropertiesForRent';
import OurAgents from './OurAgents';
import DisplayMap from './DisplayMap';
import Map from './DisplayGoogleMap';
import ContactUs from './ContactUs';
import PropertyInfo from './PropertyInfo';
import { PROPERTIES_FOR_SALE } from "../shared/saleProperties"
import { PROPERTIES_FOR_RENT } from "../shared/rentProperties"
import { OUR_AGENTS } from "../shared/ourAgents"
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";

import MapSection from './DisplayGoogleMap' // import the map here

const location = {
    address: 'Palm Springs, CA',
    lat: 33.830517,
    lng: -116.545601,
  } // our location object from earlier


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saleProps: PROPERTIES_FOR_SALE,
            rentProps: PROPERTIES_FOR_RENT,
            agentProps: OUR_AGENTS
        };
    }



    render() {

        const PropertyWithId = ({match}) => {
            console.log(this.props);
            console.log("PropertyId= " + match.params.propertyId);

            const myProps = (match.url.includes("forSale") ? this.state.saleProps : this.state.rentProps);
            return (
                <PropertyInfo 
                    property={myProps.filter(property => property.id === +match.params.propertyId)[0]}
                />
                );
        }
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={MainImage} />
                  <Route path='/home' component={MainImage} />
                  <Route exact path='/forSale' render={() => <PropertiesForSale saleProps={this.state.saleProps} />} />
                  <Route exact path='/forRent' render={() => <PropertiesForRent rentProps={this.state.rentProps} />} />
                  <Route path='/forSale/:propertyId' properties={PropertiesForSale} component={PropertyWithId} />   
                  <Route path='/forRent/:propertyId' properties={PropertiesForRent} component={PropertyWithId} />   
                  <Route path='/contactus'  component={ContactUs} />
                  <Route path='/map'  render={() => <Map location={location} zoomLevel={12}/>} />
                  {/* <Route path='/map' component={DisplayMap} /> */}
                  <Route exact path='/agents' render={() => <OurAgents agentProps={this.state.agentProps} />} />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;

