import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const RegisterPage = () => {

    const {
        handleRegister, handleRegisterInput, registerInput
    } = useContext(GlobalContext)

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Isi data berikut dengan benar untuk membuat akun sistem</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input onChange={handleRegisterInput} value={registerInput.name} name='name'type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input onChange={handleRegisterInput} value={registerInput.image_url} name='image_url' type="text" placeholder="image url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onChange={handleRegisterInput} value={registerInput.email} name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onChange={handleRegisterInput} value={registerInput.password} name='password' type="password" placeholder="password" minLength="8" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className="py-3 mx-auto">Already have account?</p>
                            <label className="label mx-auto">
                                <Link to={'/login'} className="label-text-alt link link-hover">Login</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;