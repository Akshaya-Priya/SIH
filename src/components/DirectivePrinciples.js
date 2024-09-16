// src/components/DirectivePrinciples.js
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const DirectivePrinciples = () => {
  const [language, setLanguage] = useState('en');

  const principlesContent = {
    en: `The Directive Principles of State Policy are guidelines for the framing of laws by the government.`,
    hi: `राज्य के नीति निदेशक तत्व सरकार द्वारा कानूनों के निर्माण के लिए मार्गदर्शक हैं।`
  };

  return (
    <Container className="mt-5" id="directive-principles">
      <h2>Directive Principles (Part IV)</h2>
      <p>{principlesContent[language]}</p>

      {/* Language selection buttons */}
      <Button onClick={() => setLanguage('en')}>English</Button>
      <Button onClick={() => setLanguage('hi')} className="ml-2">Hindi</Button>

    </Container>
  );
};

export default DirectivePrinciples;
