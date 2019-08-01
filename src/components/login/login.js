import React from 'react'
import {auth, firebase, googleAuthProvider } from '../../firebase/firebase'

const LoginButton = () => {

return (
    <div>
        {auth.currentUser ? (
            <button className="btn btn-secondary" onClick={() => {
                auth.signOut()
            }}>
            <i className="fas fa-sign-out-alt" ></i> SIGN OUT
            </button>
        ) : (
            <button className="btn btn-secondary" onClick={() => firebase.auth().signInWithPopup(googleAuthProvider)}>
            Log In 
            </button>
        )}
    </div>)    
}



export default LoginButton
