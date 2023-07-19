import React from 'react'
import Header from '../template/Header'
import MainTable from '../components/MainTable'

const MainView = () => {
  return (
        <div>
            <Header/>
            <div style={{marginBlock:'50px'}}>
              <MainTable/>
            </div>
        </div>
  )
}

export default MainView