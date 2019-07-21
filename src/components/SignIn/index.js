import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


const SignInPage = () => (
    <div>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then((data) => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);

                const user = data.user;

            })
            .catch(error => {
                this.setState({ error });
            });


    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={this.onSubmit}>
                            <h1 className="h4 text-center mb-4">Sign in</h1>
                            <label htmlFor="email3" className="grey-text">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email3"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={this.onChange}
                                placeholder="Email Address"
                            />
                            <br />
                            <label htmlFor="password2" className="grey-text">
                                Your password
                            </label>
                            <input
                                type="password"
                                id="password2"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={this.onChange}
                                placeholder="Password"
                            />
                            <div className="text-center mt-4">
                                <MDBBtn disabled={isInvalid}  color="indigo" type="submit">Login</MDBBtn>
                            </div>
                            {error && <p>{error.message}</p>}
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };