import React from 'react'
import {Link} from "react-router-dom"

function Error() {
    return (
        <div className='error' >
            <h1 className='text-primary'> Error 404, Page not found</h1>
            <Link className='home-btn' to='/'>Back to Home</Link>
        </div>
    )
}

export default Error
