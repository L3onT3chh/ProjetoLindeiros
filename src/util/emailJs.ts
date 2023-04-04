import emailJs from "@emailjs/browser";
import { createRetriveEmail } from "API/User/crud.user";
import { url } from "config";
import { showErrorMessage } from "./function";

const SERVICE_ID = "service_unpdguo";
const TEMPLATE_ID = "template_xj583kw";
const PUBLIC_API = process.env.REACT_APP_USER_ID || "";

const SendEmail = (email: string, subject: string, message: string) => {
  let template: any = {
    subject_mail: email,
    subject_text: subject,
    message: message
  }

  emailJs
    .send(SERVICE_ID, TEMPLATE_ID, template, PUBLIC_API)
    .then((response) => {
      if (response.status === 200) showErrorMessage("Mensagem enviada com sucesso!", "success");
    })
    .catch((err) => showErrorMessage("Ocorreu algum erro inesperado!", "error"));
};

export const forgotPassword = async (email: string) => {
  const resp = await createRetriveEmail(email);
  console.log(resp);
  // if (resp) {
  //   let link = resp.response.data;
  //   let template: any = {
  //     link: url+"redefinir/"+link,
  //     email: email
  //   }

  //   emailJs
  //     .send(SERVICE_ID, 'template_d26cg18', template, PUBLIC_API)
  //     .then((response) => {
  //       if (response.status === 200) showErrorMessage("Verifique sua caixa de email!", "success");
  //     })
  //     .catch((err) => showErrorMessage("Ocorreu algum erro inesperado!", "error"));
  // }
};

export default SendEmail;
