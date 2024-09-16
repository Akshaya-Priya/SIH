// src/components/FundamentalDuties.js
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const FundamentalDuties = () => {
  const [language, setLanguage] = useState('en');

  const dutiesContent = {
    en: `Fundamental Duties are the moral obligations of all citizens to help promote a spirit of patriotism and to uphold the unity of India.`,
    hi: `मौलिक कर्तव्य सभी नागरिकों के नैतिक दायित्व हैं, जो देशभक्ति की भावना को बढ़ावा देने और भारत की एकता को बनाए रखने में मदद करते हैं।`
  };

  return (
    <Container className="mt-5" id="fundamental-duties">
      <h2>Fundamental Duties (Part IV-A)</h2>
      <p>{dutiesContent[language]}</p>

      {/* Language selection buttons */}
      <Button onClick={() => setLanguage('en')}>English</Button>
      <Button onClick={() => setLanguage('hi')} className="ml-2">Hindi</Button>

      
    </Container>
  );
};

export default FundamentalDuties;
