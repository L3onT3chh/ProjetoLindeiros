/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { Link } from "react-router-dom";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerChipCard } from "../style";

export function ChipCard({ text, optionsMenu, icon }: IPropsGlobal) {
  return (
    <ContainerChipCard>
      <div className="content-body-painel">
        <img src={icon} alt="icon" />
        <h2 className="title-h2">{text}</h2>
      </div>
      <div className="content-options-painel">
        {optionsMenu?.map((item, index) =>
          item.subitems && item.subitems.length > 0 ? (
            <span key={index}>
              <h5 className="" key={item.title}>
                {item.title}
              </h5>
              {item.subitems.map((item2) => (
                <Link
                  to={`/${item2.url}`}
                  key={item2.name}
                  className="subitens-h5 subtitle-p"
                >
                  {item2.name}
                </Link>
              ))}
            </span>
          ) : item.activePopUp ? (
            <button
              key={item.title}
              className="btn-popUp"
              onClick={() => item.setTrigger(item.trigger)}
            >
              {item.title}
            </button>
          ) : (
            <Link to={`/${item.urlMain}`} key={index} className="subtitle-p">
              {item.title}
            </Link>
          ),
        )}
      </div>
    </ContainerChipCard>
  );
}
