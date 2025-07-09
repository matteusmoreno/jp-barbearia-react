// src/components/Header/Header.js (CORRIGIDO)
import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/jp-barbearia-logo-transparente.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={styles.navbar}>
            <a href="#inicio" className={styles.logo}>
                <img src={logo} alt="Logo JP Barbearia" />
            </a>
            <nav>
                <button
                    className={`${styles.mobileNavToggle} ${menuOpen ? styles.open : ''}`}
                    aria-controls="primary-navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="sr-only">Menu</span>
                </button>
                <ul id="primary-navigation" className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                    <li className={styles.hideOnMobile}><a href="#inicio" onClick={handleLinkClick}>Início</a></li>
                    <li><a href="#sobre" onClick={handleLinkClick}>Sobre</a></li>
                    <li><a href="#servicos" onClick={handleLinkClick}>Serviços</a></li>
                    <li><a href="#galeria" onClick={handleLinkClick}>Galeria</a></li>
                    <li><a href="#equipe" onClick={handleLinkClick}>Equipe</a></li> {/* ADICIONADO AQUI */}
                    <li><a href="#contato" onClick={handleLinkClick}>Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;