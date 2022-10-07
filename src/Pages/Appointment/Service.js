import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots} = service;
    return (
        <div className="card shadow-xl m-5 text-center">
            <div className="card-body">
                <h2 className="text-xl text-center">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span>: <span className='text-red-500'>No Slot Available</span>
                    }</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                <div className="card-actions justify-center">
                {/* <button 
                onClick={()=>{setTreatment(service)}}
                 disabled={slots.length === 0} 
                 className="btn btn-primary">Book Appointment</button> */}

                <label 
                htmlFor="booking-modal" 
                onClick={()=>setTreatment(service)}
                disabled={slots.length === 0}
                className="btn btn-sm modal-button">Book Appointment</label>


                </div>
            </div>
        </div>
    );
};

export default Service;