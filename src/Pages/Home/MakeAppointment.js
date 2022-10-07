import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import MainButton from '../Shared/MainButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`,
            marginTop:'-20px',
        }} className='flex p-5'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-170px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5 my-5'>
                <h3 className='text-xl text-white my-5'> Appointment</h3>
                <h2 className='text-3xl text-primary my-5'>Make Appointment Today</h2>
                <p className='text-white my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat atque quod tenetur rem impedit neque voluptas doloribus dolorem officia libero similique molestias facilis sed expedita repellendus omnis eaque, minus ipsa dolorum incidunt obcaecati et pariatur earum tempore. Repellat, eum neque.</p>
               <MainButton> </MainButton>
            </div>
        </section>
    );
};

export default MakeAppointment;