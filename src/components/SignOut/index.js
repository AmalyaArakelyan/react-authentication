import React from 'react';

import { withFirebase } from '../Firebase';
import {MDBBtn} from "mdbreact";

const SignOutButton = ({ firebase }) => (
    <MDBBtn  onClick={firebase.doSignOut}  color="default-color-dark" type="submit">Sign Out</MDBBtn>
);

export default withFirebase(SignOutButton);