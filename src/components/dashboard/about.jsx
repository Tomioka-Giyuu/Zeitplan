import React from 'react'
import '../../components/main.css'
import { UserAuth } from '../../AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function About() {
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
                <li className='cuser'><Link to={'/Changepass'}><img src="https://www.kindpng.com/picc/m/171-1712282_profile-icon-png-profile-icon-vector-png-transparent.png"/></Link></li>
            </ul>
        </div>
        <h4 className='abt'>About The Project</h4>
        <p>Creating Timetable has always been a headache for teachers and administrators, normally it takes hours to create a clashless timetable and it is a tiring process. Most institutions have been facing this slow and tiring process of scheduling and planning lectures.  The main objective of the project is to generate time tables quickly and without any errors. The future scope focuses on performance and scalability, with time institutions around the world will start adopting the software to make quick timetables. Soon it will be available for not just colleges but also primary schools and classes. The technology will keep developing with new features and better algorithms that can generate error free outputs.</p>
        </div>
    </div>
  )
}
