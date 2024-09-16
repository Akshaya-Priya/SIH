import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/SpinTheWheel.css";

const SpinTheWheel = () => {
  const navigate = useNavigate();

  const handleClick = () => {
        navigate('/path'); // Navigate to a new path
  };

  const location = useLocation();

  // Retrieve spinsLeft and score from the state, with fallback values
  const spinsLeft = location.state?.spinsLeft ?? 5;  // Default 5 spins if state is undefined
  const score = location.state?.score ?? 0;  // Default score to 0 if undefined

  const topics = [
    "Fundamental Rights",
    "Directive Principles",
    "Preamble",
    "Union and States",
    "Emergency Provisions",
    "Amendments",
  ];

  const audio = new Audio("/sounds/spinSound.mp3");  // Load spin sound

  // Function to start spinning the wheel
  const startRotation = () => {
    audio.play();  // Play the spin sound
    const sectorDecider = Math.floor(Math.random() * topics.length);  // Randomly decide the topic
    const turns = Math.floor(Math.random() * 10 + 1) +1-( 0.16667 * sectorDecider);

    const image = document.getElementById("spinImage");
    image.style.transition = `all 2.5s`;
    image.style.transform = `rotate(${turns}turn)`;
    
    console.log(topics[sectorDecider], turns);
    // After the rotation animation ends, redirect to quiz page with the selected topic
    setTimeout(() => {
    audio.pause();  // Pause the spin sound
    navigate("/games/spin-the-wheel/quiz", {
      state: { topic: topics[sectorDecider], spinsLeft, score },
    });
  }, 3000);
  };

  return (
    <div className="div-wrapper">
      <h2>Spins Left: {spinsLeft}</h2> {/* Display remaining spins */}
      <h3>Score: {score}</h3>  {/* Display current score */}
      
      <div className="spinWheel">
        <img className="needle" src="/images/Union.png" alt="needle" />
        <img className="spinner" id="spinImage" src="/images/wheel.png" alt="spinner" />
      </div>
      <div className="btn">
        <button onClick={startRotation} disabled={spinsLeft === 0}>
          {spinsLeft > 0 ? "SPIN" : "No more spins"}
        </button>
      </div>
    </div>
  );
};

export default SpinTheWheel;
