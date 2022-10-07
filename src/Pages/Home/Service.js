import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card glass shadow-xl">
        <figure><img src={service.img} alt="car!"/> </figure>
        <div className="card-body">
          <h2 className="card-title">{service.description}</h2>
          <p>How to park your car at your garage?</p>
          
        </div>
      </div>
    );
};

export default Service;