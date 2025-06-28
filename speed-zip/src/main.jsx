import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Aboutus from './pages/Aboutus.jsx'
import Ourprojects from './pages/Ourproject.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
 <BrowserRouter>
<Routes>
  <Route path="/" element={<App />} />
  <Route path="/aboutus" element={<Aboutus />} />
  <Route path="/service" element={<Service/>} />
  <Route path="/ourproject" element={<Ourprojects />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>  

 
)
