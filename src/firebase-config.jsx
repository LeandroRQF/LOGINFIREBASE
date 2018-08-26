const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyDQNh1Fm8uGcNZe954jGiIRR42MYB0UqFU",
    authDomain: "click-doido.firebaseapp.com",
    databaseURL: "https://click-doido.firebaseio.com",
    projectId: "click-doido",
    storageBucket: "click-doido.appspot.com",
    messagingSenderId: "368220539812"
}

const app = firebase.initializeApp(FirebaseConfig)
const config = Rebase.createClass(app.database())

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider,
    'twitter': new firebase.auth.TwitterAuthProvider,
    'google': new firebase.auth.GoogleAuthProvider,
    'github': new firebase.auth.GithubAuthProvider
}

export const storage = app.storage();
export const auth = app.auth();

export default config;