import React, { useState } from 'react';
import { format } from 'date-fns';
import { useEffect } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({date,setDate}) => {
    // const [services,setServices] = useState([])
    const [treatment, setTreatment] =  useState(null);

    const formattedDate = format(date,'PP')
    const {data: services, isLoading, refetch} = useQuery(['available',formattedDate], ()=>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if(isLoading){
        return <Loading> </Loading>
    }
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json()
    //     .then(data => setServices(data)))
    // },[formattedDate])
    // console.log(services)
    return (
        <div>
            <h4 className='text-xl text-primary text-center'>You have selected {format(date, 'PP')}</h4>
            <div className='grid grid-cols-3 p-5 '>
                {
                    services?.map(service => <Service 
                        key={services._id}
                        service={service}
                        setTreatment={setTreatment}
                        
                        > </Service>)
                }
            </div>
            {treatment && <BookingModal 
              date={date} 
              treatment={treatment}
              setTreatment={setTreatment}
              refetch={refetch}
              > </BookingModal>}
        </div>
    );
};

export default AvailableAppointment;