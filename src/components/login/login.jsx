import '../../components/main.css'
import React, {useState}  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../AuthContext/AuthContext';

export const Login = () => {
    const{ signIn } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('')

        try{
            await signIn(email, password)
            setError(e.message)
            navigate('/home')

        }catch (e){
            if(e.code === 'auth/invalid-email'){
                setError('Enter Correct Email');
                }
                if(e.code === 'auth/wrong-password'){
                    setError('Wrong Password');
                    }
                    if(e.code === 'auth/internal-error'){
                        setError('Enter Your Password*');
                        }
                        if(e.code === 'auth/user-not-found'){
                            setError('User Not Found! Try Signing Up*');
                            }          
        }
        handleSubmit.reset()
        
    }
  return (
    <div className="uform">
        <div className="mainform">
            <div className="loginnav">
                <h3>Zeitplan</h3>
                <Link className='signupbtn' to="/signup">Signup</Link>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className="login">
                    <h4 className='title'>Welcome Back</h4>
                    <input type={'email'} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'></input>
                    <input type={'password'} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'></input>
                    {error && <p className='error'>{error}</p>}
                    <a className='ca'> <Link to='/Resetp'>Forgot Password?</Link></a>
                    <button className='loginbtn'>Login</button>
                    <a className='ca'>New User? <Link to='/signup'>Create Account</Link></a>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Login