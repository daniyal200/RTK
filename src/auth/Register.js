import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDispatchTotalUsers, setDispatchUser } from '../features/counter/auth';
import { Link } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const [user, setUser] = useState({ firstname: '', lastname: '', username: '', password: '' });

    const registerhandle = () => {
        let flag = false;
        for (let i = 0; i < auth.totalUsers.length; i++) {
            if (auth.totalUsers[i].username === user.username) {
                alert("Username already exists");
                flag = true;
            }
        }
        if (user.firstname === '' || user.lastname === '' || user.username === '' || user.password === '') {
            alert("Please enter a value");
        } else {
            if (!flag) {
                console.log('add user...');
                console.log(user);
                dispatch(setDispatchUser(user));
                dispatch(setDispatchTotalUsers(user));
            }
            alert('You can Login Now');
        }

    }
    return (
        <div>
            <nav className='nav'> 
            <h3 className='greet1'><Link to="/">Login</Link></h3></nav>
            <div className="reg">
                <h1>Register</h1>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='First Name' value={user.firstname} onChange={e => setUser({ firstname: e.target.value, lastname: user.lastname, username: user.username, password: user.password })} />
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Last Name' value={user.lastname} onChange={e => setUser({ firstname: user.firstname, lastname: e.target.value, username: user.username, password: user.password })} />
                <label htmlFor="">UserName</label>
                <input type="text" placeholder='UserName' value={user.username} onChange={e => setUser({ firstname: user.firstname, lastname: user.lastname, username: e.target.value, password: user.password })} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password' value={user.password} onChange={e => setUser({ firstname: user.firstname, lastname: user.lastname, username: user.username, password: e.target.value })} />
                <br />
                <button onClick={registerhandle}>Register</button>
                <Link to="/">Login</Link>
            </div>
        </div>
    )
}
export default Register
