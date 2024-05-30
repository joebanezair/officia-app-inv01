import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accounts from './components/accounts/view/Accounts'
import About from './components/about/view/About'
import PublicHandlers from './components/handlers/view/PublicHandlers'
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <Routes path ="/">
        <Route Component={About} path='/about' />
        <Route Component={Accounts} path='/login' />
        <Route Component={PublicHandlers} path='/' />
      </Routes>
    </BrowserRouter>
  )
}

export default App

