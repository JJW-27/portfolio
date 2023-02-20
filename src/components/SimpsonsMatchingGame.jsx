import '../css/Simpsons.css';
import { useEffect, useState } from 'react';

const cardImages = [
  { src: 'img/donut.png' },
  { src: 'img/snowball.png' },
  { src: 'img/maggie.png' },
  { src: 'img/lisa.png' },
  { src: 'img/bart.png' },
  { src: 'img/marge.png' },
  { src: 'img/abe.png' },
  { src: 'img/santas_little_helper.png' },
];

const SimpsonsMatchingGame = () => {
  const [cards, setCards] = useState([{}]);
  const [turns, setTurns] = useState(0);

  const setUpGame = () => {
    const shuffledCards = cardImages
      .concat(cardImages)
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    setUpGame();
  }, []);

  return (
    <div className="simpsons-background">
      <img className="homer" src={require('../assets/homer.png')} />
      <div className="speech-bubble">
        <p className="text">Match the pairs to win!</p>
      </div>
      <div className="board">
        {cards.map(card => {
          let cardColour;
          if (card.src === 'img/santas_little_helper.png') {
            cardColour = 'yellow';
          } else if (card.src === 'img/donut.png') {
            cardColour = 'lightblue';
          } else if (card.src === 'img/abe.png') {
            cardColour = 'red';
          } else if (card.src === 'img/lisa.png') {
            cardColour = 'lightgreen';
          } else if (card.src === 'img/marge.png') {
            cardColour = 'orange';
          } else if (card.src === 'img/bart.png') {
            cardColour = 'pink';
          } else if (card.src === 'img/maggie.png') {
            cardColour = 'purple';
          }
          return (
            <div
              className="card"
              key={`${Math.random()}`}
              style={{ backgroundColor: cardColour }}
            >
              <img className="card-image" src={card.src} alt="card image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimpsonsMatchingGame;
