import { getRandomFact } from '../api/api';
import { useState, useEffect } from 'react';
import '../css/LandingPage.css';
import {Card} from '@mui/material';

const LandingPage = () => {
  const [randomFact, setRandomFact] = useState({});

  useEffect(() => {
    getRandomFact().then(fact => setRandomFact(fact));
  }, []);

  return (
    <div className="landing-page">
      <div className="introduction">
        <ul>
          <li>Welcome to my portfolio website!</li>
          <li>A little bit about me...</li>
          <li>
            Please enjoy a randomly generated *insert something cool here*
          </li>
        </ul>
        <Card variant="outlined"></Card>
      </div>
      <p className="fact">{randomFact.text}</p>
    </div>
  );
};

export default LandingPage;
