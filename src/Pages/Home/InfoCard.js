import React from 'react';

const InfoCard = ({img,cardTitle,bgClass}) => {
    return (
        <div className={`card lg:card-side bg-secondary shadow-xl ${bgClass} p-2`}>
            <figure ><img src={img} alt="Album"/></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Lorem ipsum dolor sit amet..</p>   
            </div>
        </div>
    );
};

export default InfoCard;