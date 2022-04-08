import IRepresentante from "interfaces/Popup/IRepresentante";
import React from "react";

type IProps = {
  data: IRepresentante;
};

export const ContentCities = ({ data }: IProps) => {
  return (
    <div className="data-info">
      <div className="data-description">
        <h5>{data.name}</h5>
        <p>{data.description}</p>
      </div>

      <div className="data-contact">
        <h6>Telefone de contato</h6>
        <p className="data-p">{data.contact.phone}</p>
      </div>
      <div className="data-contact">
        <h6>Tipo do representante</h6>
        <p className="data-p">{data.contact.type}</p>
      </div>
      <div className="data-contact">
        <h6>Endereço do representante</h6>
        <p className="data-p">{data.contact.address}</p>
      </div>
      <div className="data-contact">
        <h6>Endereço Eletrônico</h6>
        <p className="data-p">{data.contact.email}</p>
      </div>
    </div>
  );
};
