import { addDoc, collection } from 'firebase/firestore';
import React, {useState, useEffect, useRef}  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../AuthContext/AuthContext';
import '../../components/main.css'
import { db } from '../../firebase';

export default function CreateAcc() {
    const [tdata, setTdata]  = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [error, setError] = useState('');

    const { createUser } =UserAuth(); 
    const navigate = useNavigate();
    const{googleSignIn, user } = UserAuth(); 
     
    const handleGoogleSignIn = async() => {
     try {
        await googleSignIn()
       } catch (error) {
            setError('Error!')
            console.log(error)
            
        }

    }

    useEffect(() => {
        if( user != null ){
            navigate('/Addfac')
        }
    },[user]);
    
    // confirm password
    const validatePassword = (e) => {
        let isValid = true
        if (password !== '' && cpassword !== ''){
          if (password !== cpassword) {
            isValid = false
            setError('Password doesnt match')
            console.log(e.message);
          } 
        }
        return isValid
      }

    //   create umser
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('')
        if(validatePassword()){
            try{
                await createUser(email, password);
                setError(e.message)
                navigate('/home')
                setTdata(e.target.value);
                addDoc(collection(db, "users/uid/teachers"))
                
            }
            catch (e){
                if(e.code === 'auth/invalid-email'){
                    setError('Enter Correct Email');
                }
                if(e.code === 'auth/weak-password'){
                    setError('Password Should be 6 Characters Long');
                }
                if(e.code === 'auth/internal-error'){
                    setError('Enter a password');
                }
                if(e.code === 'auth/email-already-in-use'){
                    setError('User Already Exist! Try Logining In');
                }
            }
        }
    };

   
    
  return (
    <div className="uform">
    <div className="mainform">
        <div className="loginnav">
            <h3>Zeitplan</h3>
            <Link to="/" className='signupbtn'>Login</Link>
        </div>
        <form className='form' onSubmit={handleSubmit} >
            <div className="login">
                <h4 className='title'>Create Account</h4>
                {/* email */}
                <input 
                type={'email'} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Enter Email'/>
                {/* password */}
                <input 
                type={'password'} 
                onChange={(e) => setPassword(e.target.value)}  
                placeholder='Enter Password' />
                {/* Confirm pass */}
                <input 
                type={'password'} 
                onChange={(e) => setCpassword(e.target.value)} 
                placeholder='Confirm Password'/>
                
                {error && <p className='error'>{error}</p>}
                <p className='ortxt'>Or</p>
                <button  className='gbtn' onClick={handleGoogleSignIn}>
                <img className='gimg' src='https://res.cloudinary.com/dxi9wcchp/image/upload/v1659124383/google_1_mfobki.png'/>
                    Signup using Google</button>
                <button className='loginbtn'>Signup</button>
                <a className='ca'>Already user? <Link to='/'>Login</Link></a>
            </div>
        </form>
    </div>
</div>
  )
}
