import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, urls, alt_description }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={urls.small}
          largeImageURL={urls.regular}
          alt={alt_description}
          onImageClick={onImageClick}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
        regular: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
