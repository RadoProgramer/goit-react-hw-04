import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");

  const fetchImages = async () => {
    setIsLoading(true);
    const ACCESS_KEY = "YAElATVDdu2PtEINTMmGSWcb18yh30LBpcUE7HY49oo";
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}&per_page=12`;

    try {
      const response = await axios.get(URL);
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query !== "") {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (url) => {
    setLargeImageURL(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImageURL("");
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
