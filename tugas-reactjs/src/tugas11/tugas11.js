import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Tugas11 = () => {
    const [dataApi, getDataFromApi] = useState(null);

    useEffect(
        () => {
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
        }, []
    );

    const handleIndexScore = (score) => {
        if(score >= 80){
            return 'A';
        }else if(score >= 70 && score < 80){
            return 'B';
        }else if(score >= 60 && score < 70){
            return 'C';
        }else if(score >= 50 && score < 60){
            return 'D';
        }else if(score < 50){
            return 'E';
        }
    }

    return (
        <>
            <div className='flex justify-center'>
                <div className="overflow-x-auto shadow-md sm:rounded-lg mb-8 w-9/12">
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
                            </tr>
                        </thead>
                        {dataApi != null && dataApi.map((res, index) => {
                            return (
                                <>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row" className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {index+1}
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

export default Tugas11;