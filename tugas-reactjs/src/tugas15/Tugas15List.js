import React, { useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const Tugas15List = () => {

    const { dataApi, getDataFromApi,
        fetchStatus, setFetchStatus,
        handleIndexScore,

        handleDelete,
        handleEdit } = useContext(GlobalContext);

    useEffect(
        () => {
            if (fetchStatus === true) {
                axios.get('http://backendexample.sanbercloud.com/api/student-scores')
                    .then(
                        (res) => {
                            getDataFromApi([...res.data])
                        }
                    ).catch(
                        (error) => {
                            console.log(error)
                        }
                    )

                setFetchStatus(false)
            }
        }, [fetchStatus, getDataFromApi, setFetchStatus]
    );

    return (
        <>
            <div className='flex justify-center'>
                <div className="overflow-x-auto shadow-md sm:rounded-lg mb-8 mt-8 w-9/12">
                    <button
                        type="button"
                        className="mb-5 focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                        <Link to="/create">Create</Link>
                    </button>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-white uppercase bg-purple-500 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    No
                                </th>
                                <th scope="col" className="py-3">
                                    Nama
                                </th>
                                <th scope="col" className="py-3">
                                    Mata Kuliah
                                </th>
                                <th scope="col" className="py-3">
                                    Nilai
                                </th>
                                <th scope="col" className="py-3">
                                    Index Nilai
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
                                                {res.name}
                                            </td>
                                            <td className="py-4">
                                                {res.course}
                                            </td>
                                            <td className="py-4">
                                                {res.score}
                                            </td>
                                            <td className="py-4">
                                                {handleIndexScore(res.score)}
                                            </td>
                                            <td className="py-4">
                                                <button onClick={handleEdit} value={res.id} type="button" className="focus:outline-none text-white bg-yellow-300 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
                                                <button onClick={handleDelete} value={res.id} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })}

                    </table>
                </div>
            </div>

        </>
    );
}

export default Tugas15List;