import { IResponseData } from "interfaces/global.interface";

export interface Item {
    name: string;
    qtd: string;
}

export interface IfindDemandNumByAxe {
    statistics: Item[]
}
