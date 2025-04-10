// For RESTful API sample
import React, { useState, useEffect, use, Suspense } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import Avatar from 'react-avatar'
import { Button, Form } from 'react-bootstrap'

function fetchData(searchTerm) {
  const url = `https://swapi.dev/api/people/?search=${searchTerm}`
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then((response) => {
        console.log(response.data.results)
        resolve(response.data.results)
    })
 })
}

const Characters = ({fetchDataPromise}) => {
    // Version 1: useState with useEffect
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetchDataPromise.then((data) => {
    //         setData(data)
    //     })
    // }, []) // This empty array means this effect runs only once, 
    //        // like componentDidMount. Otherwise, it runs every 
    //        // time the component renders (initial and update).

    // Version 2: useState with use()
    const data = use(fetchDataPromise)
    
    return (
        <div>
            <h3>Star Wars Characters Search Result</h3>
                {data.map((item, index) => {
                    return (
                    <div key={index} style={{padding: 5}}>
                        <Avatar name={item.name} size="50" round={true} />
                        {item.name}
                    </div>
                    )
                })}
        </div>
    )
}

function StarWars() {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = async(formData) => {
        // validate email on the client side
        const searchTerm = formData.get('search')
        setSearchTerm(searchTerm)
    }

    return (
        <div style={{padding: 5}}>
        <form action={handleSubmit}>
            <input type='text' name='search'/>
            <Button variant="primary" type="submit">
            Search
            </Button>
        </form>
        <Suspense key={searchTerm} fallback={<Spinner animation="border" />}>
        <Characters fetchDataPromise={fetchData(searchTerm)} />
        </Suspense>
        </div>
    )
}

export default StarWars