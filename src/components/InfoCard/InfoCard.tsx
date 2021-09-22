import React from "react";

import { CharTypes } from "../../types";
import "./InfoCard.scss";

interface Props {
  info: CharTypes;
}

const InfoCard = ({ info }: Props) => {
  return (
    <div className="card-container">
      <p className="card-container__info">{info.name}</p>
      <p className="card-container__info">{info.birth_year}</p>
      <p className="card-container__info">{info.mass}kg</p>
      <p className="card-container__info">{info.height}cm</p>
    </div>
  );
};

export default InfoCard;
