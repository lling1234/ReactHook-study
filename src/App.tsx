
import { useState } from 'react'
import { HashRouter, Link, Route, Routes,Navigate } from 'react-router-dom'
import PostComponent from './components/PostComponent'
import Layout from './layouts/index'
import HomePage from './pages/Home/HomePage'
import LoginPage from "./pages/Login/LoginPage";
import UserPage from './pages/User/UserPage'
import "./App.scss";


function App() {

  return (
    <HashRouter>
      <Routes>
        {/* 重定向到首页 */}
      <Route path='/'  element={<Navigate to="/layout/home" />}></Route>

        <Route path='/layout' element={<Layout />}>
          <Route index path='home' element={<HomePage />}></Route>
          <Route path='user' element={<UserPage />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
