import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const reviews = [
    {
        _id: 1,
        name: "Winson Herry",
        location:"California",
        review: "We're npm, Inc., the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.",
        img: people1,
    },
    {
        _id: 2,
        name: "Winson Herry",
        location:"California",
        review: "We're npm, Inc., the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.",
        img: people2,
    },
    {
        _id: 3,
        name: "Winson Herry",
        location:"California",
        review: "We're npm, Inc., the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.",
        img: people3,
    },
]


const Testimonials = () => {
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-accent font-bold">Testimonials</h4>
                    <h2 className="text-3xl text-white">What Our Patients say</h2>

                </div>
                <div>
                    <img className='lg:w-[190px] w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                 {
                    reviews.map(review=><Review 
                    key={review._id}
                    review={review}
                    ></Review>)
                 }
            </div>
        </section>
    );
};

export default Testimonials;