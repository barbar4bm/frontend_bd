import React from 'react'
import Header from '../../template/Header'
import TinyLineChart from '../../components/TinyLineChart'
import { Link } from 'react-router-dom'
import SelectTimeFrame from '../../components/SelectTimeFrame'
import { FaArrowLeft } from 'react-icons/fa';

const CC = () => {
  return (
    <div>
        <Header />
        <div style={{marginBlock:'20px'}}>
          <Link to='/'>
            <button>
              <FaArrowLeft/>
            </button>
          </Link>
        </div>
        <h1>Container 1: Average Temperatures (last 3 months)</h1>
        <div><SelectTimeFrame/></div>
        <div style={{marginBlock:'30px'}}>
          <TinyLineChart/>
        </div>
    </div>
  )
}

export default CC