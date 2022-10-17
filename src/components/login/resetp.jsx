import React, { useState} from 'react'
import { UserAuth } from '../../AuthContext/AuthContext';
import {Link} from 'react-router-dom';
import '../../components/main.css'

export default function Resetp() {
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
    <div className="uform">
        <div className="mainform">
            <div className="loginnav">
                <h3>Zeitplan</h3>
                <Link className='signupbtn' to="/signup">Signup</Link>
            </div>
            <form className='form' >
                <div className="login">
                    <h4 className='title'>Forgot Password</h4>
                    <input type={'email'} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required></input>
                    {error && <p className='error'>{error}</p>}
                    <button onClick={handleresetpassword} className='loginbtn'>Get Link</button>
                    <a className='ca'> <Link to='/'> Back To Login</Link></a>
                </div>
            </form>
        </div>
    </div>
  )
}
