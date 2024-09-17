import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// Duty Component
const Duty = ({ duty, labels }) => {
  const [showSimplified, setShowSimplified] = useState(true);

  const toggleText = () => {
    setShowSimplified(!showSimplified);
  };

  return (
    <div className="duty mb-3 p-3 border rounded position-relative">
      <h3>{duty.title}</h3>
      <p>{duty.article_clause}</p>
      <p>{showSimplified ? duty.simplified : duty.original}</p>
      <div className="form-check form-switch position-absolute top-0 end-0 me-3 mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={toggleText}
          checked={!showSimplified}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {showSimplified ? labels.original : labels.simplified}
        </label>
      </div>
    </div>
  );
};

function FundamentalDuties() {
  const [simplifiedDuties, setSimplifiedDuties] = useState([]);
  const [originalDuties, setOriginalDuties] = useState([]);
  const [showSimplified, setShowSimplified] = useState(true);

  useEffect(() => {
    const fetchDuties = async () => {
      try {
        const simplifiedResponse = await axios.get('http://localhost:5000/api/simplified-duties');
        const originalResponse = await axios.get('http://localhost:5000/api/original-duties');

        console.log('Simplified Duties:', simplifiedResponse.data);
        console.log('Original Duties:', originalResponse.data);

        setSimplifiedDuties(simplifiedResponse.data);
        setOriginalDuties(originalResponse.data);
      } catch (error) {
        console.error('Error fetching duties:', error);
      }
    };
    fetchDuties();
  }, []);

  return (
    <div className="App container">
      <h1 className="my-4">Fundamental Duties of India</h1>
      {simplifiedDuties.map((duty, index) => {
        const originalDuty = originalDuties.find((od) => od.title === duty.title);
        return (
          <Duty
            key={index}
            duty={{
              ...duty,
              original: originalDuty ? originalDuty.text : '',
              article_clause: duty.article_clause,
            }}
            labels={{ simplified: 'Original', original: 'Simplified' }}
          />
        );
      })}
    </div>
  );
}

export default FundamentalDuties;
