import React from 'react'
import Header from '../../template/Header'
import TinyLineChart from '../../components/TinyLineChart'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import SelectTimeFrame from '../../components/SelectTimeFrame';

const CC6 = () => {
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
        <h1>Container 6: Average Temperatures (last 3 months)</h1>
        <div><SelectTimeFrame/></div>
        <div style={{marginBlock:'30px'}}>
          <TinyLineChart/>
        </div>
    </div>
  )
}

export default CC6