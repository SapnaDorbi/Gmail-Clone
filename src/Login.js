import React from 'react';
import './Login.css';
import { auth } from './firebase';
import Button from '@material-ui/'

const Login = () => {
    const signIn = () => {
        auth
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg "/>
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    );
};

export default Login;