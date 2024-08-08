import React, { useState } from 'react'

function FilterableList() {

    const ItemList = [{
        id:1,
        title:"food",
        description:"Foods are very good"
    },{
        id:2,
        title:"Dress",
        description:"Dressess are very colourful"
    },{
        id:3,
        title:"Books",
        description:"Books are full of knowledge"
    },{
        id:4,
        title:"Accessories",
        description:"Accessories are important things"
    }]

    const [filter,setFilter] = useState("");
   
    const filtered = (event) => {
        setFilter(event.target.value);
    }

    const filteredItem = ItemList.filter(item => 
         (
            item.title.toLowerCase().includes(filter.toLowerCase()) 
        )
      )

  return (
    <div>
      <input type="text" onChange={filtered} placeholder='Enter here' />
      <ul>
        {
            filteredItem.map(item => (
                <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default FilterableList
