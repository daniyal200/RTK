import React, {useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setDispatchdeleteUser} from '../features/counter/auth';
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

    const handleDeleteUser=(usernameToDelete) =>{
        dispatch(setDispatchdeleteUser({username:usernameToDelete}));
    }



    return (
        <div>
            <nav className='nav'> 
            <h1 className='greet1'><Link to="/">Logout</Link></h1>
            </nav>
            <h1>Your User Name is : {auth.user.username} </h1>
            <h1>Your Full Name is : {auth.user.firstname} {auth.user.lastname}</h1>
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
                                            <td><button className ='but' onClick={() => handleDeleteUser(item.username)}>Delete</button></td>
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
            <PopUp/>
        
            <Link to="/">Logout</Link>
        </div>
    )
}

export default Dashboard
