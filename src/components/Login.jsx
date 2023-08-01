import React from 'react';
//Auth
import firebase from 'firebase/app';
import { auth } from '../firebase';
//Style
import "./Login.css"

const Login = () => {
	return (
		<div className='loginPage'>
			<div className='loginCard'>
				<h2>Welcome To Chat App :)</h2>
				<div onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} className='loginButton'>
					<img src="./icons/google.svg" alt="Google Icon" /> Sign in with Google
				</div>
			</div>
		</div>
	);
};

export default Login;