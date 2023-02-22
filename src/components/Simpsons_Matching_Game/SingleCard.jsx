const SingleCard = ({ card, handleChoice, flipped }) => {
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
  } else if (card.src === 'img/snowball.png') {
    cardColour = 'blue';
  }

  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div
      className={flipped ? 'flipped' : 'not-flipped'}
      style={
        flipped ? { backgroundColor: cardColour } : { backgroundColor: 'white' }
      }
    >
      <img className="front" src={card.src} />

      <img
        onClick={handleClick}
        className="back"
        src="img/simpsons_logo.png"
        alt="card image"
      />
    </div>
  );
};

export default SingleCard;
