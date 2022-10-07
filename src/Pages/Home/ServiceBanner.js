import React from 'react';
import treatment from '../../assets/images/treatment.png';

const ServiceBanner = () => {

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                
                <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat, omnis ipsam obcaecati et error debitis quibusdam quasi sunt perferendis cum id velit mollitia laborum molestias doloribus inventore accusantium ipsa. Iure sit quae quidem nisi illo corrupti commodi culpa cupiditate voluptas reprehenderit beatae quibusdam quo, facilis cum excepturi natus error.</p>

                <button className="btn btn-primary">Get Started</button>
                </div>
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default ServiceBanner;