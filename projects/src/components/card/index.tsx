import React from "react";
import { Link } from "react-router-dom";

interface IPropsCard {
  title: string;
  eixo: number;
  description: string;
  icon: string;
}

export const Card = (props: IPropsCard) => {
  return (
    <div className="item">
      <div className="icon">
        <i className={"fas fa-" + props.icon + " color-secondary"}></i>
      </div>
      <h2 className="color-secondary">{props.title}</h2>
      <h3 className="color-secondary">Eixo {props.eixo}</h3>
      <p>{props.description}</p>
      <a href={`eixos#${props.eixo}`}>
        <button className="btn color-secondary border-secondary">
          Ver mais
        </button>
      </a>
    </div>
  );
};
