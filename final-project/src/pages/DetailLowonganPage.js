import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CustomFooter from '../component/CustomFooter';
import CustomHero from '../component/CustomHero';
import CustomNavbar from '../component/CustomNavbar';

const DetailLowonganPage = () => {

    const { IdData } = useParams()

    const [detailDataApi, setDetailDataFromApi] = useState(
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

    useEffect(
        () => {
            if (IdData !== undefined) {
                axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
                    .then(
                        (res) => {
                            setDetailDataFromApi(
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
                        }
                    )
            }
        }, [IdData]
    )

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

    return (
        <>
            <CustomNavbar />
            <div className='mx-auto w-4/5 min-h-screen mt-20 mb-20'>
                <img className="w-2/4 h-2/4 rounded-lg mx-auto" src={detailDataApi.company_image_url} alt="image description" />
                <p class="text-4xl mt-5 text-white dark:text-white">{detailDataApi.title}</p>
                <p class="text-justify text-lg mt-5 text-white dark:text-white">{detailDataApi.job_description}</p>
                <p class="text-lg mt-5 text-white dark:text-white">Requirement : {detailDataApi.job_qualification}</p>
                <p class="text-lg mt-5 text-white dark:text-white">Job Type : {detailDataApi.job_type}</p>
                <p class="text-lg mt-5 text-white dark:text-white">Job Tenure : {detailDataApi.job_tenure}</p>
                <p class="flex-1 w-31 text-lg mt-5 text-white dark:text-white">{detailDataApi.company_name}, {detailDataApi.company_city} </p>
                <p class="text-lg mt-5 text-white dark:text-white">{convertIDR(detailDataApi.salary_min)} - {convertIDR(detailDataApi.salary_max)}</p>
            </div>
            <CustomFooter />
        </>
    );
}

export default DetailLowonganPage;