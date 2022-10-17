import React from 'react'
import { UserAuth } from '../../AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const Changepass = () => {

    //logout 
    const {logout,user} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () =>{
      try{
        await logout();
        navigate('/');
        console.log('You are logged out')
      }catch (e){
        console.log(e.message)
      }
    }

    // set new pass
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const {ResetPassword} = UserAuth();
  
    const handleresetpassword = async(e) =>{
      e.preventDefault();
      try{
      await ResetPassword(email);
      console.log(e.message)
      alert('Check Your Email To Reset Your Password')
    }catch(e){
      if(e.code === 'auth/missing-email'){
        setError('Enter A Email!');
        }
        if(e.code === 'auth/user-not-found'){
            setError('User Not Found! Try Signing Up');
            }
            if(e.code === 'auth/invalid-email'){
              setError('Enter A Correct Email');
              }  
    }
  }

  return (
    <div>
        <div className="homemain">
            <div className="nav">
            <h3 className='logoh'>Zeitplan</h3>
                <ul className='navlinks'>
                    <Link to='/home' className='nav-item'>Home</Link>
                    <Link to='/Addfac' className='nav-item'>Add Faculty</Link>
                    <Link to='/makett' className='nav-item'>Make TimeTable</Link>
                    <Link to='/about' className='nav-item'>About</Link>
                    <li className='logout' onClick={handleLogout}>Logout</li>
                    <li className='cuser'><Link to={'/Changepass'}><img src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"/></Link></li>
                </ul>
            </div>

            <div className='userimgsec'>
                <img className='userimg' src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"/>
                <h4>{user && user.email}</h4>
            </div>
            <form className='form'>
                <div className="login">
                    <h4 className='title'>Set New Password</h4>
                    <input required type={'email'} placeholder='Enter email to change password' onChange={(e)=> setEmail(e.target.value)}></input>
                    {error && <p className='error'>{error}</p>}
                    <button className='loginbtn' onClick={handleresetpassword}>Change Password</button>
                </div>
            </form>


        </div>
    </div>
  )
}
