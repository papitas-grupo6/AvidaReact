import React from 'react';
import Avida from '/src/assets/img/Avida.png';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar({ type }) {
  const navigate = useNavigate();

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light custom-navbar bg-green`}
    >
      <div className='container'>
        <a
          className='navbar-brand'
          href='#'
        >
          <img
            src={Avida}
            alt='Logo'
            style={{ maxWidth: '80px' }}
          />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarNav'
        >
          <ul className='navbar-nav mx-auto gap-2'>
            <li className='nav-item active'>
              <a
                className='nav-link'
                onClick={() => navigate('/')}
                href='#'
              >
                Inicio
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#mapa'
              >
                Mapa
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#comunidad'
              >
                Comunidad
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#planner'
              >
                Planificador
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#nosotros'
              >
                Enciclopedia
              </a>
            </li>
          </ul>
          <ul className='navbar-nav gap-3'>
            <li className='nav-item'>
              <a
                className='nav-link'
                onClick={() => navigate('/login')}
                href='#'
                id='myAccountBtn'
              >
                Iniciar Sesión
              </a>
            </li>
            <li className='nav-item'>
              <button className='btn btn-outline-primary'>Registrarse</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
