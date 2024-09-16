import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import './server'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail />}/>
          
          <Route path="/host" element={<Dashboard />}>
            <Route path="/host/income" element={<Income />}/>
            <Route path="/host/reviews" element={<Reviews />}/>
          </Route>
        </Route>
      </Routes>
    <footer className='footer'>
      <h2 className="copyright">Ⓒ 2022 #VANLIFE</h2>
    </footer>
    </BrowserRouter> 
  )
}

export default App
