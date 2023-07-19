import React from 'react'
import { FaSadTear } from 'react-icons/fa'


const NotFound = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <FaSadTear/>
        <h1>Not Found</h1>
        <FaSadTear/>
    </div>
  )
}

export default NotFound