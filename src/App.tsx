
import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PostComponent from './components/PostComponent'
import Layout from './layouts/index'
import  LoginPage  from "./pages/LoginPage";


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
