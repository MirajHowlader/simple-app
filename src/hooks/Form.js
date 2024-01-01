import React, { useState } from 'react'

import './style.css'
function Form() {
   
    const [user, setUser] = useState({name:'', email:'', password:'', address:''});
    const {name,email,password, address} = user;

    const handleChange = (e) => {
       setUser({...user, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form is submitted');
    }


  return (
    <div>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <div>
          <label>Name:</label>
           <input type='text' name='name' value={name} required onChange={handleChange}/>
          </div>

         <div>
         <label>Email:</label>
           <input type='email' name='email' value={email} required  onChange={handleChange}/>
         </div>

         <div>
         <label>Password:</label>
           <input type='password' name='password' value={password} required  onChange={handleChange}/>
         </div>

         <div>
         <label>Address:</label>
           <input type='text' name='address' value={address} required  onChange={handleChange}/>
         </div>

         <div>
            <button type='submit'>Register</button>
         </div>
        </form>
    </div>
  )
}

export default Form