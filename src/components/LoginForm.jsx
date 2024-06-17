import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  
  return (
    <div>
      <h2 className=' text-2xl font-bold'>Enter your UserID and Password</h2>
      <form action="">
        <div className=' mt-4'>
            <label className=' text-lg font-semibold' htmlFor="UserID">UserID <span className=' text-lg text-red-500'>*</span> </label><br />
            <input className=' border-2 w-[28rem] px-4 py-2' type="text" name='UserID' placeholder='Enter Your UserID'/>
        </div>
        <div className=' mt-4'>
            <label className=' text-lg font-semibold' htmlFor="Password">Password <span className=' text-lg text-red-500'>*</span> </label><br />
            <input className=' border-2 w-[28rem] px-4 py-2' type="password" name='Password' placeholder='Enter Your Password'/>
        </div>
        <button className=' bg-blue-600 hover:bg-blue-700 hover:text-white duration-150 px-3 py-2 rounded-md w-[7rem] text-gray-200 mt-7' type='submit' onClick={() => navigate("/login")}>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
