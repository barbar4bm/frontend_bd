import React from 'react'
import './App.css'
import MainView from './views/MainView';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContainerGraph from './views/ContainerGraph';
import NotFound from './views/NotFound';
import Container from './views/Container';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={MainView}/>
                <Route exact path='/details' Component={Container}/>
                <Route exact path='/chart' Component={ContainerGraph}/>
                <Route path='*' Component={NotFound}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;