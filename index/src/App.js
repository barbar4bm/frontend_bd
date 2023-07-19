import React from 'react'
import './App.css'
import MainView from './views/MainView';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './views/NotFound';
import Container from './views/Containers/Container';
import ContainerDos from './views/Containers/ContainerDos';
import ContainerTres from './views/Containers/ContainerTres';
import ContainerCuatro from './views/Containers/ContainerCuatro';
import ContainerCinco from './views/Containers/ContainerCinco';
import ContainerSeis from './views/Containers/ContainerSeis';
import CC from './views/ContainerCharts/CC';
import CC2 from './views/ContainerCharts/CC2';
import CC3 from './views/ContainerCharts/CC3';
import CC4 from './views/ContainerCharts/CC4';
import CC5 from './views/ContainerCharts/CC5';
import CC6 from './views/ContainerCharts/CC6';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={MainView}/>
                <Route exact path='/details/1' Component={Container}/>
                <Route exact path='/details/2' Component={ContainerDos}/>
                <Route exact path='/details/3' Component={ContainerTres}/>
                <Route exact path='/details/4' Component={ContainerCuatro}/>
                <Route exact path='/details/5' Component={ContainerCinco}/>
                <Route exact path='/details/6' Component={ContainerSeis}/>
                <Route exact path='/chart/1' Component={CC}/>
                <Route exact path='/chart/2' Component={CC2}/>
                <Route exact path='/chart/3' Component={CC3}/>
                <Route exact path='/chart/4' Component={CC4}/>
                <Route exact path='/chart/5' Component={CC5}/>
                <Route exact path='/chart/6' Component={CC6}/>
                <Route path='*' Component={NotFound}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;