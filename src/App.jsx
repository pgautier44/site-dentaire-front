import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import routesConfig from "./routes/routesConfig.jsx";
import ScrollToTop from "./components/Scroll/ScrollToTop";

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />

        <main className="main-content">
          <Routes>
            {routesConfig.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
