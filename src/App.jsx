import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './AboutPage.jsx'
import './App.css'

function App() {

  return (
    <>
      <Router>
      <Routes>
        {/* Redirect dari root ke /about */}
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
