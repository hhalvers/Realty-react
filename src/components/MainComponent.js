import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MainImage from './MainImage';
import PropertiesForSale from './PropertiesForSale';
import PropertiesForRent from './PropertiesForRent';
import { PROPERTIES_FOR_SALE } from "../shared/saleProperties"
import { PROPERTIES_FOR_RENT } from "../shared/rentProperties"


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saleProps: PROPERTIES_FOR_SALE,
            rentProps: PROPERTIES_FOR_RENT

        };
    }



    render() {

        
        return (
            <div>
                <Header />
                <MainImage />
                <PropertiesForSale saleProps={this.state.saleProps}/>
                <PropertiesForRent rentProps={this.state.rentProps}/>
                <Footer />
            </div>
        );
    };
}

export default Main;

