import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.scss";

import Header from './components/Header/Header'

// Page
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App