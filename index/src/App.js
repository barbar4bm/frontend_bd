import React from 'react'
import MainTable from './components/MainTable';
import Header from './template/Header';
import './App.css'


function App() {
    return (
        <div className='header-container'>
            <Header/>
            <div className='table-container'>
                <MainTable/>
            </div>
        </div>
    );
}

export default App;