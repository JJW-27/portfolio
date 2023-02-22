import '../../css/Simpsons.css';
import { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const cardImages = [
  { src: 'img/donut.png', isMatched: false },
  { src: 'img/snowball.png', isMatched: false },
  { src: 'img/maggie.png', isMatched: false },
  { src: 'img/lisa.png', isMatched: false },
  { src: 'img/bart.png', isMatched: false },
  { src: 'img/marge.png', isMatched: false },
  { src: 'img/abe.png', isMatched: false },
  { src: 'img/santas_little_helper.png', isMatched: false },
];

const SimpsonsMatchingGame = () => {
  const [cards, setCards] = useState([{}]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [text, setText] = useState('Match the pairs to win!');
  const [soundEffectsOn, setSoundEffectsOn] = useState(true);

  const setUpGame = () => {
    const shuffledCards = cardImages
      .map(card => ({ ...card, id: Math.random() }))
      .concat(cardImages)
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  useEffect(() => {
    setUpGame();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        if (soundEffectsOn) new Audio('/woo-hoo.mp3').play();
        setCards(currCard => {
          const newCards = currCard.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, isMatched: true };
            } else {
              return { ...card };
            }
          });
          return newCards;
        });
        resetTurn();
      } else {
        if (soundEffectsOn) new Audio('/doh.mp3').play();
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const handleChoice = card => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  };

  return (
    <div className="simpsons-background">
      <img className="homer" src="img/homer.png" />
      <div className="speech-bubble">
        <p className="text">{text}</p>
        <p className="text">Turns used:{turns}</p>
        <div className="button-container">
          <button
            onClick={() => {
              setUpGame();
            }}
          >
            Reset game
          </button>
          <button
            onClick={() => {
              setSoundEffectsOn(currVal => !currVal);
            }}
          >
            Toggle sound effects
          </button>
        </div>
      </div>
      <div className="board">
        {cards.map(card => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={
                card === choiceOne || card === choiceTwo || card.isMatched
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default SimpsonsMatchingGame;
