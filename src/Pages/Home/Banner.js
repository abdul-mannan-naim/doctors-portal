import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl  " />
                <div className='text-white   '>
                    <h1 className="text-5xl font-bold w-2/3 ">Your New Smile Starts Here</h1>
                    <p className="py-6 w-2/4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;