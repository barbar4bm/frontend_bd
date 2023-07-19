import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaTemperatureLow } from 'react-icons/fa'

const ContainerRectangle = (props) => {
    const containerN = props.containerN;

    const [items, setitems] = useState(null);

    useEffect(() =>{
        axios.get('http://localhost:3001/api/items')
        .then((res) => setitems(res.data.items));
    }, []);

    if(items === null) return <div>Loading</div>;
    
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
            {items[containerN-1].temperature}°C
        </div>
        <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            }}
        >
            <FaTemperatureLow/>
            {items[containerN-1].temperature}°C
        </div>
        <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            }}
        >
            <FaTemperatureLow/>
            {items[containerN-1].temperature}°C
        </div>
        <div style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            }}
        >
            <FaTemperatureLow/>
            {items[containerN-1].temperature}°C
        </div>
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
            }}
        >
            <FaTemperatureLow/>
            {items[containerN-1].temperature}°C
        </div>
    </div>
  )
}

export default ContainerRectangle