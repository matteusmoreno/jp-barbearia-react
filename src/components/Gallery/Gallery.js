import React, { useState } from 'react';
import styles from './Gallery.module.css';
import Modal from '../Modal/Modal';

import barbearia1 from '../../assets/barbearia1.jpg';
import barbearia2 from '../../assets/barbearia2.jpg';
import barbearia3 from '../../assets/barbearia3.jpg';
import barbearia4 from '../../assets/barbearia4.jpeg';
import barbearia5 from '../../assets/barbearia5.jpg';
import barbearia6 from '../../assets/barbearia6.jpg';
import barbearia7 from '../../assets/barbearia7.jpg';
import barbearia8 from '../../assets/barbearia8.jpg';

// Array com 8 imagens de cortes de cabelo (URLs funcionais)
const images = [
  barbearia1,
  barbearia2,
  barbearia3,
  barbearia4,
  barbearia5,
  barbearia6,
  barbearia7,
  barbearia8
];

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section id="galeria" className={styles.gallerySection}>
            <h2 className={styles.sectionTitle}>Nossos Trabalhos</h2>
            <div className={styles.galleryGrid}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Corte de cabelo profissional ${index + 1}`}
                        onClick={() => setSelectedImg(img)}
                    />
                ))}
            </div>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </section>
    );
};

export default Gallery;