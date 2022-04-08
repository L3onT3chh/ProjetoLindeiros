/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { fuctionsImg } from "assets/img";

interface IEquipeTec {
  id?: number;
  name: string;
  change: string;
  local: string;
}

const CardPeople = (user: IEquipeTec) => {
  const changes = fuctionsImg.default.filter(
    (item) => item.sigle === user.change && item
  )[0];

  return (
    <div className="item">
      <img src={changes.change} width={60} />
      <h2>{user.name}</h2>
      <h3>{changes.description}</h3>
      <h4>{user.local}</h4>
    </div>
  );
};

export default CardPeople;
