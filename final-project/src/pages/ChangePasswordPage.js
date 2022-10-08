import React, { useContext } from 'react';
import CustomFooter from '../component/CustomFooter';
import CustomNavbar from '../component/CustomNavbar';
import CustomSideBar from '../component/CustomSidebar';
import { GlobalContext } from '../context/GlobalContext';

const ChangePasswordPage = () => {

    const {
        passwordInput, handlePasswordInput, handlePasswordSubmit
    } = useContext(GlobalContext)

    return (
        <>
            <CustomNavbar />
            <div className='flex'>
                <div className='flex-none mr-10'>
                    <CustomSideBar />
                </div>
                <div className='flex-auto min-h-screen w-64 mr-5'>
                    <form onSubmit={handlePasswordSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Current Password</span>
                                </label>
                                <input onChange={handlePasswordInput} value={passwordInput.current_password} name='current_password' type="password" placeholder="current password" minLength='8' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Password</span>
                                </label>
                                <input onChange={handlePasswordInput} value={passwordInput.new_password} name='new_password' type="password" placeholder="new password" minLength="8" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Confirm Password</span>
                                </label>
                                <input onChange={handlePasswordInput} value={passwordInput.new_confirm_password} name='new_confirm_password' type="password" placeholder="new confirm password" minLength="8" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Submit Change</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <CustomFooter />
        </>
    );
}

export default ChangePasswordPage;