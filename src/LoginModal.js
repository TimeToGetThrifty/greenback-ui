import React, { Component, useState } from 'react';
import axios from 'axios';

const LoginModal = (props) => {
    const token = window.localStorage.getItem("greenback-jwt-token");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const fetchToken = () => {
        axios.post("https://cloud.callbackheaven.com/greenback/api/authenticate", {
            userName: username,
            password: password     
        }).then((response) => {
            window.localStorage.setItem("greenback-jwt-token", response.headers.authorization);
            setIsLoggedIn(true);
        });
    };

    if (!token && !isLoggedIn) {
        return (
            <div>
                <label>Email</label>
                <input  className="form-control" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label>Password</label>
                <input className="form-control" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input className="btn btn-primary" type="submit" value="Submit" onClick={fetchToken}/>
            </div>
        )
    }

    return (<div>LoggedInContext</div>);

}

export default LoginModal;

