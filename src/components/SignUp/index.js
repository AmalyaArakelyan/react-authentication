import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const SignUpPage = () => (
    <div>
        <SignUpForm />
    </div>
);



const INITIAL_STATE = {
    username: '',
    email: '',
    phoneNumber:'',
    photoURL:'',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username,phoneNumber, photoURL, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                debugger;
                this.props.firebase.createUser({
                    username,
                    email,
                    phoneNumber,
                    photoURL,
                    uid :authUser.user.uid

                });
                this.props.firebase.updateUser({
                    username,
                    email,
                    phoneNumber,
                    photoURL
                });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        const {
            username,
            email,
            phoneNumber,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' || phoneNumber === '' ||
            email === '' ||
            username === '';

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={this.onSubmit}>
                            <p className="h4 text-center mb-4">Sign up</p>

                            <label
                                htmlFor="email"
                                className="grey-text"
                            >
                                Email Address as login
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={this.onChange}
                                placeholder="Email Address"
                            />
                            <br />
                            <label htmlFor="name" className="grey-text">
                                Your name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={this.onChange}
                                placeholder="Full Name"
                            />
                            <br />
                            <label
                                htmlFor="number"
                                className="grey-text"
                            >
                                Phone number
                            </label>
                            <input
                                type="text"
                                id="number"
                                className="form-control"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={this.onChange}
                                placeholder="Phone number"
                            />
                            <br />
                            <label
                                htmlFor="password"
                                className="grey-text"
                            >
                                Your password
                            </label>
                            <input
                                id="password"
                                className="form-control"
                                name="passwordOne"
                                value={passwordOne}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Password"
                            />
                            <label
                                htmlFor="passwordTwo"
                                className="grey-text"
                            >
                                Repeat password
                            </label>
                            <input
                                id="passwordTwo"
                                className="form-control"
                                name="passwordTwo"
                                value={passwordTwo}
                                onChange={this.onChange}
                                type="password"
                                placeholder="confirm Password"
                            />
                            <div className="text-center mt-4">
                                <MDBBtn color="unique" type="submit">
                                    Register
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

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };