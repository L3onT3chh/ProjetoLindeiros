import React from "react";
import { BsDownload } from "react-icons/bs";

export const CardDocs = () => {
  return (
    <div className="itens">
      <div className="card-item">
        <div className="info-card">
          <span id="data">
            <h3>Nome do documento</h3>
            <p id="author-doc">Gustavo Silva Teste</p>
            <p id="date-doc">
              <i>00/00/0000 - 00:00</i>
            </p>
          </span>
          <span id="border-span"></span>
        </div>

        <div className="description-card">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </p>
          <a href="/docs">Leia mais</a>
        </div>

        <div className="buttons-card">
          <button>
            <BsDownload color="#fff" size={24} id="button-download" />
          </button>
        </div>
      </div>
    </div>
  );
};
