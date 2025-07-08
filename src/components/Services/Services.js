// src/components/Services/Services.js (ATUALIZADO)

import React from 'react';
import styles from './Services.module.css';

const servicesData = [
    { title: 'Corte de Cabelo', description: 'Tesoura, máquina ou navalha. Inclui lavagem e finalização.', price: 'R$ 40,00' },
    { title: 'Barba Tradicional', description: 'Design com toalha quente, navalha e finalização com óleos.', price: 'R$ 35,00' },
    { title: 'Combo (Cabelo + Barba)', description: 'O pacote completo para um visual impecável com desconto.', price: 'R$ 70,00' },
    { title: 'Acabamento', description: 'Manutenção rápida do corte, mantendo o contorno em dia.', price: 'R$ 15,00' },
    { title: 'Sobrancelha na Navalha', description: 'Modelagem e alinhamento da sobrancelha para um olhar marcante.', price: 'R$ 20,00' },
    { title: 'Limpeza de Pele Masculina', description: 'Tratamento facial com esfoliação e máscara para remover impurezas.', price: 'R$ 50,00' },
];

const Services = () => (
    <section id="servicos" className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <p className={styles.price}>{service.price}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Services;