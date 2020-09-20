import firebase from 'firebase/app';

export function FirebaseGoogleLogin() {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithRedirect(googleAuthProvider)
    .catch(function (error) {
      console.log(error);
    });
}
export function FirebaseEmailLogin(email: string, password: string) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => console.log('logged-in'))
    .catch((error) => console.log(error));
}

export function FirebaseSignup(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (result) {
      const profile = { displayName: firstName + ' ' + lastName };
      result.user?.updateProfile(profile).then(function () {
        result.user?.sendEmailVerification();
      });
    })
    .catch((error) => console.log(error));
}
