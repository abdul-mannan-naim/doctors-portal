import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';


const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, updateError] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user || gUser)

    let signInError;
    const location = useLocation()
    const navigate = useNavigate()
    // const [email, setEmail] =useState('')
    // const passwordRef = useRef('')
    const emailRef = useRef('');
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, navigate, from])

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (loading || gLoading) {
        return <Loading />
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Email Sent')
        }
        else {
            toast('Please Enter your Email')
        }
    }



    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email"
                                    }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <p role="alert" className="label-text-alt text-red-500">{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p role="alert" className="label-text-alt text-red-500">{errors.email.message}</p>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 characters or longer"
                                    }

                                })}
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className="label-text-alt text-red-500">{errors.password.message}</p>}
                            </label>
                        </div>
                        {signInError}
                        <div>

                        </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>

                    <small>  <p>New to Doctors Portal? <Link className='text-accent' to='/signup'>Create New Account </Link> </p></small>
                    <small> <p>Forget Password? <button className='sign-up-link btn btn-link' onClick={resetPassword}  > Reset Password</button></p></small>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-accent">Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;