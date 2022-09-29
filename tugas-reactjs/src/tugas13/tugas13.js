import React, { useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Tugas13 = () => {

    const { dataApi, getDataFromApi,
        fetchStatus, setFetchStatus,
        handleIndexScore, input, 
        handleInput,
        handleSubmit,
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
            <div className='mt-5 mx-5 mb-5'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name :</label>
                        <input onChange={handleInput} value={input.name} type="text" name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name..." required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mata Kuliah :</label>
                        <input onChange={handleInput} value={input.course} type="text" name='course' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="mata kuliah..." required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nilai :</label>
                        <input onChange={handleInput} value={input.score} type="text" name='score' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="nilai..." required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Tugas13;