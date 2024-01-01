import React, { useState } from 'react'

function UseState() {
    
    const handleChildClick = (e) => {
        e.stopPropagation();
        console.log("child event",e);
    }
    const handleParentClick = (e) => {
       
        console.log("parent event", e);
    }
  return (
    <div className='parent' onClick={handleParentClick}>
        <h1>Welcome everyone</h1>
        <button onClick={handleChildClick} disabled={4}>+</button>
    </div>
  )
}

export default UseState