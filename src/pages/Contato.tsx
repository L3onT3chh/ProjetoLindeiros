/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from "react";

// Style
// import { Container } from "./style";
import "assets/css/contato.css";
import "assets/css/index.css";

// Components
import NavBar from "components/NavBar";
import { sendEmail } from "API/User/crud.user";
import { showErrorMessage } from "util/function";

export function Contato() {
  const formContact = useRef(null);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = async (e: any) => {
    e.preventDefault();
    let resp = await sendEmail(email, subject, message);
    if(resp.status !== 200) {
      showErrorMessage("Erro ao mandar email","error"); 
      return;
    }

    setEmail("");
    setSubject("");
    setMessage("");
    showErrorMessage("Email enviado com sucesso","success"); 
  }
  //
  return (
    <>
      <NavBar text="contato"/>
      <div>
        <div className="contato">
          <div className="left">
            <h1 className="color-secondary">Envie sua mensagem</h1>
            <h2>
              Preencha o formulario ao lado e nossa equipe entrará em contato em
              até 48 horas.
            </h2>
            <div className="info-group">
              <div className="info-item">
                <i className="fas fa-phone color-secondary" />
                <p>(45) 3268-2489 / 3268-3823</p>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt color-secondary" />
                <p>Avenida Brasil, 136 - Santa Helena, PR - 85892-000</p>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope color-secondary" />
                <p>conselho@lindeiros.org.br</p>
              </div>
            </div>
          </div>
          <div className="right">
            <form
              className="form"
              ref={formContact}
              onSubmit={handleEmail}
            >
              <label>Seu endereço de e-mail</label>
              <input type="text" onChange={(e) => setEmail(e.currentTarget.value)} value={email} />
              <label>Assunto</label>
              <input type="text" onChange={(e) => setSubject(e.currentTarget.value)} value={subject} />
              <label>Mensagem</label>
              <textarea maxLength={500} name="message" onChange={(e) => setMessage(e.currentTarget.value)} value={message} />
              <input
                type="submit"
                defaultValue="Enviar Mensagem"
                className="bgcolor-secondary"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
