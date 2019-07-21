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
    images: [],
    error: null,
};

class AddPhotoBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    componentWillMount() {
        this.getImages()

    }

    componentWillReceiveProps() {

    }

    getImages = () => {

        this.props.firebase.images().on('value', snapshot => {
            const imagesObject = snapshot.val();

            const imageList = Object.keys(imagesObject).map(key => ({
                ...imagesObject[key],
                uid: key,
            }));

            this.setState({
                images: imageList,
                loading: false,
            });
        });
    }

    onChange = file => {

        let i, images = [];
        for (i = 0; i < file.length; i++) {
            this.props.firebase.addPhoto(file[i]).then(data => {
                images.push(data);
                this.setState({images: images})

            })
        }


    };

    render() {
        const {
            images,
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
                <MDBContainer >
                    <div className='row'>
                    {

                        images.length > 0 && images.map((image, i) => {
                            return <div className='col-2' key={i}>
                                <img src={image.url} alt={image.name}/>
                            </div>
                        })
                    }
                    </div>
                </MDBContainer>
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



