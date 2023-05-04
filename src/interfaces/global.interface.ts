export interface SContainerProps {
  width?: string;
  height?: string;
  background?: string;
  backgroundColor?: string;
  color?: string;
  colorT?: string;
  shadow?: string;
  font?: string;
  top?: string;
  bold?: boolean;
  border?: string;
  margin?: boolean;
  icon?: string;
  active?: boolean;
  borderRadius?: string;
}

export interface IResponseData {
  message?: string;
  loading: boolean;
  error: string;
  qtd?: number;
  offset?: number;
}

export interface IDataState {
  data: Array<any>;
  loading: boolean;
  clicked?: string;
}

export interface INotification {
  message: string;
  duration: number;
  level: "success" | "error";
}

export interface ISystemNotify {
  id: string;
  createdAt: string;
  user_id: string;
  sender_id: string;
  visited: string;
  sendername?: string;
}

export interface IFilters {
  type: string;
  local: string;
  city: string;
  order: string;
}
