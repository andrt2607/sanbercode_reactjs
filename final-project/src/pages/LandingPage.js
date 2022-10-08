import React, {useEffect} from 'react'
import CustomFooter from '../component/CustomFooter';
import CustomHero from '../component/CustomHero';
import CustomNavbar from '../component/CustomNavbar';
import Cookies from 'js-cookie';

const LandingPage = () => {

    return(
        <>
            <CustomNavbar/>
            <CustomHero/>
            <CustomFooter/>
        </>
    );
}

export default LandingPage;