/* eslint-disable react-hooks/rules-of-hooks */
import API from "API";
import { findAllDemands } from "API/Demand/find.demand";
import { AxiosError } from "axios";
import { HEADERS_DATA, TokenUser } from "config";
import { IDemand, IDemandPost } from "interfaces/data/demand.interface";

const RegisterDemand = async (demandSave: IDemandPost) => {
  try {
    const token = TokenUser();
    console.log(token);
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const Demand = await API("/demand", {
      headers,
      method: "POST",
      data: demandSave,
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);
    console.log(Demand);
    if (Demand.isValid) {
      const responseData: IDemand[] = [];
      try {
        responseData.push(await findAllDemands());
      } catch (e) {
        responseData.push();
      }
      return {
        response: responseData[0],
        dataRequest: demandSave.name,
        status: 200,
        message: "Demanda registrada com sucesso!",
      };
    }
    return {
      response: "",
      status: 400,
      message: "Tente novamente mais tarde",
    };
  } catch (err: any) {
    return {
      response: "",
      status: 404,
      message: "Contate o administrador do sistema",
    };
  }
};

export const DeleteDemand = async (id: string) => {
  try {
    const token = TokenUser();
    const headers = { ...HEADERS_DATA, token: `${token}` };
    const DemandDell = await API(`/demand/${id}`, {
      headers,
      method: "DELETE",
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);

    if (DemandDell.isValid) {
      return {
        status: 200,
        message: "Demanda removido com sucesso",
        idRemove: id,
      };
    }
    return {
      status: 400,
      message: "Tente novamente mais tarde",
    };
  } catch (err: any) {
    return {
      status: 404,
      message: "Contate o administrador do sistema",
    };
  }
};

export default {
  create: RegisterDemand,
  delete: DeleteDemand,
};
