import filterCity from "assets/data/cities";
import { Button } from "components/buttons";
import { useState } from "react";
import { PopupRepresentantes } from "../representantes";
import { Container } from "./styled";

export const ContactCad = () => {
  const [btnTrigger, setBtnTrigger] = useState({
    trigger: false,
    name: "",
    key: "",
    representantes: [],
  });

  return (
    <Container>
      <div className="buttons">
        {filterCity.map((city) => (
          <>
            <Button
              sigle={city.sigle}
              name={city.name}
              key={city.sigle}
              setButton={setBtnTrigger}
            />
          </>
        ))}
      </div>
      <div className="buttons-entities">
        <Button
          color="#0B2559"
          name="Universidades"
          sigle="university"
          key="university"
        />
        <Button
          color="#0B2559"
          name="Entidades"
          key="entities"
          sigle="university"
        />
      </div>
      <div className="info-buttons">
        <p className="info-button">
          Escolha uma das cidades acima para exibir os telefones de contato
        </p>
      </div>

      <PopupRepresentantes
        representates={btnTrigger.representantes}
        key={btnTrigger.key}
        name={btnTrigger.name}
        trigger={btnTrigger.trigger}
        setTrigger={setBtnTrigger}
      />
    </Container>
  );
};
