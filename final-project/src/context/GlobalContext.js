import React, { useState, createContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    
    const [fetchStatus, setFetchStatus] = useState(true)
    const [dataApi, getDataFromApi] = useState(null)
    let navigate = useNavigate()
    const [currentId, setCurrentId] = useState(-1);
    const [user, setUser] = useState("undefined")

    const [registerInput, setRegisterInput] = useState(
        {
            name: '',
            image_url: '',
            email: '',
            password: ''
        }
    );

    const handleRegisterInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === 'name') {
            setRegisterInput({ ...registerInput, name: value })
        } else if (name === 'image_url') {
            setRegisterInput({ ...registerInput, image_url: value })
        }else if (name === 'email') {
            setRegisterInput({ ...registerInput, email: value })
        }else if (name === 'password') {
            setRegisterInput({ ...registerInput, password: value })
        }
    }

    const handleRegister = (event) => {
        event.preventDefault()



        axios.post('https://dev-example.sanbercloud.com/api/register', registerInput)
            .then(
                (res) => {
                    console.log('Result register :' + res.data)
                    navigate('/login')
                }
            ).catch(
                (error) => {
                    alert(error.message)
                }
            )
    }

    const [loginInput, setLoginInput] = useState(
        {
            email: '',
            password: ''
        }
    );

    const handleLoginInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === 'email') {
            setLoginInput({ ...loginInput, email: value })
        } else if (name === 'password') {
            setLoginInput({ ...loginInput, password: value })
        }
    }

    const handleLogin = (event) => {
        event.preventDefault()

        axios.post('https://dev-example.sanbercloud.com/api/login', loginInput)
            .then(
                (res) => {
                    console.log('Result login :' + res.data.token)
                    console.log('Result Data User' + JSON.stringify(res.data))
                    let data = res.data
                    Cookies.set('token', data.token, { expires: 1 })
                    Cookies.set('user', JSON.stringify(data.user), { expires: 1 })
                    navigate('/dashboard')
                }
            ).catch(
                (error) => {
                    alert(error.message)
                }
            )
    }

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

    let { IdData } = useParams()

    const [input, setInput] = useState(
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

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === 'title') {
            setInput({ ...input, title: value })
        } else if (name === 'job_description') {
            setInput({ ...input, job_description: value })
        } else if (name === 'job_qualification') {
            setInput({ ...input, job_qualification: value })
        } else if (name === 'job_type') {
            setInput({ ...input, job_type: value })
        } else if (name === 'job_tenure') {
            setInput({ ...input, job_tenure: value })
        } else if (name === 'job_status') {
            setInput({ ...input, job_status: value })
        } else if (name === 'company_name') {
            setInput({ ...input, company_name: value })
        } else if (name === 'company_image_url') {
            setInput({ ...input, company_image_url: value })
        } else if (name === 'company_city') {
            setInput({ ...input, company_city: value })
        } else if (name === 'salary_min') {
            setInput({ ...input, salary_min: value })
        } else if (name === 'salary_max') {
            setInput({ ...input, salary_max: value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (currentId === -1) {
            axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', input, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
                .then(
                    (res) => {
                        console.log(JSON.stringify(res.data))
                        setFetchStatus(true)
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )

            setInput(
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
        } else {
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, input, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
                .then(
                    (res) => {
                        console.log(JSON.stringify(res.data))
                        setFetchStatus(true)
                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )

            setInput(
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
        }

        
    }

    const [passwordInput, setPasswordInput] = useState(
        {
            current_password: '',
            new_password: '',
            new_confirm_password: '',
        }
    )

    const handlePasswordInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === 'current_password') {
            setPasswordInput({ ...passwordInput, current_password: value })
        } else if (name === 'new_password') {
            setPasswordInput({ ...passwordInput, new_password: value })
        } else if (name === 'new_confirm_password') {
            setPasswordInput({ ...passwordInput, new_confirm_password: value })
        }
    }

    const handlePasswordSubmit = (event) => {
        event.preventDefault()

        axios.post('https://dev-example.sanbercloud.com/api/change-password', passwordInput, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
            .then(
                (res) => {
                    console.log(JSON.stringify(res.data))
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )

            setPasswordInput(
            {
                current_password: '',
                new_password: '',
                new_confirm_password: '',
            }
        )
    }

    return(
        <GlobalContext.Provider value={
            {
                registerInput, setRegisterInput,
                handleRegisterInput, handleRegister,
                loginInput, setLoginInput,
                handleLogin, handleLoginInput,
                fetchStatus, setFetchStatus, input, handleInput,
                dataApi, getDataFromApi,
                currentId, setCurrentId,
                handleEdit, handleDelete,
                IdData, handleSubmit,
                passwordInput, handlePasswordInput, handlePasswordSubmit,
                user, setUser
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    );
}