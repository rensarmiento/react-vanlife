import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import './server'

function App() {

  return (
    <BrowserRouter>
    <nav className='navbar'>
      <Link className='nav-link-title' to="/">#VANLIFE</Link>    
      <Link className='nav-link-home' to="/">Home</Link>    
      <Link className='nav-link-about' to="/about">About</Link>    
      <Link className='nav-link-vans' to="/vans">Vans</Link>    
    </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
        <Route path="/vans/:id" element={<VanDetail />}/>
      </Routes>
    <footer className='footer'>
      <h2 className="copyright">Ⓒ 2022 #VANLIFE</h2>
    </footer>
    </BrowserRouter> 
  )
}

export default App
