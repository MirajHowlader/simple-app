import React from 'react'




function Welcome(props) {
    const {title, titleDes} = props
  return (
    <div>
        <h1 style={{color:'red'}}>{title}</h1>
        <h1>{titleDes}</h1>
       
    </div>
  )
}

export default Welcome