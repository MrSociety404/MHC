import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.scss";

import Header from './components/Header/Header'
import Login from './pages/Login';

// Page
import LandingPage from './pages/LandingPage'
import Tracks from './pages/Tracks';
import Register from './pages/Register';
import Account from './pages/Account';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App