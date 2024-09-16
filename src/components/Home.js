import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <div>
      <Carousel className="carousel-container mt-5">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="./images/slide1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          <h3>Simplify the Constitution</h3>
          <p>Learn about your rights and duties in simple language.</p>
          <Link to="/constitution">
              <Button className="carousel-btn btn-none">learn More</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="./images/slide2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Play Educational Games</h3>
            <p>Engage in interactive games to learn about the Constitution.</p>
            <Link to="/games">
              <Button className="carousel-btn btn-none">Play Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="./images/slide3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Chat with Our Assistant</h3>
            <p>Get quick legal insights from our intelligent chatbot.</p>
            <Link to="/chatbot">
              <Button className="carousel-btn btn-none">Ask Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className="mt-5">Constituional Overview</h1>
      <div className="button-container">
        <Link to="/preamble">
          <button className="styled-button preamble-button">Preamble</button>
        </Link>
        <Link to="/fundamental-rights">
          <button className="styled-button rights-button">Funsamental Rights</button>
        </Link>
        <Link to="/directive-principles">
          <button className="styled-button principles-button">Directive Principles</button>
        </Link>
        <Link to="/fundamental-duties">
          <button className="styled-button duties-button">Fundamental Duties</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
