import API from "API";
import { AxiosError } from "axios";
import { HEADERS_DATA } from "config";

export const FindDemandNumByAxe = async () => {
    try {
        // const token = localStorage.getItem("token_jwt")?.toString();
        const token = localStorage.getItem("token_jwt");
        const headers = { ...HEADERS_DATA, token: `${token?.toString()}` };
        const responseStats = await API.get("/statistics/demandByAxes", {
            method: "GET",
            headers,
        });

        if (responseStats.data.data) {
            return {
                response: responseStats.data.data,
                status: 200,
                message: "Operação realizada com sucesso",
            };
        }
        return {
            response: [],
            status: 400,
            message: "Não foi possível realizar a operação",
        };
    } catch (e: any) {
        return {
            response: [],
            status: 404,
            message: "Contate o administrador do sistema",
        };
    }
};

export const FindDemandByCity = async () => {
    try {
        const token = localStorage.getItem("token_jwt");
        const headers = { ...HEADERS_DATA, token: `${token?.toString()}` };
        const responseStats = await API.get("/statistics/demandByCity", {
            method: "GET",
            headers,
        });
        
        if (responseStats.data.data) {
            return {
                response: responseStats.data.data,
                status: 200,
                message: "Operação realizada com sucesso",
            };
        }
        return {
            response: [],
            status: 400,
            message: "Não foi possível realizar a operação",
        };
    } catch (e: any) {
        return {
            response: [],
            status: 404,
            message: "Contate o administrador do sistema",
        };
    }
};
