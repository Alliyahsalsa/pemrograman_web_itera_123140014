import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BookProvider } from "./context/BookContext"; 
import CustomNavHeader from "./components/Navbar/Navbar";
import HomePageContent from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";

function App() { 
  return (
    <BrowserRouter>
      <BookProvider>
        <div className="main-app-container">
          
          <CustomNavHeader /> 

          <div className="content-page-wrapper">
            <Routes>
              <Route path="/" element={<HomePageContent />} /> 
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </div>
          
          <footer className="app-footer">
            <p>© 2025 Catatan Buku Saya | Alliyah Salsabilla 🌸</p>
          </footer>
        </div>
      </BookProvider>
    </BrowserRouter>
  );
}

export default App;