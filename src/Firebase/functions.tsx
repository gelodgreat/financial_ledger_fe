import firebase from 'firebase/app';

export function FirebaseGoogleLogin(){
    var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(googleAuthProvider)
    .catch(function(error){
        console.log(error);
    })
}