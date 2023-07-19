import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'

const TinyLineChart = () => {

    const [items, setitems] = useState(null);

    useEffect(() =>{
        axios.get('http://localhost:3001/api/items')
        .then((res) => setitems(res.data.items));
    }, []);

    if(items === null) return <div>Loading</div>;

  return (
    <ResponsiveContainer width='100%' aspect={2}>
      <LineChart 
        data={items}
        width={250}
        height={200}
        margin={{
          top:10,
          right:30,
          left:0,
          bottom:0
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='temperature' />
      </LineChart>
    </ResponsiveContainer>
    
  )
}

export default TinyLineChart