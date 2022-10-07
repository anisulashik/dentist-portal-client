import React from 'react';
import quotes from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const review = [
        {
            _id:1,
            name:'Person-1',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, harum',
            img:people1
        },
        {
            _id:2,
            name:'Person-2',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, harum',
            img:people2
        },
        {
            _id:3,
            name:'Person-3',
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, harum',
            img:people3
        },

    ]
    return (
        <section className='my-28 p-5'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold"> Testimonials</h4>
                    <h2 className="text-3xl"> What Our Patient Says</h2>
                </div>
                <div>
                    <img src={quotes} alt="" className='w-24 lg:w-48' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(review => <Review review={review} key = {review._id} > </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;