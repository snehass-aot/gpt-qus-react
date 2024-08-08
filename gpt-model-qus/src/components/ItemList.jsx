import React from 'react'
import { useState, useEffect } from 'react'

function ItemList() {
    const [items, setItems] = useState([])
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((data) => setItems(data));
    }, [])

    const toggleVisibility = () => {
        setVisible(preVisible => !preVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
                {visible ? 'Hide' : 'Show'} List
            </button>
            {visible ? (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : null }

        </div>
    )
}

export default ItemList
