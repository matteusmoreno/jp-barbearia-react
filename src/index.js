// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa os estilos globais
import App from './App'; // Importa seu componente principal

// Encontra a div 'root' no seu public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza (desenha) seu aplicativo React dentro daquela div
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);