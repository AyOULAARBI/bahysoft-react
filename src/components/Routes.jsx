import React from 'react'
import {  BrowserRouter as Router ,Routes as RoutesProvider, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import { useLanguage } from '../context/LanguageContextProvider';
import SuperNav from './SuperNav';
import Nav from './Nav';
import Footer from './Footer';

const Routes = () => {
    const {language} = useLanguage();
    return (
        <div className="min-h-screen overflow-hidden" dir={language == 'ar' ? "rtl" : "ltr"} style={{fontFamily : "Tajawal"}}>
            <Router>
            <SuperNav />
            <Nav />
            <RoutesProvider>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </RoutesProvider>
            <Footer />
            </Router>
        </div>
    )
}

export default Routes