import React from 'react'
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'

const data = [
  { date: '2023-07-18 08:00', temperature: 25 },
  { date: '2023-07-18 11:30', temperature: 29 },
  { date: '2023-07-18 14:45', temperature: 31 },
  { date: '2023-07-18 18:20', temperature: 40 },
  { date: '2023-07-19 09:15', temperature: 24 },
  { date: '2023-07-19 12:45', temperature: 21 },
  { date: '2023-07-19 15:30', temperature: 13 },
  { date: '2023-07-19 19:00', temperature: 21 },
  { date: '2023-07-20 10:30', temperature: 4 },
  { date: '2023-07-20 13:15', temperature: 12 }
]

const TinyLineChart = () => {
  return (
    <ResponsiveContainer width='100%' aspect={2}>
      <LineChart 
        data={data}
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