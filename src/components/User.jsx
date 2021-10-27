import React from 'react'

function User({name,username,email,phone,website,setShowModal,show}) {
    return (
        <div className='w-50 user-modal'>
            <table className='table  table-bordered'>
               
                <tbody>
                    <tr>
                        <th>Name</th>
                       <th>{name}</th>
                    </tr>
                    <tr>
                        <th>Username</th>
                       <th>{username}</th>
                    </tr>
                    <tr>
                        <th>Email</th>
                       <th>{email}</th>
                    </tr>
                    <tr>
                        <th>Phone</th>
                       <th>{phone}</th>
                    </tr>
                    <tr>
                        <th>Website</th>
                       <th>{website}</th>
                    </tr>
                </tbody>
            </table>
            <div className='text-center'>
                    <button className='btn bg-warning' onClick={()=>setShowModal(!show)}>Close</button>
            </div>
        </div>
    )
}

export default User
