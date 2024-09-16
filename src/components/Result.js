import React from "react";
import Confetti from "react-confetti";
import { useLocation, useNavigate } from "react-router-dom";  // Import useNavigate
import "../css/results.css";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Initialize useNavigate hook
  const { finalScore } = location.state;

  // Function to handle "Play Again" button click
  const handlePlayAgain = () => {
    // Redirect back to the spin wheel page (Page2)
    navigate("/games", {
      state: { spinsLeft: 5, score: 0 },  // Reset spins and score
    });
  };

  return (
    <div className="result-wrapper">
      {finalScore === 5 ? (
        <>
          <h1 className="marvelous">Marvelous!</h1>
          <Confetti className="confetti" />
          <div className="scoreboard-container">
            <h1>Your Score</h1>
            <p className="final-score">{finalScore}/5</p>
          </div>
        </>
      ) : (
        <div className="scoreboard-container">
          <h1>Your Score</h1>
          <p className="final-score">{finalScore}/5</p>
        </div>
      )}
      {/* Add onClick event to handle play again */}
      <button className="button" onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default Result;
