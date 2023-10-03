import React, { useEffect } from 'react'
import { useState } from 'react';

function Edituser(props) {
    const [user, setuser] = useState(props.currentuser)

    useEffect(()=>{
        setuser(props.currentuser)
    },[props])

    const handleInputChange=(e)=>{
        const {name,value}=e.target

        setuser({...user,[name]:value})
    }
  return (
    <div className='border rounded p-5'>
    <form className='from' onSubmit={
        e=>{
            e.preventDefault();
            if(!user.date||!user.place||!user.vecno||!user.invno||!user.amnt) {alert("Enter the values"); return;} 
            props.updateuser(user.id,user)
        }
    }>
        <div className='row'>
            {/* <input type='number' onChange={handleInputChange} name='id' value={user.id}/> */}
        <div className='col'>
        <input type="date" placeholder='Date' className=' my-2' onChange={handleInputChange} name='date' value={user.date}/>
        </div>
        <div className="col">
        {/* <select className=" my-2" onChange={handleInputChange} name='vecno' value={user.vecno}>
        <option selected>Select Vechile Number</option>
            <option value={"TN 55 Z 1976"}>TN 55 Z 1976</option>
            <option value={"TN 19 AC 3836"}>TN 19 AC 3836</option>
        </select> */}
        <input type="text" placeholder='Vechile No' className='my-2' onChange={handleInputChange}  name="vecno" value={user.vecno} />
        </div>
        </div>
        <div className="row">
            <div className="col">
        {/* <select className="my-2" aria-label="Default select example" onChange={handleInputChange} name='place' value={user.place}>
            <option selected>Destination</option>
            <option value="Maadhva Perumal">Maadhva Perumal</option>
            <option value="Addison Paint">Addison Paint</option>
            <option value="Nippon Paint">Nippon Paint</option>
        </select> */}
        <input type="text" placeholder='Delivery Area' className='my-2' onChange={handleInputChange}  name="place" value={user.place} />
        </div>
        <div className="col">
        <input type="text" placeholder='Invoice No' className='my-2' onChange={handleInputChange} name='invno' value={user.invno}/>
        </div>
        </div>
        <div className="row">
        <div className="col">
            <input type="number" placeholder='Amount' className='my-2' onChange={handleInputChange} name='amnt' value={user.amnt}/>
            </div>
        <div className="col">
            {/* <input type="text" placeholder='Remark' className='my-2' onChange={handleInputChange} name='remark' value={user.remark}/> */}
            </div>
            </div>
        <button className='btn btn-success mt-3 mx-2'>Update</button>
        <button className='btn btn-danger mt-3' onClick={()=>{props.setediting(false)}}>Cancel</button>
    </form>
</div>

  )
}

export default Edituser