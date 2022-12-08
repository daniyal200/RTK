import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { setDispatchUser } from '../features/counter/auth';
import '../App.css'

const Login = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log(auth.totalUsers);
        let flag = false;
        for (let i = 0; i < auth.totalUsers.length; i++) {
            if (auth.totalUsers[i].username === username && auth.totalUsers[i].password === password) {
                dispatch(setDispatchUser(auth.totalUsers[i]));
                console.log("ok....");
                navigate("/dashboard");
                flag = true;
            }
        }
        if (!flag) {
            alert("User Not Found")
        }
    }

    return (
        <div className='Login'>
            <nav className='nav'>
                <h4 className='greet'><Link to="/register" className='regg'>Register</Link></h4></nav>
            <section className='form'>
                <div className='reg'>
                    <h1>Login</h1>
                    <label htmlFor="">UserName</label>
                    <input type="text" placeholder='UserName' value={username} onChange={e => setUsername(e.target.value)} />
                    <br />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                    <br />
                    <button onClick={handleLogin}>Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </section>
        </div>
    )
}

export default Login
