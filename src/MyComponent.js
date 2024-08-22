import React, { useState } from 'react';
import dataArray from './data'; 

function MyComponent({ index }) {
  const data = dataArray[index];

  return (
    <div className="container">
      <img src={data.image} alt="Image" className='image'/>
      <p className='para'>{data.paragraph}</p>
      <h1 className='name'>{data.heading}</h1>
      <div className='rating'>
      {Array(Number(data.rating)).fill().map((_, index) => (
    <span key={index}>⭐️</span>
  ))}
</div>
   
    </div>
  );
}

export default MyComponent;
