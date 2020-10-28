import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MainImage from './MainImage';
import PropertiesForSale from './PropertiesForSale';
import PropertiesForRent from './PropertiesForRent';
import OurAgents from './OurAgents';
import DisplayMap from './DisplayMap';
import ContactUs from './ContactUs';
import { PROPERTIES_FOR_SALE } from "../shared/saleProperties"
import { PROPERTIES_FOR_RENT } from "../shared/rentProperties"
import { OUR_AGENTS } from "../shared/ourAgents"
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";

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

        
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={MainImage} />
                  <Route path='/home' component={MainImage} />
                  <Route exact path='/forSale' render={() => <PropertiesForSale saleProps={this.state.saleProps} />} />
                  <Route exact path='/forRent' render={() => <PropertiesForRent rentProps={this.state.rentProps} />} />
                  <Route path='/contactus' component={ContactUs} />
                  <Route path='/map' component={DisplayMap} />
                  <Route exact path='/agents' render={() => <OurAgents agentProps={this.state.agentProps} />} />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;

