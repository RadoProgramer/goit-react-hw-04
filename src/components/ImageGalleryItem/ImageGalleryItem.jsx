import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

function ImageGalleryItem({ webformatURL, largeImageURL, onImageClick, alt }) {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onImageClick(largeImageURL)}>
      <img src={webformatURL} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
