import React, { useState, useEffect, useContext } from "react";
import CardBoard from "../components/CardBoard";
import StorageContext from "../context/StorageContext";

function GamePage({ mode }) {
  const { saveGameResult } = useContext(StorageContext);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    setCards(getShuffledEmotions(mode));
    setFlipped([]);
    setMatched([]);
    setAttempts(0);
    setIsGameWon(false);
  }, [mode]);

  const handleCardClick = (index) => {
    if (
      flipped.length === 2 ||
      flipped.includes(index) ||
      matched.includes(index)
    ) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setAttempts((prev) => prev + 1);

      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatched((prev) => [...prev, ...newFlipped]);
        setFlipped([]);

        if (matched.length + 2 === cards.length) {
          setIsGameWon(true);
          saveGameResult(mode, attempts + 1);
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div>
      {!isGameWon ? (
        <div>
          <CardBoard
            cards={cards}
            flipped={flipped}
            matched={matched}
            onCardClick={handleCardClick}
          />
          <p style={{ textAlign: "center" }}>Tentatives : {attempts}</p>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>🎉 Félicitations ! Vous avez gagné ! 🎉</h2>
          <p>Mode de jeu : {mode} cartes</p>
          <p>Score : {attempts} tentatives</p>
          <button
            onClick={() => {
              setCards(getShuffledEmotions(mode));
              setFlipped([]);
              setMatched([]);
              setAttempts(0);
              setIsGameWon(false);
            }}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#0056b3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
}

function getShuffledEmotions(cardCount) {
  const EMOTIONS = [
    "😊",
    "😂",
    "😁",
    "😒",
    "😎",
    "😉",
    "😢",
    "😜",
    "😃",
    "😄",
    "🥲",
    "🤔",
    "🤨",
    "😣",
    "🙄",
    "😴",
  ];
  const selectedEmojis = EMOTIONS.slice(0, cardCount / 2);
  const duplicatedEmojis = [...selectedEmojis, ...selectedEmojis];
  return duplicatedEmojis.sort(() => Math.random() - 0.5);
}

export default GamePage;
