import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanguageContextProvider from "./context/LanguageContextProvider";
import SuperNav from "./components/SuperNav";



function App() {
  return (
    <LanguageContextProvider  >
      <Router>
        <SuperNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </LanguageContextProvider>

  );
}

export default App;