export const TokenUser = () => {
  const token = localStorage.getItem("tokeAuth");
  return token?.replaceAll('"', "");
};

export const HEADERS_DATA = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization",
};

export const HEADERS_DATA_POST = {
  "Content-Type": "application/json; charset=utf-8;",
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
