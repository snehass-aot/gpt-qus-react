import React, { useState, useEffect } from 'react'

function DataWithLoadingAndError() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <div>
            <h1>Lists</h1>
            <ul>
                {
                    data.map(post => (
                        <li key={post.id}>
                            {post.title}{<br/>}
                            {post.body}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DataWithLoadingAndError
