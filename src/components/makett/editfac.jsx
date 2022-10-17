import React from 'react'
import '../../components/main.css'
import { UserAuth } from '../../AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { collection, doc, getDocs, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';

//icons import
import {AiFillDelete} from 'react-icons/ai'

export default function Editfac() {

  // to show data in table acc to dropdown
  const [data, setData] = useState([]);
  const [course, setCourse]= useState("fycs")
  console.log(course)
  useEffect(() => {
    let activeCollectionPath = "Teachers/year/" + course;
    let activeCollection = collection(db, activeCollectionPath)

     const transformDocs= (snapShot) => {
        return snapShot.map(doc => ({ id: doc.id, ...doc.data() })) 
     }

     getDocs(activeCollection).then((docs) => {
         setData(transformDocs(docs))
     })
     const unsub = onSnapshot(
       activeCollection,
       (snapShot) => {
         setData(transformDocs(snapShot.docs))
       },
       (error) => {
         console.log(error);
       }
     );
 
     return () => {
       unsub();
     };
   },[course])
    console.log(data);


   //log out 
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

    // delete a faculty 
    const handleDelete = async (id) => {
      try {
      await deleteDoc(doc(db, "Teachers/year/" + course, id));
      setData(data.filter((item) => item.id !== id));
      } catch (e) {
        console.log(e);
      }
    };

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
        <h4 className='abt'>Manage Faculties</h4>
        <div className='ddowncourse'>  
          <label>Select Course: &nbsp;</label>
          <select className='coursedd' id='courses' onChange={(e) => setCourse(e.target.value)} required>
                  <option value="Select Course">Find Course</option>
                  <option value="FYCS">FYCS</option>
                  <option value="SYCS">SYCS</option>
                  <option value="TYCS">TYCS</option>
          </select>
        </div>
        <div className='facdetails'>
          <table className='factable' border={'2'} cellPadding={'6'}>
            <thead>
               <tr> 
                 <th>Teaher Name</th>
                 <th>Subject Name</th>
                 <th>Delete</th>    
               </tr>
             </thead>
             <tbody>
                {data.map((doc)=>{
                  return(
                    <tr>
                      <td>{doc.teachername}</td>
                      <td>{doc.subjectname}</td>
                      <td>
                        <button className='delbtn' onClick={() => handleDelete(doc.id)}>
                          <AiFillDelete size={25} />
                        </button>
                      </td>
                    </tr>
                    )
                })}
            </tbody>
          </table>
        </div>
        </div>
  )
}
