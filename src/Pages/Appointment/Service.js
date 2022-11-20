import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card text-center  lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className=" text-xl font-bold text-accent">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ? <span> {slots[0]} </span>
                                : <span className='text-red-500'>Try another date</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? "spaces" : 'space'} Available</p>
                    <div className="card-actions justify-center">

                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            htmlFor="booking-modal" className="btn btn-sm btn-accent uppercase bg-gradient-to-r from-success to-accent">
                            Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;