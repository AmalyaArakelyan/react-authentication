import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from '../Firebase';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBTabPane,
    MDBTabContent,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBIcon
} from 'mdbreact';

import {AuthUserContext, withAuthorization} from '../Session';
import PasswordChangeForm from '../PasswordChange';

class AccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: "1"
        };
    }


    toggle = tab => () => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    }

    render() {
        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <MDBContainer>
                        <MDBNav tabs color="default-color">
                            <MDBNavItem>
                                <MDBNavLink
                                    to="#"
                                    className={this.state.activeItem === "1" ? "active teal-text" : "cyan-text"}
                                    onClick={this.toggle("1")}
                                    role="tab"
                                >
                                    <MDBIcon icon="user"/> Update Information
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink
                                    to="#"
                                    className={this.state.activeItem === "3" ? "active teal-text" : "cyan-text"}
                                    onClick={this.toggle("3")}
                                    role="tab"
                                >
                                    <MDBIcon icon="envelope"/> change Password
                                </MDBNavLink>
                            </MDBNavItem>

                        </MDBNav>
                        <MDBTabContent
                            className="card"
                            activeItem={this.state.activeItem}
                        >
                            <MDBTabPane tabId="1" role="tabpanel">
                                <UpdateForm/>
                            </MDBTabPane>
                            <MDBTabPane tabId="3" role="tabpanel">
                                <PasswordChangeForm/>
                            </MDBTabPane>

                        </MDBTabContent>
                    </MDBContainer>
                )}
            </AuthUserContext.Consumer>
        );
    }
}

// const AccountPage = () => (
//     <AuthUserContext.Consumer>
//         {authUser => (
//             <div>
//                 <UpdateForm />
//             </div>
//         )}
//     </AuthUserContext.Consumer>
//
// );


const INITIAL_STATE = {
    username: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class UpdateFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    componentWillMount() {
        this.props.firebase.getUser().then(data => {
             this.setState({
                username: data.username,
                email: data.email,
                phoneNumber: data.phone,
            })
        }).catch(function (error) {
            // An error happened.
        });
        let currentUser = this.props.firebase.auth.currentUser;
        this.setState({
            username: currentUser.username,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
        })
    }

    componentWillReceiveProps() {

    }

    onSubmit = event => {
        const {username, phoneNumber, photoURL, email,} = this.state;

        event.preventDefault();
        this.props.firebase.updateUser({
            username,
            email,
            phoneNumber,
            photoURL
        })


    };
    AddProfileImage = event => {
        this.props.firebase.addProfileImage(event.target.files).then(url => {
            this.setState({photoURL: url})
            return url;
        }).catch(function (error) {

        })


    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {

        const {
            username,
            email,
            phoneNumber,
            photoURL,
            error,
        } = this.state;

        return (

            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={this.onSubmit}>
                            <h1 className="h4 text-center mb-4 mt-3">Update personal information</h1>

                            <label htmlFor="file" className="grey-text">
                                Add profile image
                            </label>
                            <input
                                type="file"
                                id="file"
                                className=""
                                name="file"
                                onChange={this.AddProfileImage}
                                placeholder="Full Name"
                            />
                            <br/>
                            <div>
                                <img src={photoURL} alt='' width={150}/>
                            </div>
                            <br/>
                            <label htmlFor="name" className="grey-text">
                                Your name
                            </label>

                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                name="username"
                                value={username || ''}
                                onChange={this.onChange}
                                placeholder="Full Name"
                            />
                            <br/>
                            <label
                                htmlFor="phone"
                                className="grey-text"
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                className="form-control"
                                name="phoneNumber"
                                value={phoneNumber || ''}
                                onChange={this.onChange}
                                placeholder="Phone Number"
                            />
                            <br/>
                            <label
                                htmlFor="email1"
                                className="grey-text"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email1"
                                className="form-control"
                                name="email"
                                value={email || ''}
                                onChange={this.onChange}
                                placeholder="Email Address"
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


const UpdateForm = compose(
    withRouter,
    withFirebase,
)(UpdateFormBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);



