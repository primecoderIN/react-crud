import React, {useState,useEffect}from 'react';
import axios from "axios";
import {Link,useHistory} from "react-router-dom";
import User from "./User"

function Home() {
    const [showModal,setShowModal] = useState(false);
    const [user,setUser] = useState({});
      const [users,setUsers] = useState([]);
      const history = useHistory();
      const getUsers = async () => {
          const response = await axios.get("http://localhost:3001/users");
          setUsers(response.data.reverse());

      }
      useEffect(()=> {
          getUsers();
      },[])
      const DeleteUser = async (id) => {
        await  axios.delete(`http://localhost:3001/users/${id}`);
        getUsers();
        history.push('/');
      }
      const showUser = async (id) => {
          const user = await axios.get(`http://localhost:3001/users/${id}`)
          setUser(user.data)
      }
    return (
        <div className='container mt-5 w-75'>
           <table className='table table-hover table-responsive table-bordered'>
                <thead>
                    <tr className='bg-dark text-white text-center'>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {users.map(({id,name,username}) => {
                       return (
                            <tr key={id}>
                              <td className='align-middle text-center'> {id} </td>
                              <td className='align-middle'>{name}</td>
                              <td className='align-middle'>{username}</td>
                              <td className='text-center'>
                                   <button className='btn btn-primary'  onClick={()=> {
                                       setShowModal(!showModal);
                                       showUser(id);
                                       }} > View </button>
                                    <Link className='btn btn-secondary mx-2' to={`/users/edit/${id}`}>Edit </Link>
                                   <Link className='btn btn-danger' to={'/'} onClick={() => DeleteUser(id)}> Delete </Link>
                              </td>
                            </tr>
                       )
                   })}
                </tbody>
           </table>
          { showModal && <User {...user} setShowModal={setShowModal} show={showModal} className='user-modal text-primary'/>} 
        </div>
    )
}

export default Home
