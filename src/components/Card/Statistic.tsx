/* eslint-disable react/require-default-props */
import React from "react";
import { IPropsGlobal } from "../../interfaces/components.interface";
import { Card } from "../style";

export function StatisticGraph({
  title,
  children,
  width,
  height,
  className,
}: IPropsGlobal) {
  return (
    <Card width={width} height={height} className={className} style={{marginBottom: "20px"}}>
      <div className="container-header">
        <h1 className="title-h2">{title}</h1>
      </div>

      <div className="childrens-statistic" style={{padding: "20px"}}>{children}</div>
    </Card>
  );
}
