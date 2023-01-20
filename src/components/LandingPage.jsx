import { getRandomFact } from '../api/api';
import { useState, useEffect } from 'react';
import '../css/LandingPage.css';

const LandingPage = () => {
  const [randomFact, setRandomFact] = useState({});

  useEffect(() => {
    getRandomFact().then(fact => setRandomFact(fact));
  }, []);

  return (
    <>
      <div className="pointer-container">
        <img className="hand" alt="hand pointing left" src={require('../assets/hand.png')} />
        <p>
          <em>Get started here</em>
        </p>
      </div>
      <main className="landing-page">
        <div className="introduction">
          <div className="intro-text">
            <p>Welcome to my portfolio!</p>
            <p>Please enjoy a randomly generated fact!</p>
          </div>
          <div className="picture-card"></div>
        </div>
        <p className="fact">{randomFact.text}</p>
      </main>
    </>
  );
};

export default LandingPage;
