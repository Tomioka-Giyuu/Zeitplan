import React from 'react'
import '../../components/main.css'
import { UserAuth } from '../../AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

//icons import
import {AiFillDelete} from 'react-icons/ai'
import { Table1, Table2, Table3 } from './table';

export default function Makett() {
  
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


    // logic for table 
    const [game, setGame] = useState()
    const [show, setShow] = useState(false);
      const [tchecked, setTchecked] = useState();
      console.log(tchecked)
    const handleGenerateTT = (gameState) => {
    setGame(gameState)
    }

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

      // generate timetable button onlick 


      // download in excel sheet 
      const[result,setResult]= useState([]);
 
      const getData = ()=>
      {
          fetch('Teachers')
          .then(response => response.json())
          .then(res => setResult( res));
      }
      
      useEffect(() => {
          getData();
      })
      
      // refresh page
      // function refreshPage() {
      //   window.location.reload(false);
      // }
      
      // timetable generation
      const [deta, setDeta] = useState()
      useEffect(() => {
        const fetchData = async () => {
          let list = [];
          try {
            const querySnapshot = await getDoc(collection (doc(db, "Teachers", "year", "TYCS", "BQR2C4yrI2BhKa2EHcsL")));
            querySnapshot.forEach((doc) => {
              list.push({ id: doc.id, ...doc.data() });
            });
            setDeta(list);
            console.log(list);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }
      )
      console.log(deta)

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
        <h4 className='abt'>Create Timetable</h4>
        <div className="selc"> 
          <div className='cdpdown'>  
            <label>Select Course: &nbsp;</label>
              <select className='options' id='courses' onChange={(e) => setCourse(e.target.value)} required>
                <option value="Select Course">Find Course</option>
                <option id='FYCS'>FYCS</option>
                <option id='SYCS'>SYCS</option>
                <option id='TYCS'>TYCS</option>
              </select>   
          </div>
          
          <div className='facselected'>
            <table className='facselectedtable'>
              <thead>
                 <tr> 
                   <th>Teacher Name</th>
                   <th>Subject Name</th>    
                 </tr>
              </thead>
              <tbody>
              {data.map((doc)=>{
                  return(
                      <tr>
                        <td>{doc.teachername}</td>
                        <td>{doc.subjectname}</td>
                      </tr>
                  )
              })}
              </tbody>
            </table>
        </div>        
        </div>
        <span><button id='generatett' onClick={ () => handleGenerateTT(course)} className='sfedd'>Generate Timetable</button></span>
        
        <div className='subtable'>
          
        {
        (() => {
        switch (game) {
          case 'FYCS':
            return <Table2 handleClick={handleGenerateTT} />
          case 'SYCS':
            return <Table3 handleClick={handleGenerateTT} />
          case 'TYCS':
            return <Table1 handleClick={handleGenerateTT} />
          default:
            return null
        }
      })()}
      
        </div>      
        </div>
        <div>        
        </div>
    </div>
  )
}



