import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage";
import SettingsPage from "./pages/SettingsPage";
import HistoryPage from "./pages/HistoryPage";
import Menu from "./components/Menu";
import "./App.css";
import { StorageProvider } from "./context/StorageContext";

function App() {
  const [mode, setMode] = useState(4);

  return (
    <Router>
      <StorageProvider>
        <div className="app-layout">
          <Menu />
          <div className="main-content" style={{ backgroundColor: "#252525" }}>
            <header className="header">
              <h1>Jeu de Memory</h1>
            </header>
            <main>
              <Routes>
                <Route path="/" element={<GamePage mode={mode} />} />
                <Route
                  path="/parametres"
                  element={<SettingsPage mode={mode} setMode={setMode} />}
                />
                <Route path="/historique" element={<HistoryPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </StorageProvider>
    </Router>
  );
}

export default App;
