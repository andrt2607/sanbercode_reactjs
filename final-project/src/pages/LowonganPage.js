import React, { useEffect, useState } from 'react'
import CustomFooter from '../component/CustomFooter';
import CustomNavbar from '../component/CustomNavbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LowonganPage = () => {

    let navigate = useNavigate()
    const [fetchStatus, setFetchStatus] = useState(true)
    //1
    const [dataApi, getDataFromApi] = useState(null)

    //2
    const [searchInput, setSearchInput] = useState(
        {
            query_search: ''
        }
    )

    //3
    const [filterInput, setFilterInput] = useState(
        {
            company_city: '',
            company_name: '',
            salary_min: '',
        }
    )

    //4
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === 'query_search') {
            setSearchInput({ ...searchInput, query_search: value })
        } else if (name === 'filter_city') {
            setFilterInput({ ...filterInput, company_city: value })
        } else if (name === 'filter_company') {
            setFilterInput({ ...filterInput, company_name: value })
        } else if (name === 'filter_salary') {
            setFilterInput({ ...filterInput, salary_min: value })
        }
    }

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
        }, [fetchStatus]
    )

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

        console.log('Filter City : ' + filterInput.company_city)
        console.log('Filter Company : ' + filterInput.company_name)
        console.log('Filter Salary : ' + filterInput.salary_min)

        updatedList = updatedList.filter(obj =>
            obj.company_city.toLowerCase() === filterInput.company_city.toLowerCase() ||
            obj.company_name.toLowerCase() === filterInput.company_name.toLowerCase() ||
            obj.salary_min.toString() === filterInput.salary_min)

        console.log('Hasil Filter : ' + JSON.stringify(updatedList))
        getDataFromApi(updatedList)
    }

    const convertIDR = (num) => {
        let number_string = num.toString()
        let sisa = number_string.length % 3
        let rupiah = number_string.substr(0, sisa)
        let ribuan = number_string.substr(sisa).match(/\d{3}/g)

        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        return 'Rp ' + rupiah
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
                company_city: '',
                company_name: '',
                salary_min: '',
            }
        )
    }

    const handleDetail = (event) => {
        let idData = parseInt(event.target.value)

        navigate(`/job-vacancy/${idData}`)
    }

    return (
        <>
            <CustomNavbar />
            <div className='mx-auto w-9/12 min-h-screen mt-20'>
                <form onSubmit={handleSearch}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input onChange={handleInput} value={searchInput.query_search} type="search" name='query_search' className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by nama pekerjaan" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>

                <form onSubmit={handleFilter} className='mt-10'>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Kota Asal</label>
                        <input onChange={handleInput} value={filterInput.filter_city} type="text" name='filter_city' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Kota Asal" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Perusahaan</label>
                        <input onChange={handleInput} value={filterInput.filter_company} type="text" name='filter_company' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Perusahaan" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Salary min</label>
                        <input onChange={handleInput} value={filterInput.filter_salary} type="text" name='filter_salary' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Salary min" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Filter</button>
                        <button onClick={resetDataSearchFilter} type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Reset</button>
                    </div>
                </form>
            </div>

            <div className="container mx-auto grid grid-cols-3 gap-5 mb-20">
                {dataApi != null && dataApi.map((res, index) => {
                    return (
                        <>
                            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg w-9/12 h-64 mx-auto" src={res.company_image_url} alt="" />
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{res.title}</h5>
                                    <p className="overflow-hidden text-ellipsis h-7 mb-3 font-normal text-gray-700 dark:text-gray-400">{res.job_description}</p>
                                    <div className="grid md:grid-cols-2">
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Company : {res.company_name}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location : {res.company_city}</p>
                                    </div>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{convertIDR(res.salary_min)} - {convertIDR(res.salary_max)}</p>
                                    <button onClick={handleDetail} value={res.id} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Details
                                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </button>
                                </div>
                            </div>



                        </>
                    )
                })}
            </div>
            <CustomFooter />
        </>
    );
}

export default LowonganPage;