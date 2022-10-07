import React, { useEffect, useState } from 'react';
import Doctors from './Doctors';

const About = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/doctors',{
            method:"GET",
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
        })
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    console.log(doctors)
    return (
        <div>
            <div className="doctors_info">

            {
            doctors.map(doctors => <Doctors doctors={doctors} key = {doctors._id} > </Doctors>)
            }

            </div>
        </div>
    );
};

export default About;