import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

import { BrowserRouter as Router } from "react-router-dom";
import LanguageContextProvider from "./context/LanguageContextProvider";
import SuperNav from "./components/SuperNav";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Routes from "./components/Routes";



function App() {
  return (
    <LanguageContextProvider  >
        <Routes />
    </LanguageContextProvider>

  );
}

export default App;