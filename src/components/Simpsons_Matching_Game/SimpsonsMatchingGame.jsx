import '../../css/Simpsons.css';
import { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

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

  // const handleClick = e => {
  //   e.preventDefault();
  //   console.log('click');
  //   new Audio('/doh.mp3').play();
  // };

  return (
    <div className="simpsons-background">
      <img className="homer" src="img/homer.png" />
      <div className="speech-bubble">
        <p className="text">Match the pairs to win!</p>
      </div>
      <div className="board">
        {cards.map(card => {
          return <SingleCard key={`${Math.random()}`} card={card} />;
        })}
      </div>
    </div>
  );
};

export default SimpsonsMatchingGame;
