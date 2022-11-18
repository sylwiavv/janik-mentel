import React, { useCallback, useEffect, useState } from 'react';
import './WspGallery.css';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import CloseIcon from '../icons/CloseIcon';

const WSPGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
    toggleBodyScroll();
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') { handleCloseModal(); }
    if (event.key === 'ArrowRight') { nextSlide(); }
    if (event.key === 'ArrowLeft') { prevSlide(); }
  }, [slideNumber]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [slideNumber]);

  // TODO make it more reusal
  const toggleBodyScroll = () => {
    setOpenModal(!openModal);
    document.body.classList.remove('not-scroll');

    if (!openModal) {
      document.body.classList.add('not-scroll');
    }
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>

      {openModal
                && (
                <div className="sliderWrap">
                  <CloseIcon className="btnClose" onClick={handleCloseModal} />
                  <ArrowLeftIcon height="40px" className="btnPrev" onClick={prevSlide} />
                  <ArrowRightIcon height="40px" className="btnNext" onClick={nextSlide} />
                  <div className="fullScreenImage">
                    <img src={galleryImages[slideNumber]} alt="" />
                  </div>
                </div>
                )}

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className="galleryWrap">
        {
                    galleryImages && galleryImages.map((slide, index) => (
                      <div
                        className="single"
                        key={index}
                        onClick={() => handleOpenModal(index)}
                      >
                        <img src={slide} alt="" />
                      </div>
                    ))
                }
      </div>

    </div>
  );
};

export default WSPGallery;
