import React, { useState } from 'react';

import './TakeAwayCard.css';

import More from '../Assets/more-mayo.png';

function TakeAwayCard({ name, calories, sugar, imgUrl }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [more, setMore] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }

  function handleClickAdded() {
    setIsAdded(!isAdded);
  }

  function handleClickFlip() {
    setMore(!more);
  }

  return (
    <div className="TakeAway-Card">
      <div className="TakeAway-img-container">
        {more ? (
          <div className="TakeAway-front">
            <img src={imgUrl} alt={name} className="TakeAway-card-image" />
            <button className="TakeAway-material-icons-outlined" id={isFavorite ? 'isFavorite' : 'notFavorite'} onClick={handleClickFavorite}>
              star
            </button>
            <button className="TakeAway-material-icons-outlined" id={isAdded ? 'isAdd' : 'notAdd'} onClick={handleClickAdded}>
              bookmark_add
            </button>
            <button className="TakeAway-btn-more" onClick={handleClickFlip}>
              <img src={More} alt="more" />
            </button>
          </div>
        ) : (
          <div className="TakeAway-back">
            <div className="TakeAway-desc-back">
              <h2 className="TakeAway-desc-title">{name}</h2>
              <div className="TakeAway-desc-details">
                <div className="TakeAway-desc-details-li">Calories: {calories}Kcal</div>
                <div className="TakeAway-desc-details-li">Sugar: {sugar}</div>
              </div>
            </div>
            <button className="TakeAway-material-icons-outlined" id="btn-close" onClick={handleClickFlip}>
              cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TakeAwayCard;
