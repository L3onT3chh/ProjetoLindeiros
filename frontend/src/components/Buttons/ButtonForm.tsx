/* eslint-disable react/react-in-jsx-scope */
import { ContainerButtonForm } from "components/style";
import { IPropsGlobal } from "interfaces/components.interface";

function ButtonForm({ width, children, className }: IPropsGlobal) {
  return (
    <ContainerButtonForm width={width} className={className}>
      {children}
    </ContainerButtonForm>
  );
}

export default ButtonForm;
