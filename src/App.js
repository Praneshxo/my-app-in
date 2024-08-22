import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import dataArray from './data';


function MyComponent() {
  const dataArray = [
    {
      image: './images/man1.jpg',
      paragraph: 'Agape  Garden has been a fantastic choice for our son. He loves going to  school every day, thanks to the caring teachers and caregivers. Weve  seen great improvements in his social skills, activities, and academics.  Huge thanks to all the teachers, especially Angel Priya, Amala and  Anita for their exceptional dedication.',
      heading: 'Pranesh'
    },
    {
      image: 'https://example.com/image2.jpg',
      paragraph: 'Paragraph for image 2.',
      heading: 'Heading 2'
    },
    // Add more data objects as needed
  ];
  
  const [data, setData] = useState(dataArray[0]);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    const newIndex = (index + 1) % dataArray.length;
    setData(dataArray[newIndex]);
    setIndex(newIndex);
  };

  return (
    <div className="container">
      <img src={data.image} alt="Image" className='image'/>
      <p className='para'>{data.paragraph}</p>
      <h1 className='name'>{data.heading}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Parent <span style={{ color: '#F69494' }}>Speak</span></h1>
        <img src='./images/line.svg' className='line'/>
        <p>Read what parents love about our play school and how it positively <br></br>impacts their children's growth.</p>
      </header>
      <div className='home'>
      <div className="navigation">
          <button className='left'  >◀</button>
          <button className='right' >▶</button>
        </div>
      <div className='containner'>
        <MyComponent /> 
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
