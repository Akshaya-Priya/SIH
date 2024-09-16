import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/gameComponent.css';

const Games = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h2>Educational Games</h2>
      <p>Explore different games that help you learn about the Constitution.</p>
      <div className="game-buttons-container">
        <button onClick={() => navigateTo('/games/preamble-quiz')}>Preamble Quiz</button>
        <button onClick={() => navigateTo('/games/constitution-trivia')}>Constitution Trivia</button>
        <button onClick={() => navigateTo('/games/spin-the-wheel/instructions')}>Spin the Wheel</button>
        <button onClick={() => navigateTo('/games/snake-and-ladder')}>Snake and Ladder</button>
        <button onClick={() => navigateTo('/games/two-opponent-quiz')}>Two Opponent Quiz</button>
        <button onClick={() => navigateTo('/games/map-my-india')}>Map My India</button>
        <button onClick={() => navigateTo('/games/monopoly')}>Monopoly</button>
        <button onClick={() => navigateTo('/games/law-and-order-bingo')}>Law and Order Bingo</button>
      </div>
    </div>
    
  );
};

export default Games;
