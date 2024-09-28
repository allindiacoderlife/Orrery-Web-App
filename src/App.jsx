import React from 'react'
import {Route , BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Project , Home , Solar } from './pages'

const App = () => {
  return (
   <>
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/Orrery-Web-App" element={<Home />} />
        <Route path="/Orrery-Web-App/Project" element={<Project />} />
        <Route path="/Orrery-Web-App/SolarSystem" element={<Solar />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
