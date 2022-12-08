import React from 'react'
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import { useDispatch, useSelector } from 'react-redux';
import { setDispatchTotalUsers } from '../features/counter/auth';
import { useState } from 'react';

const PopUp = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const [modal, setModal] = useState(false);
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
                dispatch(setDispatchTotalUsers(user));
            }
            alert('User Added');
        }

    }
    return (
        <div>
            <Modal
                size="lg"
                isOpen={modal}
                toggle={() => setModal(!modal)}>
                <ModalHeader
                    toggle={() => setModal(!modal)}>
                        Add User
                </ModalHeader>
                <ModalBody>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='First Name' value={user.firstname} onChange={e => setUser({ firstname: e.target.value, lastname: user.lastname, username: user.username, password: user.password })} />
                <br />
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Last Name' value={user.lastname} onChange={e => setUser({ firstname: user.firstname, lastname: e.target.value, username: user.username, password: user.password })} />
                <br />
                <label htmlFor="">UserName</label>
                <input type="text" placeholder='UserName' value={user.username} onChange={e => setUser({ firstname: user.firstname, lastname: user.lastname, username: e.target.value, password: user.password })} />
                <br />
                <label htmlFor="">Password </label>
                <input type="password" placeholder='Password ' value={user.password} onChange={e => setUser({ firstname: user.firstname, lastname: user.lastname, username: user.username, password: e.target.value })} />
                <br />
                <button onClick={registerhandle}>Register</button>
                <br />
                </ModalBody>
            </Modal>

                <button className='btn mt-3' style={{ backgroundColor: "#0b3629", color: "white" }} onClick={()=>setModal(true)}>
                    Add User
                </button>
        </div>
    )
}

export default PopUp
