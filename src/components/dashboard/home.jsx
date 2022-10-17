import React from 'react'
import '../../components/main.css'
import { UserAuth } from '../../AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
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
                <li className='cuser'><Link to={'/Changepass'}><img src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"/> </Link></li>
            </ul>
        </div>
        <div className="bcontent">
          <h4>Welcome To Automatic TimeTable Generator</h4>
          <h5>Start By Adding Faculties</h5>
          <Link to={'/Addfac'} className='addfac'>Add Faculties</Link>
        </div>
    </div>   
    </div>
   
  )
}

export default Home