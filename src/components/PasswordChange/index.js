import React, {Component} from 'react';

import {withFirebase} from '../Firebase';
import {MDBContainer, MDBRow, MDBCol, MDBBtn} from 'mdbreact';


const INITIAL_STATE = {
    password: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        event.preventDefault();
        const {password, passwordOne} = this.state;

        this.props.firebase
            .doPasswordUpdate(password, passwordOne)
            .then(() => {
                this.setState({...INITIAL_STATE});
            })
            .catch(error => {
                this.setState({error});
            });


    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {password, passwordOne, passwordTwo, error} = this.state;

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={this.onSubmit}>
                            <p className="h4 text-center mb-4">Change password</p>
                            <label htmlFor="password0" className="grey-text">
                                Current password
                            </label>
                            <input
                                id="password0"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Password"
                            />
                            <br/>
                            <label htmlFor="password1" className="grey-text">
                                New password
                            </label>
                            <input
                                id="password1"
                                className="form-control"
                                name="passwordOne"
                                value={passwordOne}
                                onChange={this.onChange}
                                type="password"
                                placeholder="New Password"
                            />
                            <br/>
                            <label
                                htmlFor="passwordTwo1"
                                className="grey-text"
                            >
                                Confirm password
                            </label>
                            <input
                                id="passwordTwo1"
                                className="form-control"
                                name="passwordTwo"
                                value={passwordTwo}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Confirm password"
                            />
                            <br/>

                            <div className="text-center mt-4">
                                <MDBBtn color="unique" type="submit">
                                    Update
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

export default withFirebase(PasswordChangeForm);