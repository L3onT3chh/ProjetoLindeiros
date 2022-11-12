import emailJs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID || "";
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID || "";
const PUBLIC_API = process.env.REACT_APP_USER_ID || "";

const SendEmail = (formContact: any) => {
  emailJs
    .sendForm(SERVICE_ID, TEMPLATE_ID, formContact.current, PUBLIC_API)
    .then((response) => console.log(response.text))
    .catch((err) => console.error(err.text));
};

export default SendEmail;
