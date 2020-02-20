import { firebase, googleAuthProvider } from "../firebase/firebase";

const king = process.env.REACT_APP_KING_KEY;

console.log(`^^^^^^^^^^king`);

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const logout = () => ({
  type: "LOGOUT"
});


