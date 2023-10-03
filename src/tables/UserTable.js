import React from 'react'

function UserTable(props) {
    return (
    <div className='table-responsive'>
        <table className='table table-hover  container'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Vechile No</th>
                    <th>Delivery Area</th>
                    <th>Invoice No</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {props.users.length>0?
            (props.users.map((user)=>(
                                <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.date}</td>
                                <td>{user.vecno}</td>
                                <td>{user.place}</td>
                                <td>{user.invno}</td>
                                <td>{user.amnt}</td>
                                <td>
                                    <button onClick={()=>{
                                        props.edit(user)
                                    }} className='btn btn-success mx-3 px-4 py-2'>Edit</button>
                                    <button onClick={()=>props.deleteUser(user.id)} className='btn btn-danger px-4 py-2'>Delete</button>
                                </td>
                                </tr>
            ))):(
                <tr>
                    <td colSpan={8}>No User</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
  )
}

export default UserTable