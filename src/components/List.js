import React from 'react'

import {v4 as uuidv4}  from 'uuid'
const todos = [
    {
      id:uuidv4(),
      title:'dodos1',
      desc:'todos1 description1',
    },
    { 
      id:uuidv4(),  
      title:'dodos2',
      desc:'todos2 description2',
    },
    {
      id:uuidv4(),
      title:'dodos3',
      desc:'todos3 description3',
    },
  ]
  
const List = () => {
    console.log(uuidv4())
  return (
    <div>
        {todos.map((todo)=>{
            const {id, title, desc} = todo
            return <div key={id}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        })}
    </div>
  )
}

export default List