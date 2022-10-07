import React, { useEffect, useState } from 'react';
import PatientData from './PatientData';

const PatientList = () => {
    const [patient,setPatient] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bookings',{
            method:"GET",
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
        })
        .then(res => res.json())
        .then(data => setPatient(data))
    },[])

    console.log(patient)
    return (
        <div class="overflow-x-auto w-full">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Patient Name</th>
        <th>Problem</th>
        <th>Date</th>
        <th>Time</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      {
        patient.map(patient  => <PatientData patient={patient} key={patient._id} > </PatientData>)
      }
     
      
      
      
    </tbody>
    
    <tfoot>
    <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Patient Name</th>
        <th>Problem</th>
        <th>Date</th>
        <th>Time</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    );
};

export default PatientList;