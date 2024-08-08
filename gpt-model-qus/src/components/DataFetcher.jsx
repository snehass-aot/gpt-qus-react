import React from 'react'
import { useState, useEffect } from 'react'

function DataFetcher() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then((data) => setData(data))
    }, [])

    return (
        <div>
            <h2>Data List</h2>
            <ul>
                {
                    data.map((item) =>
                    (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DataFetcher
