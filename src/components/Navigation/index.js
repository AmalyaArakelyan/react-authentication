import React from 'react';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import {AuthUserContext} from '../Session';

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth/> : <NavigationNonAuth/>
            }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">React Autentication</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler />
        <MDBCollapse id="navbarCollapse3" navbar>
            <MDBNavbarNav left>
                <MDBNavItem active>
                    <MDBNavLink to={ROUTES.HOME}>Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to={ROUTES.ACCOUNT}>Edit Personal Date</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to={ROUTES.ADMIN}>Add Photo</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <SignOutButton/>
                </MDBNavItem>

            </MDBNavbarNav>

        </MDBCollapse>
    </MDBNavbar>
);

const NavigationNonAuth = () => (

    <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">React Autentication</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler />
        <MDBCollapse id="navbarCollapse3"  navbar>
            <MDBNavbarNav left>
                <MDBNavItem active>
                    <MDBNavLink to={ROUTES.SIGN_IN}>Sign In</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to={ROUTES.SIGN_UP}>Registration</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>

        </MDBCollapse>
    </MDBNavbar>
);

export default Navigation;