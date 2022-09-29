import React, { createContext , useState} from "react"
import axios from 'axios';

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const [dataApi, getDataFromApi] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true);

    const handleIndexScore = (score) => {
        if (score >= 80) {
            return 'A';
        } else if (score >= 70 && score < 80) {
            return 'B';
        } else if (score >= 60 && score < 70) {
            return 'C';
        } else if (score >= 50 && score < 60) {
            return 'D';
        } else if (score < 50) {
            return 'E';
        }
    }


    const [input, setInput] = useState(
        {
            name: '',
            course: '',
            score: ''
        }
    );

    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === 'name') {
            setInput({ ...input, name: value })
        } else if (name === 'course') {
            setInput({ ...input, course: value })
        } else if (name === 'score') {
            setInput({ ...input, score: value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let {
            name,
            course,
            score
        } = input

        if (currentId === -1) {
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', {
                name, course, score
            }).then(
                (res) => {
                    setFetchStatus(true)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        }else{
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score})
            .then(
                (res) => {
                    console.log('Update : '+res)
                    setFetchStatus(true)
                }
            )
        }

        setCurrentId(-1)

        setInput(
            {
                name: '',
                course: '',
                score: ''
            }
        )
    }

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
            .then(
                (res) => {
                    console.log('Delete : '+res)
                    setFetchStatus(true)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )


    }

    const [currentId, setCurrentId] = useState(-1)

    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)

        setCurrentId(idData)

        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
            .then(
                (res) => {
                    console.log('Get Edit : '+res)
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

    return (
        <GlobalContext.Provider value={
            {
                dataApi, getDataFromApi,
                fetchStatus, setFetchStatus,
                handleIndexScore, input, setInput, 
                handleInput,
                handleSubmit,
                handleDelete,
                handleEdit
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}