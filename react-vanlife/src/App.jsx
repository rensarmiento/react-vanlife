import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans from './pages/Host/HostVans'
import HostVanLayout from './components/HostVanLayout'
import HostVanDetail from './pages/Host/HostVan/HostVanDetail'
import HostVanPricing from './pages/Host/HostVan/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVan/HostVanPhotos'
import Page404 from './pages/NotFound'
import Login from './pages/Login'
import AuthRequired from './components/AuthRequired'
import './server'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail />}/>
          <Route 
            path="login"
            element={<Login/>}
          />
          {/* protected route here */}
          <Route element={<AuthRequired/>}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="reviews" element={<Reviews />}/>
              <Route path="vans" element={<HostVans/>}/>
              <Route path="vans/:id" element={<HostVanLayout/>}>
                <Route index element={<HostVanDetail/>}/>
                <Route path="pricing" element={<HostVanPricing/>}/>
                <Route path="photos" element={<HostVanPhotos/>}/>
              </Route> 
            </Route>
          </Route>

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
