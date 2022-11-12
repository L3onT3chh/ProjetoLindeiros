/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
import { ContainerProposal } from "components/style";
import { CardInfo } from "components/Card/CardInfo";
import { FcCalendar, FcMediumPriority } from "react-icons/fc";
import SublinedText from "components/Label/Sublined";
import { BiUser } from "react-icons/bi";

interface IProp {
  demand: any;
  active?: boolean;
}

function ProposalDetail({ demand, active }: IProp) {
  const [datetime, setDatetime] = useState({ year: "", month: "", day: "" });
  useEffect(() => {
    if (demand) {
      const date = demand.Details.deadline.toString().split(" ");
      const dateS = date[0].toString().split("-");
      setDatetime({ year: dateS[0], month: dateS[1], day: dateS[2] });
    }
  }, [demand]);

  return (
    <ContainerProposal>
      {!active && (
        <div className="buttons-action">
          <button className="reject-proposal bnt">Negar</button>
          <button className="accept-proposal bnt">Aceitar</button>
        </div>
      )}
      <div className="info-proposal">
        <CardInfo Icon={FcMediumPriority}>
          <p>
            Prioridade para essa demanda é considerada{" "}
            <b>{demand && demand.priority?.toString()}</b>
          </p>
        </CardInfo>
        <CardInfo Icon={BiUser}>
          <>
            <span className="data-info-proposal">
              <b>Nome: </b>
              {/* {demand ?? demand.author.name} */}
            </span>
            <span className="data-info-proposal">
              <b>Função: </b>
              {/* {demand ?? demand.author.work} */}
            </span>
            <span className="data-info-proposal">
              <b>Contato: </b>
              {/* {demand ?? demand.author.phone} */}
            </span>
          </>
        </CardInfo>
        <CardInfo Icon={FcCalendar}>
          <span>
            Criada em {datetime.day} de março de {datetime.year}
          </span>
        </CardInfo>
      </div>

      <div className="info-descripton">
        <SublinedText title="Descrição" />

        <p className="info-sublined">
          {demand && demand.description?.toString().substring(0, 600)}...
        </p>
      </div>
    </ContainerProposal>
  );
}

export default ProposalDetail;
