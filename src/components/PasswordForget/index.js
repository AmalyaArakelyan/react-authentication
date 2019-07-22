import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdbreact";

const PasswordForgetPage = () => (
    <div>
        <PasswordForgetForm/>
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email} = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({...INITIAL_STATE});
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, error} = this.state;

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={this.onSubmit}>
                            <h1>PasswordForget</h1>
                            <label htmlFor="email2" className="grey-text">
                                New password
                            </label>
                            <input
                                id="email2"
                                className="form-control"

                                name="email"
                                value={email}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Email Address"
                            />
                            <br/>

                            <div className="text-center mt-4">
                                <MDBBtn color="unique" type="submit">
                                    Reset My Password
                                </MDBBtn>
                            </div>
                            {error && <p>{error.message}</p>}


                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


        );
    }
}

const PasswordForgetLink = () => (
    <MDBContainer>
        <p>
            <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
        </p>
    </MDBContainer>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export {PasswordForgetForm, PasswordForgetLink};