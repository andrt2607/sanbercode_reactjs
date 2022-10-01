import React, { createContext, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const [dataApi, getDataFromApi] = useState(null);
    const [input, setInput] = useState(
        {
            name: '',
            description: '',
            category: '',
            size: 0,
            price: 0,
            rating: 0,
            image_url: '',
            release_year: 2007,
            is_android_app: 0,
            is_ios_app: 0,
        }
    );
    const [fetchStatus, setFetchStatus] = useState(true);

    const [currentId, setCurrentId] = useState(-1);

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === 'name') {
            setInput({ ...input, name: value })
        } else if (name === 'category') {
            setInput({ ...input, category: value })
        } else if (name === 'description') {
            setInput({ ...input, description: value })
        } else if (name === 'price') {
            setInput({ ...input, price: value })
        } else if (name === 'rating') {
            setInput({ ...input, rating: value })
        } else if (name === 'image_url') {
            setInput({ ...input, image_url: value })
        } else if (name === 'release_year') {
            setInput({ ...input, release_year: value })
        } else if (name === 'size') {
            setInput({ ...input, size: value })
        } else if (name === 'is_android_app') {
            setInput({ ...input, is_android_app: value })
        } else if (name === 'is_ios_app') {
            setInput({ ...input, is_ios_app: value })
        }
    }

    const handleEdit = (event) => {
        let idMobileApp = parseInt(event.target.value)

        axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${idMobileApp}`)
            .then(
                (res) => {
                    console.log(res)
                    setInput(
                        {
                            name: res.data.name,
                            description: res.data.description,
                            category: res.data.category,
                            size: res.data.size,
                            price: res.data.price,
                            rating: res.data.rating,
                            image_url: res.data.image_url,
                            release_year: res.data.release_year,
                            is_android_app: res.data.is_android_app,
                            is_ios_app: res.data.is_ios_app,
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

    const handleDelete = (event) => {
        let idMobileApp = event.target.value

        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${idMobileApp}`)
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

    const handleSubmit = (event) => {
        event.preventDefault()

        if(currentId === -1){
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', input)
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

                setInput(
                    {
                        name: '',
                        description: '',
                        category: '',
                        size: 0,
                        price: 0,
                        rating: 0,
                        image_url: '',
                        release_year: 0,
                        is_android_app: 0,
                        is_ios_app: 0,
                    }
                )
        }else{
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, input)
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
                setCurrentId(-1)
                setInput(
                    {
                        name: '',
                        description: '',
                        category: '',
                        size: 0,
                        price: 0,
                        rating: 0,
                        image_url: '',
                        release_year: 0,
                        is_android_app: 0,
                        is_ios_app: 0,
                    }
                )
        }

    }

    return (
        <GlobalContext.Provider value={
            {
                dataApi, getDataFromApi,
                input, setInput,
                fetchStatus, setFetchStatus,
                currentId, setCurrentId,
                handleInput, handleEdit,
                handleDelete, handleSubmit
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )

}