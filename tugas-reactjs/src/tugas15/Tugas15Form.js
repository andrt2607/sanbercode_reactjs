import React, { useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';

const Tugas15Form = () => {

    let { IdData } = useParams()

    const { input, setInput,
        handleInput,
        handleSubmit,
    } = useContext(GlobalContext);

    useEffect(
        () => {
            if (IdData !== undefined) {
                axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${IdData}`)
                    .then(
                        (res) => {
                            console.log('Get Edit : ' + res)
                            let data = res.data
                            setInput(
                                {
                                    name: data.name,
                                    course: data.course,
                                    score: data.score
                                }
                            )
                        }
                    )
            }
        }
        , [IdData, setInput]
    );

    return (
        <>
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

export default Tugas15Form;