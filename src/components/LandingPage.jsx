import '../css/LandingPage.css';
import { useEffect, useState } from 'react';
import AnimalBackground from './AnimalBackground';

const animalBackgrounds = [
  'lion.jpg',
  'swan.jpg',
  'iguana.jpg',
  'owl.jpg',
  'fish.jpg',
  'tiger.jpg',
  'chimpanzee.jpg',
];

const LandingPage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (backgroundIndex < animalBackgrounds.length - 1) {
        setBackgroundIndex(curr => curr + 1);
      } else {
        setBackgroundIndex(0);
      }
    }, 20000);
    return () => clearInterval(interval);
  }, [backgroundIndex]);

  return (
    <div className="landing-page">
      <div className="landing-text-container">
        <p className="landing-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eius
          voluptatum veritatis at error quam obcaecati magnam nam sed
          consectetur quos voluptate.
        </p>
      </div>
      <AnimalBackground
        backgroundIndex={backgroundIndex}
        animalBackgrounds={animalBackgrounds}
      />
    </div>
  );
};

export default LandingPage;
