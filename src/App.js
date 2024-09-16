// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Preamble from './components/Preamble';
import FundamentalRights from './components/FundamentalRights';
import DirectivePrinciples from './components/DirectivePrinciples';
import FundamentalDuties from './components/FundamentalDuties';
import NavbarComponent from './components/Navbar'; // Import Navbar component
import Home from './components/Home';
import Games from './components/Games';
import Instructions from "./components/Instructions";
import Result from "./components/Result";


import Quiz from './games/quiz';
import PreambleQuiz from './games/PreambleQuiz';
import ConstitutionTrivia from './games/ConstitutionTrivia';
import SpinTheWheel from './games/SpinTheWheel';
import SnakeAndLadder from './games/SnakeAndLadder';
import TwoOpponentQuiz from './games/TwoOpponentQuiz';
import MapMyIndia from './games/MapMyIndia';
import Monopoly from './games/Monopoly';
import LawAndOrderBingo from './games/LawAndOrderBingo';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent /> {/* Include Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/preamble" element={<Preamble />} />
          <Route path="/fundamental-rights" element={<FundamentalRights />} />
          <Route path="/directive-principles" element={<DirectivePrinciples />} />
          <Route path="/fundamental-duties" element={<FundamentalDuties />} />
          <Route path="/result" element={<Result />} />
          
          <Route path="/games/preamble-quiz" element={<PreambleQuiz />} />
          <Route path="/games/constitution-trivia" element={<ConstitutionTrivia />} />
          <Route path="/games/spin-the-wheel" element={<SpinTheWheel />} />
          <Route path="/games/spin-the-wheel/quiz" element={<Quiz />} />
          <Route path="/games/snake-and-ladder" element={<SnakeAndLadder />} />
          <Route path="/games/two-opponent-quiz" element={<TwoOpponentQuiz />} />
          <Route path="/games/map-my-india" element={<MapMyIndia />} />
          <Route path="/games/monopoly" element={<Monopoly />} />
          <Route path="/games/law-and-order-bingo" element={<LawAndOrderBingo />} />
           
          <Route path="/games/spin-the-wheel/instructions" element={<Instructions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
