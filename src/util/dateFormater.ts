import { GetMonth } from "./getMonth";

export const dataFormat = (data: string) => {
    let format = new Date(data);
    let formatString = format.toLocaleDateString("pt-BR").split("/");
    let text = `${formatString[0]} de ${GetMonth(parseInt(formatString[1]))}, ${formatString[2]}`;

    return text;
}