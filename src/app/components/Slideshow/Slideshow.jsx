import React from 'react';

// Define the array of banner images outside of the component function
const slides = [
  { image: '/vault.jpeg', alt: 'Banner 1' },
  // { image: '/33634617_8084191.jpg', alt: 'Banner 2' },
  // { image: '/33634617_8084191.jpg', alt: 'Banner 3' },
];

// Export the slides array separately
export { slides };

// Export the Slideshow component function directly as default
export default function Slideshow() {
  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === 0 ? 'active' : ''}`}>
          <img src={slide.image} alt={slide.alt}  style={{ width: '900px', height: '500px' }}/>
        </div>
      ))}
    </div>
  );
}








