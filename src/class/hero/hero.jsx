import React from 'react'
import './hero.css'

export const Hero = () => {
  return (
    <section className="about">

      <p className="about-small-title">
        MEN HAQIMDA
      </p>

      <h1>
        Men <span>Jahongir</span>man
      </h1>

      <p className="about-description">
        Men web dasturlashga qiziqadigan va kelajakda
        professional Frontend Developer bo‘lishni
        maqsad qilgan yosh dasturchiman.
      </p>

      {/* SHAXSIY MA'LUMOTLAR */}
      <div className="personal-info">

        <div className="info-card">
          <span className="info-icon">👤</span>
          <h3>Ismim</h3>
          <p>Jahongir Xikmatov</p>
        </div>

        <div className="info-card">
          <span className="info-icon">🎂</span>
          <h3>Tug‘ilgan sana</h3>
          <p>10-avgust, 2010-yil</p>
        </div>

        <div className="info-card">
          <span className="info-icon">💻</span>
          <h3>Yo‘nalishim</h3>
          <p>Frontend Development</p>
        </div>

        <div className="info-card">
          <span className="info-icon">🎓</span>
          <h3>Ta’lim</h3>
          <p>IT Time Academy</p>
        </div>

      </div>

      {/* QIZIQISHLAR */}
      <h2>Mening qiziqishlarim</h2>

      <div className="about-skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>IT</span>
        <span>⚽ Futbol</span>
      </div>

    </section>
  )
}

export default Hero