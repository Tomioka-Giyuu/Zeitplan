import React, { useState } from 'react'
import '../../components/main.css'
import { UserAuth } from '../../AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import {  addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Addfac() {
      //validate textbox for textonly 
      const [textbox, setTextbox] = useState('')
      const handleinput = (e) => {
        const valinput = e.target.value.replace(/[^a-zA-Z ]/g, 'OnlyText')

        setTextbox(valinput)
      }
      const [texttbox, setTexttbox] = useState('')
      const handleeinput = (e) => {
        const valinput = e.target.value.replace(/[^a-zA-Z ]/g, 'OnlyText')

        setTexttbox(valinput)
      }

      //store in db
      const [data, setData] = useState({})
      const facinput = e => { 
        const id = e.target.id;
        const value = e.target.value;
          setData({...data,[id]:value.split(",")})
      } 
      const setdocument = async (e) => {
        e.preventDefault();
        try { 
          await
          addDoc(collection(db, "Teachers", "year", course), {
            ...data, timestamp: serverTimestamp(),
          });
          alert("Teacher Added Successfully")
          } catch (e){
            console.log(e.message)
          } 
        }

        const routeChange = () => { 
          navigate('/Editfac')
        }

        //logout
        const {logout,user} = UserAuth()
        const navigate = useNavigate()

        
        const handleLogout = async () =>
        {
          try{
            await logout();
            navigate('/');
            console.log('You are logged out')
          }catch (e){
            console.log(e.message)
          }
        }

        const [course, setCourse]= useState("")
        

  return (
    
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
        <form className='innpot' onSubmit={setdocument}>
        <h4 className='abt'>Add Faculties</h4>

        <div className='addfacpagediv'>
          <label>Select Course: &nbsp;</label>
          <select placeholder='Set Course' className='coursedd' id='courses' onChange={(e) => setCourse(e.target.value)} required>
                  <option value="Select Course">Set Course</option>
                  <option id='FYCS'>FYCS</option>
                  <option id='SYCS'>SYCS</option>
                  <option id='TYCS'>TYCS</option>
          </select>
        </div>    
          <div className='inpuut'>

            {/* textboxes */}
            <input  id='teachername' value={textbox} onInput={handleinput} onChange={facinput} required className='tname' type={"text"} placeholder={"Enter Teacher's Name"} />          
            <input  id='subjectname' value={texttbox} onInput={handleeinput} onChange={facinput} required className='tname' type={"text"} placeholder={"Enter Subject"} /> 

          </div>       
          <div className='butun'>
            <button type="submit" id='savefaculty' className='sfedd'>Save Faculty</button>
            <button onClick={routeChange} className='sfedd'>Manage Faculties</button>
          </div>
        </form>
        </div>        
   
  )
}
