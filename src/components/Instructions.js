// src/components/Instructions.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/games/spin-the-wheel", { state: { spinsLeft: 5, score: 0 } });  // Start the game with 5 spins and 0 score
  };

  return (
    <div className="instructions">
      <h2>Game Instructions</h2>
      <p>Welcome to the educational spin-the-wheel game!</p>
      <ul>
        <li>You will get 5 spins to explore different topics related to the Constitution.</li>
        <li>Each spin will select a random topic and direct you to a quiz.</li>
        <li>Answer the quiz questions to score points.</li>
        <li>After completing all 5 spins, your final score will be displayed.</li>
      </ul>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

export default Instructions;
