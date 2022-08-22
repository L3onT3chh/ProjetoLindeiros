export interface SContainerProps {
  width?: string;
  height?: string;
  background?: string;
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
  loading: boolean;
  error: string;
}

export interface IFilters {
  type: string;
  local: string;
  city: string;
  order: string;
}
