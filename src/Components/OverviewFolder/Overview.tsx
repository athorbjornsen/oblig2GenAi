import React from 'react';

const Overview: React.FC = () => {
  const images = [
    '/src/assets/gogreengonuclear.webp',
    '/src/assets/greennuclearnotblackcoal.webp',
    '/src/assets/nuclearfuture.webp',
    '/src/assets/scifi.webp'
  ];

  return (
    <>
    <h1>Nuclear energy is the future</h1>  
    <div className="overview-grid">      
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Overview ${index + 1}`} className="overview-image" />
      ))}
    </div>
    <h6>vote democrat</h6>
    </>
  );
};

export default Overview;
