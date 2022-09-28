import { IResponseData } from "interfaces/global.interface";

export interface IDemand {
  id: string;
  name: string;
  progress: number;
  description: string;
  cover: string;
  createdAt: string;
  priority: string;
  status: number;
  Objective: IObjective;
  Axes: IAxes;
  Cities: ICities;
  Proposal: IProposal[];
}

export interface IDemandPost {
  name: string;
  description: string;
  priority: string;
  generalText: string;
  specificText: string;
  city_id: string;
  axes_id: string;
}

export interface IObjective {
  id: string;
  general: string;
  SpecificText: {
    text: string;
  };
}

export interface IAxes {
  id: string;
  name: string;
  sigle: string;
}

export interface ICities {
  id: string;
  name: string;
  state: string;
  uf: string;
}

export interface IProposalPost {
  time: string[];
  description: string;
  value: number;
  deadline: string;
  priority: string;
  demands_id?: string;
}

export interface IProposal {
  id: string;
  description: string;
  priority: string;
  isAproved: string;
  Details: IDetails;
}

export interface IDetails {
  id: string;
  value: number;
  deadline: string;
  numberInvolved: number;
}

export interface IDataDemand extends IResponseData {
  demand: IDemand[];
}

export interface IDataProposal extends IResponseData {
  proposal: IProposal[];
}
