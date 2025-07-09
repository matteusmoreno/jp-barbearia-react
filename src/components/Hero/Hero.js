// src/components/Hero/Hero.js
import React from 'react';
import styles from './Hero.module.css';
import logo from '../../assets/jp-barbearia-logo.png';

const Hero = () => {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.heroLogo}>
                <img src={logo} alt="Logo JP Barbearia" />
            </div>
            <p className={styles.subtitle}>Tradição e Estilo em Cada Corte</p>
            <a href="https://api.whatsapp.com/send?phone=5522992160689" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                Agende Seu Horário
            </a>
        </section>
    );
};

export default Hero;