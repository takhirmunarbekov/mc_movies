import React from "react";
import { Link } from "react-router-dom";

const Slider = ({ title, items, showMoreLink = '/' }) => {
  return (
    <div className="slider">
      <div className="slider__title">
        <h2>{title}</h2>
        <Link to={showMoreLink}>Показать больше</Link>
      </div>
      <div className="slider__list">
        {items.map((item) => (
          <div className="slider__item">
            <img
              src={process.env.REACT_APP_POSTER_IMG + item.poster_path}
              alt={item.title}
            />
            <div className="slider__item-title">{item.title || item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
