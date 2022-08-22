/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Card } from "components/style";
import { IPropsGlobal } from "interfaces/components.interface";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";

export function CardPropostas({
  name,
  datePublished,
  description,
  icon,
  author,
  className,
}: IPropsGlobal) {
  return (
    <Card
      width="540px"
      height="120px"
      className={className}
      background="#1B4977"
      active
      margin
    >
      <div className="btns-card">
        <CgCloseO size={26} color="red" />
        <span> </span>
        <AiOutlineCheckCircle size={26} color="green" />
      </div>
      <div className="container-card">
        <div className="content-left">
          <img src={icon} alt="icon" />
        </div>
        <div className="content-right">
          <h1
            className="title-h1-card title-h1 b-white"
            style={{ fontSize: 21, marginTop: 10, marginBottom: 10 }}
          >
            {name}
          </h1>
          <h1 className="title-h1-card b-white">
            <b>Realizada em:</b> {datePublished}
          </h1>
          <p className="title-h1-card b-white">
            {description?.substring(0, 100)}
          </p>
          <div className="content-author b-white">
            <span className="author-div">
              <b>Feito por:</b> {author}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
