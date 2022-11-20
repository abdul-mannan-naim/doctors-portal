import React, { useState } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init'
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import UseAdmin from '../../hooks/UseAdmin';
import { signOut } from 'firebase/auth';


const RequireAdmin = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    const [admin, loadingAdmin] = UseAdmin(user);

    const location = useLocation()
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth)
    if (loading || loadingAdmin) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        signOut(auth)
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

export default RequireAdmin;