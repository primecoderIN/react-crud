import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useParams,useHistory} from "react-router-dom"
//Usehistory is used to redirect user after post request

function EditUser() {
    const [user,setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })
    const {name,username,email,phone,website} = user;
    const history = useHistory();
    const {id} = useParams(); //Id of user to be deleted coming from dynamic routing

    const loadUser = async (id) => {
      const user = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(user.data);
    }

    useEffect(() => {
        loadUser(id)
    },[id])//Jab bhi edit pe koi click krega ye page render hoga aue ek hi bar data load hoga

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name] : value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user)
        // kis user ka data update krna hai iske liye id diya
        history.push("/");
    }
    return (
        <>
            <form className='w-25 mx-auto mt-5'>
                <div className='mb-3'>
                    <input 
                    type='text' 
                    placeholder='Name' 
                    className='form-control' 
                    name='name'
                    value={name}
                    onChange={handleInput}
                    />
                </div>
                <div className='mb-3'>
                    <input 
                    type='text' 
                    placeholder='Username' 
                    className='form-control' 
                    name='username'
                     value={username}
                     onChange={handleInput}
                    />
                </div>
                <div className='mb-3'>
                    <input type='text' 
                    placeholder='Email' 
                    className='form-control' 
                    name='email'
                     value={email}
                      onChange={handleInput}
                    />
                </div>
                <div className='mb-3'>
                    <input 
                    type='text' 
                    placeholder='Phone' 
                    className='form-control' 
                    name='phone'
                     value={phone}
                      onChange={handleInput}
                    />
                </div>
                <div className='mb-3'>
                    <input 
                    type='text' 
                    placeholder='Website' 
                    className='form-control' 
                    name='website'
                    value={website}
                     onChange={handleInput}
                    />
                </div>
                <div className='text-center'>
                     <button className='btn btn-primary mx-auto w-100' onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </>
    )
}

export default EditUser;
