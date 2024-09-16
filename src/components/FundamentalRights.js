// src/components/FundamentalRights.js
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const FundamentalRights = () => {
  const [language, setLanguage] = useState('en');

  const rightsContent = {
    en: `Fundamental rights are basic human freedoms that every Indian citizen has the right to enjoy for a proper and harmonious development of personality.`,
    hi: `मौलिक अधिकार वे मौलिक मानव स्वतंत्रताएँ हैं जो प्रत्येक भारतीय नागरिक को अपने व्यक्तित्व के उचित और सामंजस्यपूर्ण विकास के लिए प्राप्त करने का अधिकार है।`
  };

  return (
    <Container className="mt-5" id="fundamental-rights">
      <h2>Fundamental Rights (Part III)</h2>
      <p>{rightsContent[language]}</p>

      {/* Language selection buttons */}
      <Button onClick={() => setLanguage('en')}>English</Button>
      <Button onClick={() => setLanguage('hi')} className="ml-2">Hindi</Button>

      
    </Container>
  );
};

export default FundamentalRights;
