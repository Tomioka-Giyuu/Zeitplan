import React from 'react'
import '../../components/main.css'
import { db } from '../../firebase';
import { collection, getDocs, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


export const Table1 = () => {
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
      function refreshPage() {
        window.location.reload(false);
      }
  return (
    <div>
    <table id='table1' className="stable" border={'2'} cellPadding={'6'}>
    <thead class="thead-dark">
         <th>TYCS</th>
         <th>2.30-4.00</th>
         <th>4.30-6.00</th>
    </thead>
    
    <tbody>
       <tr>
         <td className='days'>Monday</td>
         <td className='subjectprint' id="00">Rajshree D<br/><a>GP</a></td>
         <td id="01">Anjali Ma'am<br/><a>AI</a></td>
       </tr>

       <tr>
         <td className='days'>Tuesday</td>
         <td id="03">Khalil Sir<br/><a>PI</a></td>
         <td id="04">Bhupinder Sir<br/><a>STQA</a></td>
       </tr>

       <tr>
         <td className='days'>Wednesday</td>
         <td id="05">Anjali Ma'am<br/><a>AI</a></td>
         <td id="06">Bhupinder Sir<br/><a>STQA</a></td>
       </tr>

       <tr>
         <td className='days'>Thursday</td>
         <td id="07">Laxmi Maam<br/><a>INS</a></td>
         <td id="08">Manpreet Maam<br/><a>AIOT</a></td>
       </tr>

       <tr>
         <td className='days'>Friday</td>
         <td id="09">Rajshree D<br/><a>GP</a></td>
         <td id="10">Anjali Ma'am<br/><a>AI</a></td>
       </tr>

       <tr>
         <td className='days'>Saturday</td>
         <td id="11">Manpreet Maam<br/><a>AIOT</a></td>
         <td id="12">Khalil Sir<br/><a>PI</a></td>
       </tr>
     </tbody>
     
  </table>

  <div className='makettbtns'> 

    <ReactHTMLTableToExcel
            id="xlsbtn"
            className="saveoffline"
            table="table1"
            filename= {"TYCS Timetable"} 
            sheet="tablexls"
            buttonText="Download Excel Sheet"/>
    <button className="saveoffline" onClick={refreshPage}>
      Generate New Timetable
    </button>
    </div>
    </div>
  )
}

export const Table2 = () => {
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
      function refreshPage() {
        window.location.reload(false);
      }

        
    return (
      <div>
        <table id='table2' className="stable" border={'2'} cellPadding={'6'}>
        <thead class="thead-dark">
             <th>FYCS</th>
             <th>2.30-4.00</th>
             <th>4.30-6.00</th>
        </thead>
        
        <tbody>
           <tr>
             <td className='days'>Monday</td>
             <td className='subjectprint' id="00">Ananya Maam<br/><a>IPP</a></td>
             <td id="01">Anuja Maam<br/><a>SS</a></td>
           </tr>
    
           <tr>
             <td className='days'>Tuesday</td>
             <td id="03">Rajshree Maam<br/><a>LOS</a></td>
             <td id="04">Anuja Maam<br/><a>SS</a></td>
           </tr>
    
           <tr>
             <td className='days'>Wednesday</td>
             <td id="05">Bhupinder Sir<br/><a>OST</a></td>
             <td id="06">Rehana Maam<br/><a>DSA</a></td>
           </tr>
    
           <tr>
             <td className='days'>Thursday</td>
             <td id="07">Ananya Maam<br/><a>IPP</a></td>
             <td id="08">Rajshree Maam<br/><a>LOS</a></td>
           </tr>
    
           <tr>
             <td className='days'>Friday</td>
             <td id="09">Rehana Maam<br/><a>DSA</a></td>
             <td id="10">Rupesh Sir<br/><a>DS</a></td>
           </tr>
    
           <tr>
             <td className='days'>Saturday</td>
             <td id="11">Tahir Sir<br/><a>DM</a></td>
             <td id="12">Rupesh Sir<br/><a>DS</a></td>
           </tr>
         </tbody>
         
      </table>

      <div className='makettbtns'> 

    <ReactHTMLTableToExcel
            id="xlsbtn"
            className="saveoffline"
            table="table2"
            filename= {"FYCS Timetable"} 
            sheet="tablexls"
            buttonText="Download Excel Sheet"/>
    <button className="saveoffline" onClick={refreshPage}>
      Generate New Timetable
    </button>
    </div>
  </div>
      )

}


export const Table3 = () => {
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
      function refreshPage() {
        window.location.reload(false);
      }
        
    return (
      <div>
        <table id='table3' className="stable" border={'2'} cellPadding={'6'}>
        <thead class="thead-dark">
             <th>SYCS</th>
             <th>2.30-4.00</th>
             <th>4.30-6.00</th>
        </thead>
        
        <tbody>
           <tr>
             <td className='days'>Monday</td>
             <td className='subjectprint' id="00">Simran maam<br/><a>DS</a></td>
             <td id="01">Tahir Sir<br/><a>LA</a></td>
           </tr>
    
           <tr>
             <td className='days'>Tuesday</td>
             <td id="03">Laxmi Maam<br/><a>JBAD</a></td>
             <td id="04">Bhupinder Sir<br/><a>GT</a></td>
           </tr>
    
           <tr>
             <td className='days'>Wednesday</td>
             <td id="05">Simran maam<br/><a>DS</a></td>
             <td id="06">Laxmi maam<br/><a>JBAD</a></td>
           </tr>
    
           <tr>
             <td className='days'>Thursday</td>
             <td id="07">Tahir Sir<br/><a>LA</a></td>
             <td id="08">Bhupinder Sir<br/><a>GT</a></td>
           </tr>
    
           <tr>
             <td className='days'>Friday</td>
             <td id="10">Anjali Ma'am<br/><a>WT</a></td>
             <td id="09">Rajshree maam<br/><a>ADC</a></td>
           </tr>
    
           <tr>
             <td className='days'>Saturday</td>
             <td id="11">Rajshree maam<br/><a>ADC</a></td>
             <td id="12">Rehana Maam<br/><a>POS</a></td>
           </tr>
         </tbody>
         
      </table>

      <div className='makettbtns'> 

      <ReactHTMLTableToExcel
              id="xlsbtn"
              className="saveoffline"
              table="table3"
              filename= {"SYCS Timetable"} 
              sheet="tablexls"
              buttonText="Download Excel Sheet"/>
      <button className="saveoffline" onClick={refreshPage}>
        Generate New Timetable
      </button>
      </div>
      </div>
      
      )
}


