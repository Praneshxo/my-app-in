import React, { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';
import dataArray from './data'; // Assuming your data is imported from data.js

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % dataArray.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + dataArray.length) % dataArray.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Parent <span style={{ color: '#F69494' }}>Speak</span></h1>
        <img src='./images/line.svg' className='line'/>
        <p>Read what parents love about our play school and how it positively <br></br>impacts their children's growth.</p>
      </header>
      <div className='home'>
        <div className="navigation">
          <button className='left' onClick={handlePrev}>◀</button>
          <button className='right' onClick={handleNext}>▶</button>
        </div>
        <div className='containner'>
          <MyComponent index={index} /> 
        </div>
      </div>
      <footer className='footer'>
        <div className="footer-container">
          
          <div className="footer-section">
            <img src="./images/footer-logo.png" alt="Agape Garden Logo" className="footer-logo" />
            <div className="footer-social-icons">
              <img src='./images/facebok.webp'className="fac"/>
              <img src='./images/youtube.webp'className="yt"/>
              <img src='./images/insta.webp'className="insta"/>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Address</h4>
            <p>No 301, 12th Street, Viduthalai Nagar, Chennai - 600091 (Behind Nilgiris)</p>
            <h4>Timings</h4>
            <p>Mon - Fri: 8:00 am - 8:00 pm</p>
            <p>Sat - Sun: Closed</p>
          </div>
          
          <div className="footer-section">
            <h4>Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=your_map_embed_link_here"
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
        <div className="footer-bottom">
          <hr></hr>
          <p>Copyright © Agape Garden. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
