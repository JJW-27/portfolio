import { getRandomFact } from '../api/api';
import { useState, useEffect } from 'react';
import '../css/LandingPage.css';

const LandingPage = () => {
  document.addEventListener('mousemove', e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('anchor');
    const rect = anchor.getBoundingClientRect();

    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
      eye.style.transform = `rotate(${120 + angleDeg}deg)`;
    });
  });

  function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }

  return (
    <main className="landing-page">
      <img id="anchor" src={require('../assets/goat.png')} alt="goat" />

      <img
        class="eye"
        src={require('../assets/eye.png')}
        alt="eye"
        style={{
          bottom: '173px',
          left: '97px',
        }}
      />
      <img
        class="eye"
        src={require('../assets/eye.png')}
        alt="eye"
        style={{
          bottom: '119px',
          left: '157px',
        }}
      />
    </main>
  );
};

export default LandingPage;
