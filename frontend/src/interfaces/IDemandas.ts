export interface IDemandas {
  id: string;
  name: string;
  description: string;
  progress?: IProgress;
  author?: string;
  updated: string;
  priority?: string;
  budget?: IBudget;
  objective?: IObjective;
}

interface IObjective {
  general: Array<string>;
  specific: Array<string>;
}

interface IBudget {
  value: number;
  createdAt: string;
  cityApplied: string;
  area: Array<string>;
  finish: IPeriod;
  numberInvolved: number;
}
interface IProgress {
  status: string;
  total: number;
  step: Array<IStep>;
}

interface IStep {
  modify: string;
  author: string;
  finish: IPeriod;
  date: string;
}

interface IPeriod {
  period: string;
  time: number;
}
