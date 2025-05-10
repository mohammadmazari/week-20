import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Auth from "./components/auth/Auth";
import Panel from "./components/panel/Panel";
import HomePage from "./components/HomePage";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth");
  }, [navigate]);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/panel" element={<Panel />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
