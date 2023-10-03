import { useState } from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import Adduser from './Adduser';
import Edituser from './tables/Edituser';
import NavBar from './NavBar';

function App() {
  const userdata=[
  ];
  const addusers=(user)=>{
    user.id=users.length+1;
    setusers([...users,user])
  }
  const deleteUser=(id)=>{
    setusers(users.filter((user)=>user.id!==id))
    setediting(false)
  }
  const [users,setusers]=useState(userdata);
  const [editing,setediting]=useState(false)


  const initialFrom={id:null,date:"",vecno:'',place:'',invno:"",amnt:""} 
  const [currentuser,setcurrentuser] =useState(initialFrom)
  const edit=(user)=>{
    setediting(true);
    setcurrentuser({id:user.id,date:user.date,vecno:user.vecno,place:user.place,invno:user.invno,amnt:user.amnt})
  }
  const updateuser=(id,updateuser)=>{
    setediting(false);
    setusers(users.map((user)=>(user.id===id?updateuser:user)))
  }
  return (
    <div id="App">
      <NavBar/>
      <section className='home'>
      <p>Service Provider of a wide range of services which include Online Product Delivery, Hyper Local Delivery, COD Experts, Cash Delivery Services, Domestic Courier Services and Local Courier Services</p>
      </section>
      <section id='delmanage' className='bg-light'>
      <h1> Delivery Managements Details</h1>
      <div className='container mt-5 ' >
        <div>
          {editing?(<div>
            <h2>Upate Invoice</h2>
            <Edituser setediting={setediting} currentuser={currentuser} updateuser={updateuser}/>
          </div>):(<div><h2>Add Invoice</h2>
          <Adduser addusers={addusers}/></div>)
          }
        </div>
        <div>
          <h2>View details</h2>
          <UserTable users={users} deleteUser={deleteUser} edit={edit}/>
          </div>
      </div>
      </section>
      <span className='bg-light py-3 m-0 px-5'>CopyRight &copy; 2023 </span>
    </div>
  );
}

export default App;
