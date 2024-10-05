import React from 'react'
import {Route , BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Project , Home , Solar , Solar3D , Main} from './pages'

const App = () => {
  return (
   <>
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/Orrery-Web-App" element={<Main />} />
        <Route path="/Project" element={<Project />} />
        {/* <Route path="/Orrery-Web-App/SolarSystem" element={<Solar/>} /> */}
        <Route path="/SolarSystem3D" element={<Solar3D/>} />
      </Routes>
    </Router>
   </>
  )
}

export default App
