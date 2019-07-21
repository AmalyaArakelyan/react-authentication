import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();

        this.storage = firebase.storage().ref();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    createUser = (user) => {
        this.db.ref('users/' + user.uid).set({
            username: user.username,
            email: user.email,
            phone: user.phoneNumber
        }, function (error) {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
            }
        });
    };

    getUser = () => {
        let userId = this.auth.currentUser.uid;
        return this.db.ref('/users/' + userId).once('value').then(function (snapshot) {
            return snapshot.val();
        });
    }

    updateUser = (user) => {
        let currentUser = this.auth.currentUser;

        if (currentUser.email !== user.email) {
            this.auth.signInWithEmailAndPassword(currentUser.email, 'Amalya@123')
                .then(function (userCredential) {
                    userCredential.user.updateEmail('user.email')
                })

            debugger;
            currentUser.updateEmail(user.email).then(function () {
                // Update successful.
            }).catch(function (error) {
                // An error happened.
            });
        }


        currentUser.updateProfile({
            displayName: user.username,
            photoURL: user.photoUrl,
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });

        this.db.ref('users/' + currentUser.uid).set({
            username: user.username,
            email: user.email,
            phone: user.phoneNumber
        }, function (error) {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
            }
        });

    };


    onAuthStateChanged = () =>
        this.auth.onAuthStateChanged(
            function (user) {
                if (user) {
                    // User is signed in.
                    // ...
                } else {
                    // User is signed out.
                    // ...
                }
            }
        );


    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = (password, passwordOne) => {
        let currentUser = this.auth.currentUser;
        debugger;
        return this.auth.signInWithEmailAndPassword(currentUser.email, password)
            .then(function (userCredential) {
                debugger;
                userCredential.user.updatePassword(passwordOne);
            });
    };


    // *** User API ***

    addPhoto = (file) => {


// Create a reference to 'mountains.jpg'
//         let mountainsRef = this.storage.child('mountains.jpg');
//
// // Create a reference to 'images/mountains.jpg'
//         ;
//         console.log(mountainsRef);
//         console.log(mountainImagesRef);

        // Create file metadata including the content type
        let metadata = {
            contentType: 'image/jpeg',
        };
        let i, images = [];
// Upload the file and metadata
        for (i = 0; i < file.length; i++) {
            debugger;
            let name = file[i].name;
            this.storage.child(`images/${name}`).put(file[i], metadata);
            let mountainImagesRef = this.storage.child(`images/${name}`);
            mountainImagesRef.getDownloadURL().then(function (url) {
                images.push(url);
            }).catch(function (error) {

            });
        }

        return images;
    };

    addProfileImage = (file) => {
        debugger;
        let currentUser = this.auth.currentUser;

        let metadata = {
            contentType: 'image/jpeg',
        };

        let name = file[0].name;
        this.storage.child(`images/${name}`).put(file[0], metadata);
        let mountainImagesRef = this.storage.child(`images/${name}`);
        return mountainImagesRef.getDownloadURL().then(function (url) {
            currentUser.updateProfile({
                photoURL: url,
            })
            return url;
        }).catch(function (error) {

        });
    }
    getImages = () => {
        debugger;
        let currentUser = this.auth.currentUser;
        let ImageList = this.storage.child(`files/${currentUser.uid}`);
        return ImageList.listAll();


    };

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');


//     service firebase.storage {
//     match /b/{bucket}/o {
// match /{allPaths=**} {
//     allow read, write: if request.auth != null;
// }
// }
// }
}

export default Firebase;