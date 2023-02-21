const SingleCard = ({ card }) => {
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

  return (
    <div className="card" style={{ backgroundColor: cardColour }}>
      <img className="card-image" src={card.src} alt="card image" />
    </div>
  );
};

export default SingleCard;
