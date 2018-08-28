const Rebase = require('re-base');
const firebase = require('firebase');

const FirebaseConfig = {
    apiKey: "AIzaSyBr3_LpxZ3ggHsFtSQCHM92MuVMTKVQwvk",
    authDomain: "leandro-login.firebaseapp.com",
    databaseURL: "https://leandro-login.firebaseio.com",
    projectId: "leandro-login",
    storageBucket: "leandro-login.appspot.com",
    messagingSenderId: "89115793255"
}

const app = firebase.initializeApp(FirebaseConfig);
const config = Rebase.createClass(app.database());

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider,
    'twitter': new firebase.auth.TwitterAuthProvider,
    'google': new firebase.auth.GoogleAuthProvider,
    'github': new firebase.auth.GithubAuthProvider
}

export const storage = app.storage();
export const auth = app.auth();

export default config;