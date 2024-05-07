import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VitalStats from './pages/VitalStats'

const App = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/Katheryn' Component={VitalStats} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App