// src/App.js
import React from 'react';
import './index.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Team from './components/Team/Team'; // 1. IMPORTAR O NOVO COMPONENTE
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
                <Team /> {/* 2. ADICIONAR A NOVA SEÇÃO AQUI */}
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;