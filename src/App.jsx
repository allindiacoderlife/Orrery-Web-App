import React from 'react'
import {Route , BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Project , Home , Solar , Solar3D} from './pages'

const App = () => {
  return (
   <>
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/Orrery-Web-App" element={<Home />} />
        <Route path="/Orrery-Web-App/Project" element={<Project />} />
        <Route path="/Orrery-Web-App/SolarSystem" element={<Solar/>} />
        <Route path="/Orrery-Web-App/SolarSystem3D" element={<Solar3D/>} />
      </Routes>
    </Router>
   </>
  )
}

export default App
