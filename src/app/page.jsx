"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (

    <main className={`container ${darkMode ? 'dark-theme' : ''}`}>
      <header className="header">
        <h1>ING. VICTOR GIOVANNI ORDOÑEZ ROMERO</h1>
        <p className="subtitle">Estudiante en Instituto Tecnológico de Gustavo A. Madero</p>
      </header>

      <div className="grid-content">
        <section className="main-info">
          <h3>Sobre mí</h3>
          <p>
            Estudiante con sólidos conocimientos en lenguajes de programación, 
            gestión de redes bajo normas ISO y procesos de auditoría informática. 
          </p>

          <h3>Habilidades</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <p className="titulo">Lenguajes de Programación</p>
              <p className="texto-contenido">JavaScript, Python, PHP</p>
            </div>
            <div className="skill-item">
              <p className="titulo">Bases de Datos</p>
              <p className="texto-contenido">MySQL, SQL</p>
            </div>
          </div>
        </section>

        <aside className="sidebar">
          <h3>Información Académica</h3>
          <p><strong>Universidad:</strong> ITGAM</p>
          <p><strong>Bachillerato:</strong> CETIS 3</p>

          <div className="contacto">
            <h3>Contacto</h3>
            <p className="titulo">Correo</p>
            <p><a href="mailto:giovannivert@gmail.com">giovannivert@gmail.com</a></p>
          </div>
        </aside>
      </div>

      <footer>
        <button
          id="toggle-theme"
          onClick={() => setDarkMode((v) => !v)}
          type="button"
        >
          {darkMode ? "☀️ Modo Dia" : "🌙 Modo Noche"}
        </button>

        <br />
        <br />

        <a href="https://github.com/Giovanni2202" target="_blank" rel="noreferrer">
          Mi GitHub
        </a>
      </footer>

    </main>
  );
}