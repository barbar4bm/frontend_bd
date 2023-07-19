import React from 'react'
import ContainerRectangle from '../components/ContainerRectangle'
import Header from '../template/Header'
import { Link } from 'react-router-dom'

const Container = () => {
  return (
    <div>
        <Header/>
        <div style={{marginBlock:'20px'}}>
          <Link to='/'>
            <button>volver</button>
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'60px' }}>
              <ContainerRectangle/>
        </div>
    </div>
  )
}

export default Container