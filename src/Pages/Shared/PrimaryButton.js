import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-success to-accent">{children}</button>
    );
};

export default PrimaryButton;