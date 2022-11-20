import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
 

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center my-28 p-4 '>
            <div className='flex-1'>
                <img className='mt-[-100px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-10'>              
                    <h3 className='text-xl text-accent font-bold'>Appointment</h3>
                    <h2 className='text-white text-4xl py-3'>Make An Appointment Today</h2>
                    <p className='text-white pb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel laboriosam repudiandae illo quas magnam voluptates explicabo pariatur unde dolorem quo quae neque nemo, doloribus exercitationem deserunt quidem eveniet possimus animi!</p>
                    <PrimaryButton>APPOINTMENT</PrimaryButton>                 
            </div>
        </section>
    );
};

export default MakeAppointment;