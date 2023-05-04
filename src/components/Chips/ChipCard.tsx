/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { ContainerChipCard } from "../style";
import { BiMinus, BiPlus } from "react-icons/bi";

export function ChipCard({ text, optionsMenu, Icon }: IPropsGlobal) {
  const [content, setContent] = useState(false);
  return (
    <ContainerChipCard>
      <div className="content-body-painel">
        <Icon />
        <h2 className="title-h2">{text}</h2>
        <button onClick={() => setContent(!content)}>
          {!content ? (<BiPlus size={20} color="#fff" />) : (<BiMinus size={20} color="#fff" />)}
        </button>
      </div>
      <div className="content-options-painel" style={{ display: (content) ? "block" : "none" }}>
        {optionsMenu?.map((item, index) =>
          item.subitems && item.subitems.length > 0 ? (
            <span key={index}>
              <h5 className="" key={item.title}>
                {item.title}
              </h5>
              {item.subitems.map((item2: any) => (
                <>
                  {item2.extern && (
                    <a href={item2.url} target="_blank" className="subitens-h5 subtitle-p">{item2.name}</a>
                  )}
                  {!item2.extern && (
                    <Link
                      to={`/${item2.url}`}
                      key={item2.name}
                      className="subitens-h5 subtitle-p"
                    >
                      {item2.name}
                    </Link>
                  )}
                </>
              ))}
            </span>
          ) : item.activePopUp ? (
            <button
              key={item.title}
              className="btn-popUp subtitle-p"
              onClick={() => item.setTrigger(item.trigger)}
              style={{ marginTop: (item.title === "Meu perfil") ? '5px' : '' }}
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
