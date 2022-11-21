import React, { useCallback, useEffect, useState } from 'react';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import CloseIcon from '../icons/CloseIcon';
import { FullScreenImage, GalleryWrapper, SliderWrapper } from './WpsGallery.styles';
import ArrowShortLeft from '../icons/ArrowShortLeft';
import ArrowShortRight from '../icons/ArrowShortRight';

const WSPGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // Open Modal
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
    document.body.classList.add('not-scroll');
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') { handleCloseModal(); }
    if (event.key === 'ArrowRight') { nextSlide(); }
    if (event.key === 'ArrowLeft') { prevSlide(); }
  }, [slideNumber]);

  // Keydown
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [slideNumber]);

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.classList.remove('not-scroll');
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
    <>
      {openModal && (
        <SliderWrapper>
          <CloseIcon className="btnClose" onClick={handleCloseModal} />
          <ArrowShortLeft height="40px" color="pink" className="btnPrev" onClick={prevSlide} />
          <ArrowShortRight height="40px" className="btnNext" onClick={nextSlide} />
          <FullScreenImage>
            <img src={galleryImages[slideNumber]} alt="" />
          </FullScreenImage>
        </SliderWrapper>
      )}

      {/* /!* <br /> */}
      {/* <br /> */}
      {/* Total Slides: {galleryImages.length} */}
      {/* <br /><br /> *!/ */}

      <GalleryWrapper>
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
      </GalleryWrapper>
    </>
  );
};

export default WSPGallery;
