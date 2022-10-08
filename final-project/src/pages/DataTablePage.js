import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CustomFooter from '../component/CustomFooter';
import CustomNavbar from '../component/CustomNavbar';
import CustomSideBar from '../component/CustomSidebar';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const DataTablePage = () => {

    let navigate = useNavigate()
    const [currentId, setCurrentId] = useState(-1);
    const [fetchStatus, setFetchStatus] = useState(true)
    const [dataApi, getDataFromApi] = useState(null)

    useEffect(
        () => {
            if (fetchStatus === true) {
                axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
                    .then(
                        (res) => {
                            console.log('Data Api : ' + res.data.data)
                            getDataFromApi([...res.data.data])
                        }
                    ).catch(
                        (error) => {
                            console.log('Error Get Api' + error)
                        }
                    )
                setFetchStatus(false)
            }
        }, [fetchStatus, getDataFromApi, setFetchStatus]
    )

    const handleEdit = (event) => {
        let IdData = parseInt(event.target.value)

        setCurrentId(IdData)
        navigate(`/dashboard/list-job-vacancy/${IdData}`)
    }

    const handleDelete = (event) => {
        let idData = event.target.value

        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
            .then(
                (res) => {
                    console.log(res)
                    setFetchStatus(true)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    //2
    const [searchInput, setSearchInput] = useState(
        {
            query_search: ''
        }
    )

    //3
    const [filterInput, setFilterInput] = useState(
        {
            filter_job_type: '',
            filter_company_city: '',
            filter_salary_min: '',
        }
    )

    //4
    const handleSearchFilterInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === 'query_search') {
            setSearchInput({ ...searchInput, query_search: value })
        } else if (name === 'filter_job_type') {
            setFilterInput({ ...filterInput, filter_job_type: value })
        } else if (name === 'filter_company_city') {
            setFilterInput({ ...filterInput, filter_company_city: value })
        } else if (name === 'filter_salary_min') {
            setFilterInput({ ...filterInput, filter_salary_min: value })
        }
    }

    //5
    const handleSearch = (event) => {
        event.preventDefault()

        let updatedList = [...dataApi]

        console.log('Query' + searchInput.query_search)

        updatedList = updatedList.filter((item) =>
            item.title.toLowerCase().indexOf(searchInput.query_search.toLowerCase()) !== -1
        )
        getDataFromApi(updatedList)
    }

    //6
    const handleFilter = (event) => {
        event.preventDefault()

        let updatedList = [...dataApi]

        console.log('Filter City : ' + filterInput.filter_job_type)
        console.log('Filter Company : ' + filterInput.filter_company_city)
        console.log('Filter Salary : ' + filterInput.filter_salary_min)

        updatedList = updatedList.filter(obj =>
            obj.job_type.toLowerCase() === filterInput.filter_job_type.toLowerCase() ||
            obj.company_city.toLowerCase() === filterInput.filter_company_city.toLowerCase() ||
            obj.salary_min.toString() === filterInput.filter_salary_min)
        console.log('Hasil Filter : ' + JSON.stringify(updatedList))
        getDataFromApi(updatedList)
    }

    const resetDataSearchFilter = () => {
        setFetchStatus(true)
        setSearchInput(
            {
                query_search: ''
            }
        )
        setFilterInput(
            {
                filter_job_type: '',
                filter_company_city: '',
                filter_salary_min: '',
            }
        )
    }

    return (
        <>
            <CustomNavbar />
            <div className='flex'>
                <div className='flex-none mr-10'>
                    <CustomSideBar />
                </div>
                <div className='flex-auto min-h-screen w-64 mr-5 pb-10'>
                    <div className="overflow-x-auto relative mt-10 ">
                        <form onSubmit={handleSearch}>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-gray-300">Search</label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                                <input onChange={handleSearchFilterInput} value={searchInput.query_search} type="search" name='query_search' className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by nama pekerjaan" required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>

                        <form onSubmit={handleFilter} className='mt-10'>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Job Type</label>
                                <input onChange={handleSearchFilterInput} value={filterInput.filter_job_type} type="text" name='filter_job_type' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Job Type" />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Company City</label>
                                <input onChange={handleSearchFilterInput} value={filterInput.filter_company_city} type="text" name='filter_company_city' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Company City" />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Salary min</label>
                                <input onChange={handleSearchFilterInput} value={filterInput.filter_salary_min} type="text" name='filter_salary_min' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Salary min" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Filter</button>
                                <button onClick={resetDataSearchFilter} type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Reset</button>
                            </div>
                        </form>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 ">
                            <thead className="text-xs text-white uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        No
                                    </th>
                                    <th scope="col" className="py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="py-3">
                                        Desc
                                    </th>
                                    <th scope="col" className="py-3">
                                        Quali
                                    </th>
                                    <th scope="col" className="py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="py-3">
                                        Tenure
                                    </th>
                                    <th scope="col" className="py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="py-3">
                                        CP Name
                                    </th>
                                    <th scope="col" className="py-3">
                                        CP Img URL
                                    </th>
                                    <th scope="col" className="py-3">
                                        CP City
                                    </th>
                                    <th scope="col" className="py-3">
                                        SalaryMin
                                    </th>
                                    <th scope="col" className="py-3">
                                        SalaryMax
                                    </th>
                                    <th scope="col" className="py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            {dataApi != null && dataApi.map((res, index) => {
                                return (
                                    <>
                                        <tbody>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index + 1}
                                                </th>
                                                <td className="py-4">
                                                    <p className='overflow-hidden truncate w-20'>{res.title}</p>
                                                </td>
                                                <td className="py-4">
                                                    <p className='overflow-hidden truncate w-20'>{res.job_description}</p>
                                                </td>
                                                <td className="py-4">
                                                    <p className='overflow-hidden truncate w-20'>{res.job_qualification}</p>
                                                </td>
                                                <td className="py-4">
                                                    {res.job_type}
                                                </td>
                                                <td className="py-4">
                                                    {res.job_tenure}
                                                </td>
                                                <td className="py-4">
                                                    {res.job_status}
                                                </td>
                                                <td className="py-4">
                                                    {res.company_name}
                                                </td>
                                                <td className="py-4">
                                                    <p className='overflow-hidden truncate w-20'>{res.company_image_url}</p>
                                                </td>
                                                <td className="py-4">
                                                    {res.company_city}
                                                </td>
                                                <td className="py-4">
                                                    {res.salary_min}
                                                </td>
                                                <td className="py-4">
                                                    {res.salary_max}
                                                </td>
                                                <td className="py-4">
                                                    <button onClick={handleEdit} value={res.id} type="button" className="focus:outline-none text-white bg-yellow-300 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
                                                    <button onClick={handleDelete} value={res.id} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>
                                )
                            })}

                        </table>
                    </div>

                </div>
            </div>
            <CustomFooter />
        </>
    );
}

export default DataTablePage;