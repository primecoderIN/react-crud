import React from 'react'

function Contact() {
    return (
        <>
            <form action='#' className='container w-25 mt-5 mx-auto'>
                 <div className='mt-3 mb-3'>
                      <label htmlFor='username' className='form-label'>Username</label>
                      <input type="text" className='form-control' placeholder='Username' name='username' />
                 </div>
                 <div className='mt-3 mb-3'>
                      <label htmlFor='password' className='form-label'>Password</label>
                      <input type="password" className='form-control' placeholder='Password' name='password' />
                 </div>
                 <div className='text-center'>
                       <button type="submit" class="btn btn-primary w-100">Submit</button>
                 </div>
            </form>
        </>
    )
}

export default Contact
