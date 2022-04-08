import { ContentCities } from "components/contentPopUp";
import IRepresentante from "interfaces/Popup/IRepresentante";
import { ReactChild, ReactChildren } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ContentBody, PopUp } from "./styled";

type TPopUpRepresentantes = {
  children?: ReactChild | ReactChildren;
  trigger: boolean;
  setTrigger: any;
  name: string;
  representates: IRepresentante[];
};

export const PopupRepresentantes = (props: TPopUpRepresentantes) => {
  return props.trigger ? (
    <PopUp>
      <ContentBody>
        <button className="btn-close" onClick={() => props.setTrigger(false)}>
          <AiOutlineClose size={"24px"} />
        </button>
        <div className="city-applied">{props.name}</div>
        <div className="data-content">
          {props.representates.length > 0 ? (
            props.representates.map((representante) => (
              <ContentCities data={representante} />
            ))
          ) : (
            <div className="not-found-itens">
              Não há representantes cadastrados
            </div>
          )}
        </div>
      </ContentBody>
    </PopUp>
  ) : (
    <div></div>
  );
};
