import axios from "axios";
import "dotenv";

export default axios.create({
  baseURL: "https://www.api.wilgner.com.br/lindeiros",
});
