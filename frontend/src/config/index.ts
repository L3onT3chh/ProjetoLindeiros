export const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOTNjMzJkNjItY2E4Mi00YTAyLTgyMTAtNWFlOGU4YzEwNGQxIn0.R6r9IwFcxgpB5dNd3jS0vI2zMLh7nbb9M0Ey5xWubxg";

export const TokenUser = localStorage.getItem("token");

export const HEADERS_DATA = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization",
};

export const HEADERS_DATA_POST = {
  "Content-Type": "application/json; charset=utf-8;",
  "Access-Control-Allow-Origin": "*",
};
