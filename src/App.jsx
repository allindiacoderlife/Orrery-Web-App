import React from 'react'
import {Route , BrowserRouter as Router, Routes} from 'react-router-dom'
import { Project } from './pages'

const App = () => {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/Orrery-Web-App" element={<Project />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
