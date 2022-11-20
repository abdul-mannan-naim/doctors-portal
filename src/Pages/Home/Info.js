import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import phone from '../../assets/icons/phone.svg'
import marker from '../../assets/icons/marker.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening hours" bgClass="bg-gradient-to-r from-accent to-blue-400" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" bgClass="bg-gradient-to-r from-success to-blue-400" img={marker}></InfoCard>
            <InfoCard cardTitle="  Contact-us " bgClass="bg-gradient-to-r from-warning to-blue-400" img={phone}></InfoCard>
        </div>
    );
};

export default Info;