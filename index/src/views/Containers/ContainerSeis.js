import React from 'react'
import ContainerRectangle from '../../components/ContainerRectangle'
import Header from '../../template/Header'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

const ContainerSeis = () => {
  return (
    <div>
        <Header/>
        <div style={{marginBlock:'20px'}}>
          <Link to='/'>
            <button>
              <FaArrowLeft/>
            </button>
          </Link>
        </div>
        <h1>CONTAINER 6</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'60px' }}>
              <ContainerRectangle containerN='6'/>
        </div>
    </div>
  )
}

export default ContainerSeis