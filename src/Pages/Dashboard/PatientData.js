import React from 'react';

const PatientData = (props) => {
    const {patientName,treatment,slot,phone,patient,date} = props.patient
    
    return (
       
            <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            
            <div>
              <div class="font-bold">{patientName}</div>
              <div class="text-sm opacity-50">{patient}</div>
              <div class="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {treatment}
          <br/>
          
        </td>
        <td>{slot}</td>
        <th>
        <td>
          {date}
          <br/>
          
        </td>
        </th>
      </tr>
        
    );
};

export default PatientData;