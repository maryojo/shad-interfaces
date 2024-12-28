import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProfilePage01 from './pages/ProfilePage01'
import Button01 from './pages/Button01'
import LandingPage01 from './pages/landing-pages/landing-page-1'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile-page-1" element={<ProfilePage01 />} />
        <Route path="/landing-page-1" element={<LandingPage01 />} />
        <Route path="/button-1" element={<Button01 />} />
      </Routes>
    </Router>
  )
}

export default App
