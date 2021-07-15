import React from 'react'
import { Button } from '@material-ui/core'
import { auth,provider } from '../firebase'
import './Login.css'
import { useStateValue  } from '../stateProvider'
import { actionTypes } from '../reducer'

function Login() {
    const [{},dispatch] = useStateValue();

    function signIn (){
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div  className="loginContainer">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
                    alt=""
                    />
                <div className="logingText">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
