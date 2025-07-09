// src/components/Contact/Contact.js (CORRIGIDO)
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contato" className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>Contato</h2>
            <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>
                    <h3>Endereço</h3>
                    <p>
                        Rua Alfredo Menezes, 198 - Loja 1<br />
                        Bacaxá, Saquarema - RJ<br />
                        CEP: 28994-675
                    </p>

                    <h3>Telefone</h3>
                    <p>(22) 99216-0689</p>

                    <h3>Horário de Funcionamento</h3>
                    <p>
                        <strong>Segunda a Sexta:</strong> 9:00 - 20:00<br />
                        <strong>Sábado:</strong> 8:00 - 18:00
                    </p>
                </div>
                <div className={styles.contactMap}>
                    <iframe
                        title="Localização da JP Barbearia no Google Maps" // ADICIONADO PARA CORRIGIR O WARNING
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5154271660867!2d-42.46587340000001!3d-22.8943522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x975d0ac3f82255%3A0x729c9f7ee88aeb9c!2sJP%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1752001577441!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;