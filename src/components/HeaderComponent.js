import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

// import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6" >
                                <FontAwesomeIcon icon={faPhone} /> <a href="tel:612-555-1234"> (612) 555-1234</a>
                            </div>
                            <div className="col-6 text-right">
                                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
                            </div>
                        </div>
                    </div>

                </header>
                <Navbar light sticky="top" expand="md" className="my-navbar">
                    <div className="container-fluid">
                        <NavbarBrand  href="/"><img src="/img/cactus.png" height="100" width="100" alt="Cactus logo"/>Heath Halverson Realty</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar-right="true" navbar>
                                <NavItem>
                                    <NavLink className="nav-link active" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address fa-lg" /> For Sale
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> For Rent
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address fa-lg" /> Map
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address fa-lg" /> Our Agents
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>



               

            </div>
        );
    }
}

export default Header;