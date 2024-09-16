import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../css/Preamble.css'; // Assuming you have your CSS in this file

const Preamble = () => {
  const [modal, setModal] = useState(null);
  const [language, setLanguage] = useState('english');

  const openModal = (modalId) => {
    console.log('Opening modal:', modalId);
    setModal(modalId);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setModal(null);
  };

  const content = {
    english: {
      heading: ' Preamble of the Constitution of India',
      sovereign: ' Sovereignty means that India is free from any external control, with the power to legislate, govern, and make decisions independently.',
      socialist: ' Socialism emphasizes reducing inequality in society and ensuring that wealth is distributed more equally among citizens.',
      secular: ' Secularism ensures that all religions are treated equally by the state, with no favoritism to any particular religion.',
      democratic: 'Democracy means that the people have the power to elect their representatives and have a voice in governance.',
      republic: 'Republic means that the head of the state is elected, not a hereditary monarch.',
      justice: 'JUSTICE,',
      liberty: ' LIBERTY ',
      equality: ' EQUALITY ',
      fraternity: ' FRATERNITY,',
      constitution: 'IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.',
      
    },
    hindi: {
      heading: 'भारत के संविधान की प्रस्तावना',
      sovereign: 'सार्वभौमिकता का अर्थ है कि भारत किसी बाहरी नियंत्रण से मुक्त है, और स्वतंत्र रूप से कानून, शासन और निर्णय लेने की शक्ति रखता है।',
      socialist: 'समाजवाद समाज में असमानता को कम करने और नागरिकों के बीच संपत्ति का समान वितरण सुनिश्चित करने पर जोर देता है।',
      secular: 'धर्मनिरपेक्षता यह सुनिश्चित करती है कि राज्य सभी धर्मों के साथ समान व्यवहार करे, और किसी भी धर्म का पक्ष न ले।',
      democratic: 'लोकतंत्र का अर्थ है कि लोगों को अपने प्रतिनिधियों का चुनाव करने और शासन में अपनी आवाज रखने की शक्ति है।',
      republic: 'गणराज्य का अर्थ है कि राज्य का प्रमुख वंशानुगत सम्राट नहीं है, बल्कि वह चुना गया होता है।',
      justice: 'न्याय, सामाजिक, आर्थिक और राजनीतिक;',
      liberty: 'विचार, अभिव्यक्ति, विश्वास, धर्म और उपासना की स्वतंत्रता;',
      equality: 'स्थिति और अवसर की समानता;',
      fraternity: 'व्यक्ति की गरिमा और राष्ट्र की एकता और अखंडता को सुनिश्चित करते हुए बंधुत्व;',
      constitution: 'हमारे संविधान सभा में इस छब्बीस नवंबर, १९४९ को हम इस संविधान को अंगीकृत, अधिनियमित और आत्मार्पित करते हैं।',
      
    },
  };

  return (
    <Container className="mt-5">

      <div className="language-switch">
        <button onClick={() => setLanguage('english')}>English</button>
        <button onClick={() => setLanguage('hindi')}>Hindi</button>
      </div>

      <div className="preamble-container">
        <h1>{content[language].heading}</h1>
        <p>
          <span>{language === 'english' ? 'WE, THE PEOPLE OF INDIA' : 'हम, भारत के लोग'}</span>, 
          having solemnly resolved to constitute India into a 
          <span className="clickable" onClick={() => openModal('sovereign')}>
            {language === 'english' ? 'SOVEREIGN' : 'सार्वभौमिक'}
          </span>, 
          <span className="clickable" onClick={() => openModal('socialist')}>
            {language === 'english' ? 'SOCIALIST' : 'समाजवादी'}
          </span>, 
          <span className="clickable" onClick={() => openModal('secular')}>
            {language === 'english' ? 'SECULAR' : 'धर्मनिरपेक्ष'}
          </span>, 
          <span className="clickable" onClick={() => openModal('democratic')}>
            {language === 'english' ? 'DEMOCRATIC' : 'लोकतांत्रिक'}
          </span>, 
          <span className="clickable" onClick={() => openModal('republic')}>
            {language === 'english' ? 'REPUBLIC' : 'गणराज्य'}
          </span>.
        </p>

        <p>{content[language].constitution}</p>
      </div>

      {/* Modals */}
      {modal === 'sovereign' && <Modal title={language === 'english' ? 'Sovereign' : 'सार्वभौमिक'} content={content[language].sovereign} closeModal={closeModal} />}
      {modal === 'socialist' && <Modal title={language === 'english' ? 'Socialist' : 'समाजवादी'} content={content[language].socialist} closeModal={closeModal} />}
      {modal === 'secular' && <Modal title={language === 'english' ? 'Secular' : 'धर्मनिरपेक्ष'} content={content[language].secular} closeModal={closeModal} />}
      {modal === 'democratic' && <Modal title={language === 'english' ? 'Democratic' : 'लोकतांत्रिक'} content={content[language].democratic} closeModal={closeModal} />}
      {modal === 'republic' && <Modal title={language === 'english' ? 'Republic' : 'गणराज्य'} content={content[language].republic} closeModal={closeModal} />}

    </Container>
  );
};

function Modal({ title, content, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Preamble;
