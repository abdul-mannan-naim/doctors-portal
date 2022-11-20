import React, { useState } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init'
import Loading from '../Shared/Loading';
import { toast} from 'react-toastify';


const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth)
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your Email is not verified</h3>
            <h5 className='text-success'>Please verify your email address</h5>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification()
                    toast('sent email');
                }}
            >send Verification Email Again</button>
        </div>
    }

    return children;
};

export default RequireAuth;