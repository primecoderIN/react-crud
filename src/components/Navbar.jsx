import React from 'react';
import {Link,NavLink} from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">

                    <div className="container-fluid">
                        <ul className="navbar-nav ">
                            <li><h3 className='text-white'>React Crud</h3></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </li>
                        </ul>
                        <Link to='/users/add' className='btn btn-outline-light mx-3'>Add user</Link>
                    </div>         
           </nav>
        </>
    )
}

export default Navbar
