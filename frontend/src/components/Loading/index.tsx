import React from "react";
import { ContainerPopup } from "components/style";
import { IPropsGlobal } from "interfaces/components.interface";
import { Spinner } from "react-bootstrap";

export function LoadingDefault({ active }: IPropsGlobal) {
  return (
    <ContainerPopup active={active}>
      <div className="container-loading">
        <Spinner
          animation="grow"
          variant="primary"
          role="status"
          className="loading-default"
          size="sm"
        />
        <Spinner
          animation="grow"
          variant="primary"
          role="status"
          className="loading-default"
        />
        <Spinner
          animation="grow"
          variant="primary"
          role="status"
          className="loading-default"
          size="sm"
        />
      </div>
    </ContainerPopup>
  );
}
