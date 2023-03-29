export const apiUrl = 'https://api-governanca.lindeiros.org.br';
export const url = 'https://governanca.lindeiros.org.br/';

export const allowedExt = [
  'application/pdf', 
  'image/png', 
  'image/jpeg', 
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

export const maxUploadSize = 2 * 1024 * 1024; // 2MB

export const TokenUser = () => {
  const token = localStorage.getItem("token_jwt");
  return token?.replaceAll('"', "");
};

export const HEADERS_DATA = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization",
};

export const HEADERS_DATA_POST = {
  // "Content-Type": "application/json; charset=utf-8;",
  "Content-Type": "application/x-www-form-urlencoded",
  "Access-Control-Allow-Origin": "*",
};

export const authHeader = () => {
  const user: any = localStorage.getItem("userToken");
  if (user) {
    if (user.response.User.jwt) {
      return { Authorization: `Bearer ${user.response.User.jwt}` };
    }
  }
  return {};
};
