/* eslint-disable array-callback-return */
import { IDemand } from "interfaces/data/demand.interface";
import { IOptions } from "../interfaces/components.interface";

export const splitTitle = (text: string) => {
  const textSplit = text.split(" ");

  return textSplit
    .map((item, index) => (index <= 2 ? item : ""))
    .toString()
    .replaceAll(",", " ");
};

export const formatKeyTypes = (datas: any[], paramsExtra?: {}) => {
  const newData: IOptions[] = [];
  datas.map((item, index) => {
    // if (datas !== undefined) {
    if (typeof item === "object") {
      newData.push({
        id: item.id,
        name: item.name,
        ...paramsExtra,
      });
    } else {
      newData.push({
        id: index.toString(),
        name: item,
        ...paramsExtra,
      });
    }
  });
  return newData;
};

export const mergeArray = (aB: IDemand[], bB: IDemand[]) => {
  const output = [];

  if (aB.length > bB.length) {
    output.push(aB.filter((item) => bB.map((item2) => item2.id !== item.id)));
  } else {
    output.push(bB.filter((item) => aB.map((item2) => item2.id !== item.id)));
  }
  return output;
};

export const isValid = (value: string) => {
  return value !== "" || value !== undefined;
};
