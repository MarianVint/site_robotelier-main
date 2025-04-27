import React, { useState } from 'react';
import './Gallery.css';
import gallery_1 from '../../assets/gallery_1.jpg';
import gallery_2 from '../../assets/gallery_2.jpg';
import gallery_3 from '../../assets/gallery_3.jpg';
import gallery_4 from '../../assets/gallery_4.jpg';
import white_arrow from '../../assets/white-arrow.png';

const images = [gallery_1, gallery_2, gallery_3, gallery_4];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='gallery_container' id="gallery">
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className='gallery-img'
            onClick={() => openModal(index)} // Open modal on click
          />
        ))}
      </div>
      <br />
      <a href="https://ie.utcluj.ro/electrocamp.html">
        <button className='button dark-btn'>
          Vezi mai multe <img src={white_arrow} alt="Arrow" />
        </button>
      </a>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>X</button>
            <img
              src={images[selectedImageIndex]}
              alt={`Gallery Image ${selectedImageIndex + 1}`}
              className="modal-image"
            />
            <button className="prev-btn" onClick={showPrevImage}>❮</button>
            <button className="next-btn" onClick={showNextImage}>❯</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;