import React from "react";
import { FcApproval } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { MdOutlinePending } from "react-icons/md";
import ButtonDefault from "../Buttons/ButtonDefault";
import { ContainerCardProposta } from "../style";
import { IPropsGlobal } from "../../interfaces/components.interface";

function CardProposta({ title, n_integrantes, date, approve }: IPropsGlobal) {
  return (
    <ContainerCardProposta>
      <h2 className="title-h2">{title}</h2>

      <div className="body">
        <span>
          <AiOutlineUser color="orange" /> N integrantes: {n_integrantes}
        </span>
        <span>
          <GoCalendar /> Prazo: {date}
        </span>
        <span>
          {approve ? (
            <span>
              <FcApproval /> Aprovado
            </span>
          ) : (
            <span>
              <MdOutlinePending /> Pendente
            </span>
          )}
        </span>
      </div>

      <ButtonDefault value="Ver mais" icon="" />
    </ContainerCardProposta>
  );
}

export default CardProposta;
