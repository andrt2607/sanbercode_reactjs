import Cookies from 'js-cookie';
import React, {useContext, useEffect, useState} from 'react';
import CustomFooter from '../component/CustomFooter';
import CustomNavbar from '../component/CustomNavbar';
import CustomSideBar from '../component/CustomSidebar';
import { GlobalContext } from '../context/GlobalContext';

const ProfilePage = () => {

    const {
        user, setUser
    } = useContext(GlobalContext)

    useEffect(
        () => {
            if(Cookies.get('user') !== undefined){
                setUser(JSON.parse(Cookies.get("user")))
            }
        }, [setUser]
    )

    return (
        <>
            <CustomNavbar />
            <div className='flex'>
                <div className='flex-none mr-10'>
                    <CustomSideBar />
                </div>
                <div className='flex-auto mx-auto w-4/5 min-h-screen mr-5 mt-20 mb-20'>
                        <img className="w-2/4 h-2/4 rounded-lg mx-auto" src={user.image_url} alt="image description" />
                        <p class="text-center text-4xl mt-5 text-white dark:text-white">{user.name}</p>
                        <p class="text-center text-lg mt-5 text-white dark:text-white">{user.email}</p>
                </div>
            </div>
            <CustomFooter />
        </>
    );
}

export default ProfilePage;