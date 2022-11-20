import React from 'react';
import fluoride from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitenign from "../../assets/images/whitening.png"
import treatment from "../../assets/images/treatment.png"
import Service from './Service';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe.",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Fluoride Treatment",
            description: "Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe.",
            img: cavity,
        },
        {
            _id: 3,
            name: "Fluoride Treatment",
            description: "Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe.",
            img: whitenign,
        },

    ]

    return (
        <div className='my-28'>
            <div className='text-center '>
                <h1 className='text-accent text-xl font-bold uppercase'>Our Services</h1>
                <h1 className='text-white text-4xl'> Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-22'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='my-20'>
                <div className="card lg:card-side bg-base-100 shadow-xl ">
                    <figure><img className='h-[300px] w-[500px]' src={treatment} alt="Album" /></figure>
                    <div className="card-body text-center text-white">
                        <h2 className="font-bold text-3xl">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur non accusamus error placeat ullam dolores laboriosam quae alias iure voluptates! </p>
                        <div className="card-actions justify-end">
                            <PrimaryButton>GET STARTS</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;