import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import { Navbar } from 'flowbite-react';

const CustomNavbar = () => {
    let navigate = useNavigate()

    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Link to={'/'} className="flex items-center">
                    <BriefcaseIcon className="h-6 w-6 text-blue-500 mr-3" />
                    <span className="text-blue-500 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kerjo.kuy</span>
                </Link>
                <div className="flex md:order-2">
                    <button type="button" className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {!Cookies.get('token') && <Link to={'/login'}><p className='text-white'>Login</p></Link>}
                        {Cookies.get('token') && <span onClick={
                            () => {
                                Cookies.remove('token')
                                navigate('/login')
                            }
                        }><p className='text-white'>Logout</p></span>}
                    </button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>

                    <li>
                        <Link to={'/'} className="block py-2 pr-4 pl-3 text-blue-500  rounded md:bg-transparent md:hover:text-blue-700  md:p-0 dark:text-white" aria-current="page">Beranda</Link>
                    </li>
                    <li>
                        <Link to={'/job-vacancy'} className="block py-2 pr-4 pl-3 text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Lowongan</Link>
                    </li>
                </Navbar.Collapse>
            </Navbar>


        </>
    );
}

export default CustomNavbar;