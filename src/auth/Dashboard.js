import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setDispatchdeleteUser } from '../features/counter/auth';
import { Link } from "react-router-dom";
import '../App.css'
import PopUp from './PopUp';

const Dashboard = () => {
    const auth = useSelector(state => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.totalUsers.length === 0) {
            navigate("/")
        }
    })

    const handleDeleteUser = (usernameToDelete) => {
        dispatch(setDispatchdeleteUser({ username: usernameToDelete }));
    }



    return (
        <div>
            <nav className='nav'> 
            <h4 className='greet'><Link to="/" className='regg'>Logout</Link></h4></nav>
            <div className='details'>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Current User</strong>
                </Toast.Header>
                <Toast.Body> User Name : {auth.user.username} </Toast.Body>
                <Toast.Body> Full Name : {auth.user.firstname} {auth.user.lastname}</Toast.Body>
            </Toast>
            </div>
            
            <section>
                <>
                    <table className='table'>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                        <th>Password</th>
                        {

                            auth.totalUsers.map((item, index) => {
                                return (
                                    <>
                                        <tr style={{ backgroundColor: index % 2 === 0 ? '#808080' : '#FFFFFF' }}>
                                            <td>{item.firstname}</td>
                                            <td>{item.lastname}</td>
                                            <td>{item.username}</td>
                                            <td>{item.password}</td>
                                            <td><button className='but' onClick={() => handleDeleteUser(item.username)}>Delete</button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </table>
                </>
            </section>
            <h4>
                Total Users : {auth.totalUsers.length}
            </h4>
            <PopUp />

            <Link to="/">Logout</Link>
        </div>
    )
}

export default Dashboard
