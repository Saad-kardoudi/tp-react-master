const CardBoard = ({ cards, flipped, matched, onCardClick }) => {
  return (
    <div className={`board board--${cards.length}`}>
      {cards.map((emoji, index) => {
        const isVisible = flipped.includes(index) || matched.includes(index);
        const displayEmoji = isVisible ? emoji : "❓";

        return (
          <Card
            key={index}
            emoji={displayEmoji}
            onClick={() => onCardClick(index)}
          />
        );
      })}
    </div>
  );
};

const Card = ({ emoji, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {emoji}
    </div>
  );
};

export default CardBoard;
