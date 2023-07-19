import React from 'react'
import { FaTemperatureLow } from 'react-icons/fa'

const ContainerRectangle = () => {
  return (
    <div style={{
        width: '300px',
        height: '200px',
        border: '2px solid black',
        position: 'relative'
      }}
    >
        <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            }}
        >
            <FaTemperatureLow/>
            T°
        </div>
        <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            }}
        >
            <FaTemperatureLow/>
            T°
        </div>
        <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            }}
        >
            <FaTemperatureLow/>
            T°
        </div>
        <div style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            }}
        >
            <FaTemperatureLow/>
            T°
        </div>
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
            }}
        >
            <FaTemperatureLow/>
            T°
        </div>
    </div>
  )
}

export default ContainerRectangle