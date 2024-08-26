import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

function Modal({ largeImageURL, onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
