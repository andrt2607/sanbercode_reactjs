import React, {useEffect} from 'react';
import CustomFooter from '../component/CustomFooter';
import CustomNavbar from '../component/CustomNavbar';
import CustomSideBar from '../component/CustomSidebar';
import Cookies from 'js-cookie';

const DashboardPage = () => {

    return (
        <>
            <CustomNavbar />
            <div className='flex'>
                <div className='flex-none mr-10'>
                    <CustomSideBar />
                </div>
                <div className='flex-auto w-64 min-h-screen mr-5'>
                    <p className="text-green-500 mt-10">Welcome to Dashboard Page</p>
                </div>
            </div>
            <CustomFooter />
        </>
    );
}

export default DashboardPage;