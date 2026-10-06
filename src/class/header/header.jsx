import React, { useState } from 'react'
import './header.css'
import johongir from './rasmim1.jpg'

export const Header = ({ scrollToHero }) => {
  const [showPhone, setShowPhone] = useState(false)

  return (
    <>
      {/* Telefon oynasi */}
      {showPhone && (
        <div className="phone-popup">
          <div className="phone-box">

            <button
              className="close-phone"
              onClick={() => setShowPhone(false)}
            >
              ✕
            </button>

            <span className="phone-icon">
              📞
            </span>

            <h3>
              Men bilan bog‘laning
            </h3>

            <p>
              +998 88 480 88 84
            </p>

            <a
              href="tel:+998884808884"
              className="call-button"
            >
              📞 Qo‘ng‘iroq qilish
            </a>

          </div>
        </div>
      )}

      <header className="hero">

        <div className="hero-content">

          <p className="small-title">
            SALOM, MEN
          </p>

          <h1>
            Jahongir <span>Xikmatov</span>
          </h1>

          <p className="description">
            Men Frontend dasturlashga qiziqaman va zamonaviy,
            chiroyli web saytlar yaratishni o‘rganmoqdaman.
          </p>

          <div className="buttons">

            <button
              className="btn-primary"
              onClick={scrollToHero}
            >
              Men haqimda
            </button>

            <button
              className="btn-secondary"
              onClick={() => setShowPhone(true)}
            >
              Bog‘lanish
            </button>

          </div>

        </div>

        <div className="hero-card">

          <img
            className="avatar"
            src={johongir}
            alt="Jahongir"
          />

          <h2>
            Jahongir
          </h2>

          <p>
            Frontend Developer
          </p>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>React</span>
          </div>

        </div>

      </header>
    </>
  )
}

export default Header