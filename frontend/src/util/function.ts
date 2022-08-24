export const splitTitle = (text: string) => {
  const textSplit = text.split(" ");

  return textSplit
    .map((item, index) => (index <= 2 ? item : ""))
    .toString()
    .replaceAll(",", " ");
};

// export const formatKey = (datas: any[]) => {
// datas.map((item, index) => item.name, )
// };
