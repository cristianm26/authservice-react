import { authTypes } from "../types/authTypes";
import { firebase, googleAuthProvider } from '../firebase/config'
export const googleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(
                ({ user }) => {
                    dispatch(Login(user.uid, user.displayName))
                }
            )
    }
};


export const register = (email, password, username) => {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: username });
                dispatch(Login(user.uid, user.displayName))
            })
    }
}

export const Login = (uid, displayName) => {
    return {
        type: authTypes.login,
        payload: {
            uid,
            displayName,
        }

    };
}

export const emailAndPasswordLogin = (email, password) => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {

                dispatch(Login(user.uid, user.displayName))
            })
    }
}

export const logout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch({
            type: authTypes.logout
        })
    }
}