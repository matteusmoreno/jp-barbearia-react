// src/App.js
import React from 'react';
import './index.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;