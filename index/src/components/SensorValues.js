import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SensorValues = () => {
    const [items, setitems] = useState(null);

    useEffect(() =>{
        axios.get('http://localhost:3001/api/items')
        .then((res) => setitems(res.data.items));
    }, []);

    if(items === null) return <div>Loading</div>;

    return (
        <div>
            {items.map((item) => (
                <div key ={item.id}>{item.name}</div>
        ))}
        </div>
    );
};

export default SensorValues;