import React from 'react';

const Review = ({review}) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                  
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsa deleniti error odio id dicta.</p>
                    <div className="flex items-center ">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100             ">
                        <img src={review.img} />
                        
                        </div>
                     </div>
                     <div className='m-5'>
                        <h3>{review.name}</h3>

                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;