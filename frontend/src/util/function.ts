/* eslint-disable array-callback-return */
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
