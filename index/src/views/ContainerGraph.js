import React from 'react'
import Header from '../template/Header'
import TinyLineChart from '../components/TinyLineChart'
import { Link } from 'react-router-dom'

const ContainerGraph = () => {
  return (
    <div>
        <Header />
        <div style={{marginBlock:'20px'}}>
          <Link to='/'>
            <button>volver</button>
          </Link>
        </div>
        <div style={{marginBlock:'30px'}}>
          <TinyLineChart/>
        </div>
    </div>
  )
}

export default ContainerGraph