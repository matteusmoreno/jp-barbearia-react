// src/components/Team/Team.js (ATUALIZADO com Swiper)
import React from 'react';

// 1. Importar os componentes e módulos do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// 2. Importar os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Team.module.css';

// Importar as imagens da sua equipe
import barbeiro1 from '../../assets/barbeiro1.jpg';
import barbeiro2 from '../../assets/barbeiro2.jpeg';
import barbeiro3 from '../../assets/barbeiro3.jpg';
import barbeiro4 from '../../assets/barbeiro4.jpg';
import barbeiro5 from '../../assets/barbeiro5.jpg';

const teamMembers = [
    { name: 'Tony Stark', role: 'Barbeiro Mestre', img: barbeiro2 },
    { name: 'Steve Rogers', role: 'Gerente', img: barbeiro3 },
    { name: 'Peter Parker', role: 'Barbeiro', img: barbeiro1 },
    { name: 'Natasha Romanoff', role: 'Recepcionista', img: barbeiro4 },
    { name: 'Bruce Banner', role: 'Especialista em Barba', img: barbeiro5 },
];

const Team = () => {
    return (
        <section id="equipe" className={styles.teamSection}>
            <h2 className={styles.sectionTitle}>Nossa Equipe</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                className={styles.mySwiper}
                // Pontos de quebra para responsividade
                breakpoints={{
                    // Quando a tela for >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // Quando a tela for >= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.teamCard}>
                            <img src={member.img} alt={`Foto de ${member.name}`} className={styles.teamImage} />
                            <div className={styles.teamInfo}>
                                <h3 className={styles.teamName}>{member.name}</h3>
                                <p className={styles.teamRole}>{member.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Team;