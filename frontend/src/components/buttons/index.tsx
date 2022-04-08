import { Representantes } from "assets/data/represents";
import { ButtonContainer } from "./styled";

type TProps = {
  setButton?: any;
  name: string;
  color?: string;
  sigle: string;
};

export const Button = (props: TProps) => {
  const handleOpenPopUp = (name: string) => {
    const filterRepresent = filterCities(props.sigle);
    props.setButton({
      trigger: true,
      name,
      key: props.name,
      representantes: filterRepresent,
    });
  };

  const filterCities = (sigle: string) => {
    const filter = Representantes.filter((item) => item.sigle === sigle);
    return filter;
  };

  return (
    <ButtonContainer color={props.color} className="button-click">
      <p className="text-button" onClick={() => handleOpenPopUp(props.name)}>
        {props.name}
      </p>
    </ButtonContainer>
  );
};
