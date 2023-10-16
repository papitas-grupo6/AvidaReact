import React from 'react';
import Navbar from './Navbar';
import SobreNosotros from './SobreNosotros';
import '../css/Home.css'; // Importa tu archivo CSS

export default function Home() {
  return (
    <div className='home-container'>
      <Navbar type={'user'} />
      <section className='container text-center mySection'>
        <h1>ÁVIDA</h1>
        <p>Tus frases aquí</p>
      </section>
    </div>
  );
}
