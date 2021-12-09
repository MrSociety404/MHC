import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Login from "./pages/Login";

// Page
import LandingPage from "./pages/LandingPage";
import Tracks from "./pages/Tracks";
import Register from "./pages/Register";
import Account from "./pages/Account";
import {ProtectedRoute} from "./routes/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        <Route path="/tracks" element={<ProtectedRoute />}>
          <Route path="/tracks" element={<Tracks />} />
        </Route>

        <Route path="/account" element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>

        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
