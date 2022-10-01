import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';

const Home = () => {

    const {
        dataApi, getDataFromApi,
                
     } = useContext(GlobalContext);

    useEffect(
        () => {
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
        }, [getDataFromApi]
    )

    const convertToGB = (num) => {

        if(num >= 1000){
            return (num / 1024).toFixed(2) + ' GB';
        }else{
            return num + ' MB';
        }
    }

    const convertIDR = (num) => {
        let	number_string = num.toString()
        let sisa = number_string.length % 3
        let rupiah 	= number_string.substr(0, sisa)
        let ribuan 	= number_string.substr(sisa).match(/\d{3}/g)

        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        return 'Rp ' + rupiah + ',-'
    }

    const isAndroidIOS = (androidValue, IOSValue) => {
        if(androidValue === 1 && IOSValue === 1){
            return 'Android & IOS'  
        }else if(androidValue === 1){
            return 'Android'
        }else if(IOSValue === 1){
            return 'IOS'
        }else{
            return ''
        }
    }
    return (
        <>
            <section className="bg-gray-200 p-5">
                <div className="container mx-auto mt-10">
                    <h1 className="text-xl font-bold ">Find your data that you need!</h1>
                </div>
                <div className="container mx-auto items-center justify-start grid grid-cols-2 gap-2">
                    {dataApi != null && dataApi.map((res, index) => {
                        return (
                            <>
                                <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                                    <img
                                        src={res.image_url}
                                        className="w-1/2 bg-cover bg-center bg-landscape"
                                    />
                                    <div className="w-2/3 p-4">
                                        <h1 className="text-gray-900 font-bold text-2xl">
                                            {res.name}
                                        </h1>
                                        <small>2019</small>
                                        <p className="mt-2 text-gray-600 text-sm overflow-hidden text-ellipsis h-20">
                                            {res.description}
                                        </p>
                                        <div className=" item-center mt-2 text-gray-500">
                                            <span>{res.category} </span>
                                            <span>{convertToGB(res.size)}</span>
                                            <span>, {isAndroidIOS(res.is_android_app, res.is_ios_app)}</span>
                                        </div>
                                        <div className="flex item-center justify-between mt-3">
                                            <h1 className="text-gray-700 font-bold text-xl">{res.price === 0 ? 'FREE' : convertIDR(res.price)}</h1>
                                            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                                                {res.rating} Ratings
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Home;