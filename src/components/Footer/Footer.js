// src/components/Footer/Footer.js (ATUALIZADO)

import React from 'react';
import styles from './Footer.module.css';
// --- NOVO: Importando os ícones ---
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* --- NOVO: Div para os ícones das redes sociais --- */}
            <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/jpbarbearia22/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/jpbarbearia22/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5522992160689" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp />
                </a>
            </div>
            <p>© 2025 JP Barbearia. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;