import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

export const Slider = ({ index, handleSelect, slider }) => (
  <Carousel activeIndex={index} onSelect={handleSelect} fade className="w-100">
    {slider.map(({ id, url }) => (
      <Carousel.Item key={id}>
        <img src={url} alt="SLider image" loading="lazy" />
      </Carousel.Item>
    ))}
  </Carousel>
);

Slider.propTyopes = {
  index: PropTypes.number,
  handleSelect: PropTypes.func,
  slider: PropTypes.node,
};
