import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.scss";

import Header from './components/Header/Header'
import Connect from './pages/Connect';

// Page
import LandingPage from './pages/LandingPage'
import Tracks from './pages/Tracks';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App