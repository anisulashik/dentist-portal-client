import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
const Services = () => {
    const services = [
        {
            _id:1,
            description:'Fluoride Treatment',
            img:fluoride,
        },{
            _id:2,
            description:'Cavity Protection',
            img:cavity,
        },
        {
            _id:3,
            description:'Teeth Whitening',
            img:whitening,
        }
    ]
    return (
        <div className='my-28'>
            <div className="text-center">
                <h3 className='text-primary text-xl t font-bold'>Our Services </h3>
                <h1 className="text-secondary text-3xl">Services We Provide </h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 my-10' >
                {
                    services.map(service => <Service key = {service._id} service={service} > </Service>)
                }
            </div>
        </div>
    );
};

export default Services;