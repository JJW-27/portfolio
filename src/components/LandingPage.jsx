import '../css/LandingPage.css';
import { useEffect, useState } from 'react';
import AnimalBackground from './AnimalBackground';

const animalBackgrounds = ['lion.jpg', 'swan.jpg'];

const LandingPage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (backgroundIndex < animalBackgrounds.length - 1) {
        setBackgroundIndex(curr => curr + 1);
      } else {
        setBackgroundIndex(0);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [backgroundIndex]);

  return (
    <div className="landing-page">
      <AnimalBackground backgroundIndex={backgroundIndex} animalBackgrounds={animalBackgrounds}/>
    </div>
  );
};

export default LandingPage;
