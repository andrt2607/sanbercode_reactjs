import React, { useEffect, useContext , useState} from 'react';
import CustomFooter from '../component/CustomFooter';
import CustomNavbar from '../component/CustomNavbar';
import CustomSideBar from '../component/CustomSidebar';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const DataFormPage = () => {

    const [currentId, setCurrentId] = useState(-1);
    const [fetchStatus, setFetchStatus] = useState(true)

    let { IdData } = useParams()

    useEffect(
        () => {
            if (IdData !== undefined) {
                axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
                    .then(
                        (res) => {
                            console.log(JSON.stringify(res.data))
                            setInput(
                                {
                                    title: res.data.title,
                                    job_description: res.data.job_description,
                                    job_qualification: res.data.job_qualification,
                                    job_type: res.data.job_type,
                                    job_tenure: res.data.job_tenure,
                                    job_status: res.data.job_status,
                                    company_name: res.data.company_name,
                                    company_image_url: res.data.company_image_url,
                                    company_city: res.data.company_city,
                                    salary_min: res.data.salary_min,
                                    salary_max: res.data.salary_max,
                                }
                            )
                            setCurrentId(res.data.id)
                        }
                    ).catch(
                        (error) => {
                            console.log(error)
                        }
                    )
            }
        }, []
    )

    const [input, setInput] = useState(
        {
            title: '',
            job_description: '',
            job_qualification: '',
            job_type: '',
            job_tenure: '',
            job_status: 0,
            company_name: '',
            company_image_url: '',
            company_city: '',
            salary_min: 0,
            salary_max: 0,
        }
    )

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === 'title') {
            setInput({ ...input, title: value })
        } else if (name === 'job_description') {
            setInput({ ...input, job_description: value })
        } else if (name === 'job_qualification') {
            setInput({ ...input, job_qualification: value })
        } else if (name === 'job_type') {
            setInput({ ...input, job_type: value })
        } else if (name === 'job_tenure') {
            setInput({ ...input, job_tenure: value })
        } else if (name === 'job_status') {
            setInput({ ...input, job_status: value })
        } else if (name === 'company_name') {
            setInput({ ...input, company_name: value })
        } else if (name === 'company_image_url') {
            setInput({ ...input, company_image_url: value })
        } else if (name === 'company_city') {
            setInput({ ...input, company_city: value })
        } else if (name === 'salary_min') {
            setInput({ ...input, salary_min: value })
        } else if (name === 'salary_max') {
            setInput({ ...input, salary_max: value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (currentId === -1) {
            axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', input, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
                .then(
                    (res) => {
                        console.log(JSON.stringify(res.data))
                        setFetchStatus(true)
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )

            setInput(
                {
                    title: '',
                    job_description: '',
                    job_qualification: '',
                    job_type: '',
                    job_tenure: '',
                    job_status: 0,
                    company_name: '',
                    company_image_url: '',
                    company_city: '',
                    salary_min: 0,
                    salary_max: 0,
                }
            )
        } else {
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, input, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
                .then(
                    (res) => {
                        console.log(JSON.stringify(res.data))
                        setFetchStatus(true)
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )

            setInput(
                {
                    title: '',
                    job_description: '',
                    job_qualification: '',
                    job_type: '',
                    job_tenure: '',
                    job_status: 0,
                    company_name: '',
                    company_image_url: '',
                    company_city: '',
                    salary_min: 0,
                    salary_max: 0,
                }
            )
        }
    }

    return (
        <>
            <CustomNavbar />
            <div className='flex'>
                <div className='flex-none mr-10'>
                    <CustomSideBar />
                </div>
                <div className='flex-auto w-64 min-h-screen mt-10 mr-5'>
                    <form onSubmit={handleSubmit}>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={handleInput} value={input.title} type="text" name="title" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={handleInput} value={input.job_description} type="text" name="job_description" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={handleInput} value={input.job_qualification} type="text" name="job_qualification" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Qualification</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={handleInput} value={input.job_type} type="text" name="job_type" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={handleInput} value={input.job_status} type="text" name="job_status" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input onChange={handleInput} value={input.job_tenure} type="text" name="job_tenure" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tenure</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input onChange={handleInput} value={input.company_city} type="text" name="company_city" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company City</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input onChange={handleInput} value={input.company_name} type="text" name="company_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input onChange={handleInput} value={input.company_image_url} type="text" name="company_image_url" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Image URL</label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input onChange={handleInput} value={input.salary_min} type="number" name="salary_min" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary Min</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input onChange={handleInput} value={input.salary_max} type="number" name="salary_max" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary Max</label>
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>


                </div>
            </div>
            <CustomFooter />
        </>
    );
}

export default DataFormPage;