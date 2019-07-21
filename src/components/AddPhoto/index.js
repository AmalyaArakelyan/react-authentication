import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from '../Firebase';
import Dropzone from 'react-dropzone'

import {AuthUserContext, withAuthorization} from '../Session';
import {MDBContainer} from "mdbreact";


class AddPhotoPage extends Component {
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
                    <AddPhoto/>
                )}
            </AuthUserContext.Consumer>
        );
    }
}

const INITIAL_STATE = {
    photo: '',
    files:'',
    error: null,
};

class AddPhotoBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    componentWillMount() {
         this.props.firebase.getUser().then(data => {
            console.log(data, 'data')
            this.setState({
                username: data.username,
                email: data.email,
                phoneNumber: data.phone,
            })
        }).catch(function (error) {
            // An error happened.
        });
        ;


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

    onChange = file => {
        this.setState({file:file});
        this.props.firebase.addPhoto(file)
        //     .then(file =>{
        //     console.log(file)
        // });
        // this.props.firebase.getImages().then(file =>{
        //     console.log(file)
        // });
    };

    render() {

        const {
            error,
        } = this.state;


        return (
            <React.Fragment>
            <Dropzone onDrop={acceptedFiles => this.onChange(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div {...getRootProps()} className='dropzone'>
                            <input {...getInputProps()} />
                            <p className='pt-3'>Click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
                {error && <p>{error.message}</p>}
            <div>

                {
                    this.state.files.length>0 && this.state.files.map(file => {
                        return <MDBContainer>
                            <img src={file} alt=''/>
                        </MDBContainer>
                    })
                }
            </div>
            </React.Fragment>
        );
    }
}


const AddPhoto = compose(
    withRouter,
    withFirebase,
)(AddPhotoBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AddPhotoPage);



