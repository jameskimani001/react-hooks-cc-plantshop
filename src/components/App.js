import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Defining a route to the main page where plants are listed */}
          <Route path="/" element={<PlantPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
