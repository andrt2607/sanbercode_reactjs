import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';


const ManageData = () => {

    const {
        dataApi, getDataFromApi,
                input,
                fetchStatus, setFetchStatus,
                handleInput, handleEdit,
                handleDelete, handleSubmit
     } = useContext(GlobalContext);

    useEffect(
        () => {
            if (fetchStatus === true) {
                axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
                    .then(
                        (res) => {
                            console.log('Data Api : ' + res.data)
                            getDataFromApi([...res.data])
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

    

    return (
        <>
            <div className='flex justify-center'>
                <div className="overflow-x-auto shadow-md sm:rounded-lg mb-8 mt-8 w-10/12">
                    <div className="container mx-auto mt-10">
                        <h1 className="text-xl font-bold mx-5">Manage Data</h1>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
                        <thead className="text-xs text-white uppercase bg-purple-500 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    No
                                </th>
                                <th scope="col" className="py-3">
                                    Nama
                                </th>
                                <th scope="col" className="py-3">
                                    Kategori
                                </th>
                                <th scope="col" className="py-3">
                                    Description
                                </th>
                                <th scope="col" className="py-3">
                                    Price
                                </th>
                                <th scope="col" className="py-3">
                                    Rating
                                </th>
                                <th scope="col" className="py-3">
                                    Release Year
                                </th>
                                <th scope="col" className="py-3">
                                    Size
                                </th>
                                <th scope="col" className="py-3">
                                    is_android_app
                                </th>
                                <th scope="col" className="py-3">
                                    is_ios_app
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
                                                {res.category}
                                            </td>
                                            <td className="py-4">
                                                <p className='overflow-hidden truncate w-20'>{res.description}</p>
                                            </td>
                                            <td className="py-4">
                                                {res.price}
                                            </td>
                                            <td className="py-4">
                                                {res.rating}
                                            </td>
                                            <td className="py-4">
                                                {res.release_year}
                                            </td>
                                            <td className="py-4">
                                                {res.size}
                                            </td>
                                            <td className="py-4">
                                                {res.is_android_app}
                                            </td>
                                            <td className="py-4">
                                                {res.is_ios_app}
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
                    <div className='mt-5 mx-5 mb-5'>
                        <form onSubmit={handleSubmit}>
                            <div className="container mx-auto mt-10">
                                <h1 className="text-xl font-bold ">Manage Data</h1>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 mx-auto">
                                Gambar Data Game
                            </p>
                            <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
                                <input onChange={handleInput} value={input.image_url} type="text" name='image_url' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 mx-auto">
                                Data Game
                            </p>
                            <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name </label>
                                <input onChange={handleInput} value={input.name} type="text" name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category </label>
                                <input onChange={handleInput} value={input.category} type="text" name='category' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description </label>
                                <input onChange={handleInput} value={input.description} type="text" name='description' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price </label>
                                <input onChange={handleInput} value={input.price} type="text" name='price' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rating</label>
                                <input onChange={handleInput} value={input.rating} type="number" name='rating'  min="0" max="5" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Release Year </label>
                                <input onChange={handleInput} value={input.release_year} type="number" name='release_year' min="2007" max="2021" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Size </label>
                                <input onChange={handleInput} value={input.size} type="text" name='size' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>

                            <p className="text-gray-500 dark:text-gray-400 mx-auto">
                                Jenis Perangkat
                            </p>
                            <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Android ?</label>
                                <input onChange={handleInput} value={input.is_android_app} type="text" name='is_android_app' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">IOS ?</label>
                                <input onChange={handleInput} value={input.is_ios_app} type="text" name='is_ios_app' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div>



        </>
    );
}

export default ManageData;