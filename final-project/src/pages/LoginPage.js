import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';


const LoginPage = () => {

    const {
        handleLogin, handleLoginInput, loginInput
    } = useContext(GlobalContext)

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Input your data on form to login system</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onChange={handleLoginInput} value={loginInput.email} name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onChange={handleLoginInput} value={loginInput.password} name='password' type="password" placeholder="password" minLength="8" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className="py-3 mx-auto">Don't have account?</p>
                            <label className="label mx-auto">
                                <Link to={'/register'} className="label-text-alt link link-hover">Register Now!</Link>
                            </label>
                            <label className="label mx-auto">
                                <Link to={'/'} className="label-text-alt link link-hover">Back to Home</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;