import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../css/quiz.css";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { topic, spinsLeft, score } = location.state;  // Retrieve state from location

  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    // Fetch questions from the backend API
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/questions/${topic}`);
        const questions = response.data;
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        setCurrentQuestion(randomQuestion);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestion();
  }, [topic]);

  const handleSubmit = () => {
    if (!selectedOption) {
      setError("Please select an option!");
      return;
    }

    const correctAnswer = currentQuestion.answer;
    const updatedScore = selectedOption === correctAnswer ? score + 1 : score;

    if (spinsLeft - 1 === 0) {
      // Redirect to result page if no spins are left
      navigate("/result", {
        state: { finalScore: updatedScore },
      });
    } else {
      // Redirect back to the wheel for the next spin
      navigate("/games/spin-the-wheel", {
        state: { spinsLeft: spinsLeft - 1, score: updatedScore },
      });
    }
  };

  if (!currentQuestion) {
    return <div>Loading...</div>; // In case the question is not yet selected
  }

  return (
    <div className="quiz-wrapper">
      <h2>Topic: {topic}</h2>
      <h3>{currentQuestion.question}</h3>
      <div className="options">
        {JSON.parse(currentQuestion.options).map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={option}
              name="option"
              value={option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
