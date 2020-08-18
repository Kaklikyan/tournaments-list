import React from "react";
import PropTypes from "prop-types";
import { generateImageUrl } from "../../../helpers/functions";
import { ReactComponent as DeleteIcon } from '../../../assets/images/delete.svg';
import "./TournamentCard.css";

function TournamentCard({
  title,
  description,
  imagePath,
  onClick,
  isDeletable
}) {
  const imageUrl = generateImageUrl(imagePath);

  return (
    <div
      className="tournament-card__wrapper"
      onClick={!isDeletable ? onClick : () => {}}
    >
      <div className="tournament-card__img-block">
        <img src={imageUrl} className="tournament-card__img" alt={`Logo ${title}`} />
      </div>
      <div className="tournament-card__details-block">
        <div className="details__title" title={title}>
          {title}
        </div>
        <div className="details__description" title={description}>
          {description}
        </div>
      </div>
      {isDeletable && (
        <DeleteIcon
          className="tournament-card__delete"
          onClick={onClick}
        />
      )}
    </div>
  )
}

TournamentCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imagePath: PropTypes.string,
  onClick: PropTypes.func,
  isDeletable: PropTypes.bool
}

export default TournamentCard;