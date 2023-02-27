const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

export const GetMonth = (num: number) => {
    if(num < 1 || num > 12) {
        num = 1;
    }

    return meses[num];
}