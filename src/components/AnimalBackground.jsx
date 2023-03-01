import '../css/LandingPage.css';

const AnimalBackground = ({ backgroundIndex, animalBackgrounds }) => {

    console.log('new image')
  return (
    <div key={backgroundIndex} className="background-container">
      <div className="background-cover"></div>
      <img
        className="dynamic-background"
        src={`/backgrounds/${animalBackgrounds[backgroundIndex]}`}
        alt="animal picture"
      />
    </div>
  );
};

export default AnimalBackground;
