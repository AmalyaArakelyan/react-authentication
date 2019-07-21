import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import { AuthUserContext, withAuthorization } from '../Session';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user:[],
            users: []
        };
    }

    componentDidMount()
    {
        this.getUser();

    }
    componentWillReceiveProps(){
        {console.log(this.state.user)}
    }
    // componentWillUpdate(){
    //     if(this.state.user.length!==0){
    //         this.getUser();
    //     }
    //
    //
    // }
    getUser(){
        let currentUser=this.props.firebase.auth.currentUser;

        this.setState({loading: true, user:currentUser});
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { user, users, loading } = this.state;
        return (
            <AuthUserContext.Consumer>
                {authUser => (

                    <div>

                        <h1>Hi <span className={'teal-text'}>{user.displayName}</span>, welcome to home page</h1>
                        <div>
                            <img src={user.photoURL} alt='' width={150}/>
                        </div>
                        <h1>All users</h1>
                        {loading && <div>Loading ...</div>}

                        <UserList users={users} />
                    </div>
                )}
            </AuthUserContext.Consumer>
        );
    }
}

const UserList = ({ users }) => (
    <MDBTable>
        <MDBTableHead color="primary-color" textWhite>
            <tr>
                <th>Id</th>
                <th>email</th>
                <th>Name</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {users.map(user => (
                <tr key={user.uid}>
                    <td>{user.uid}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                </tr>

            ))}

        </MDBTableBody>
    </MDBTable>

);




const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);