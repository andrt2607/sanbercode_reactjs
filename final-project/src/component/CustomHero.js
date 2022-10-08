import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const CustomHero = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mx-auto justify-center">
                        <h1 className="mb-5 text-5xl font-bold pt-20">Kerjo.kuy</h1>
                        <p className="mb-5">The simplest way to career opportunities starts here</p>
                        <button type="button" class="text-gray-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            {Cookies.get('token') && <Link to={'/dashboard'} className='text-gray-300'>Go to Dashboard</Link>}
                            {!Cookies.get('token') && <Link to={'/login'} className='text-gray-300'>Login</Link>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomHero;