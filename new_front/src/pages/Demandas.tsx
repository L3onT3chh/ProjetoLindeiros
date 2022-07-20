import React, { useState } from "react";
import TextSublined from "../components/Label/TextSublined";
import TitleDefault from "../components/Label/Title";
import ProgressBar from "../components/progress";
import { ContainerPage } from "./styled";
import backgroundImage from "../assets/img/background-demandas.png";
import NavSubMenu from "../components/NavBar/NavSubMenu";
import ContentSubMenu from "../components/SubMenu";
import SublinedText from "../components/Label/Sublined";
import TextArea from "../components/Textarea";
import ButtonCard from "../components/Buttons/ButtonCard";
import MenuSuspenso from "../components/Card/MenuSuspenso";
import CardProposta from "../components/Card/CardProposta";

function Demandas() {
  const [idNav, setIdNav] = useState(1);

  return (
    <ContainerPage background={backgroundImage}>
      <MenuSuspenso />
      <div className="container-banner">
        <TitleDefault name="Desenvolvimento da demanda 1" bold font="24" />

        <div className="data-banner">
          <ProgressBar color="white" percentage="90" font="16" />

          <TextSublined
            font="15"
            name="Criado por: "
            subtitle="fulano 1, fulano 2"
            bold
          />

          <div className="data-info">
            <TitleDefault name="Ultima atualização em 12/2021" font="12" />

            <TitleDefault name="Prioridade: Alta" font="12" />
          </div>
        </div>
        <div className="shadow-div" />
      </div>

      <div className="content-demanda">
        <NavSubMenu
          setText={setIdNav}
          childrens={[
            { name: "Objetivos gerais", id: 1 },
            { name: "Objetivos Especificos", id: 2 },
            { name: "Propostas aceitas", id: 3 },
            { name: "Propostas pendentes", id: 4 },
          ]}
        />
        {idNav === 1 && (
          <ContentSubMenu>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Iure
              minima esse quaerat numquam voluptatum fugiat deserunt,officia,
              ratione nihil recusandae sint obcaecati eum odit,assumenda maiores
              voluptates quis facilis porro.Lorem ipsumdolor sit amet
              consectetur adipisicing elit.Iure minimaesse quaerat numquam
              voluptatum fugiat deserunt, officia,ratione nihil recusandae sint
              obcaecati eum odit, assumendamaiores voluptates quis facilis
              porro.Officia, rationenihil recusandae sint obcaecati eum odit,
              assumenda maioresvoluptates quis facilis porro. Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
            <br />
            <p>
              Iure minima esse quaerat numquam voluptatum fugiat deserunt,
              officia, ratione nihil recusandae sint obcaecati eum odit,
              assumenda maiores voluptates quis facilis porro.Lorem ipsum dolor
              sit amet consectetur adipisicing elit.Iure minima esse quaerat
              numquam voluptatum fugiat deserunt, officia, ratione nihil
              recusandae sint obcaecati eum odit, assumenda maiores voluptates
              quis facilis porro.Officia, ratione nihil recusandae sint
              obcaecati eum odit, assumenda maiores voluptates quis facilis.
            </p>
            <br />{" "}
            <p>
              Lorem ipsum dolor sit am et consectetur adipisicing elit. Iure
              minima esse quaerat numquam voluptatum fugiat deserunt, officia,
              ratione nihil recusandae sint obcaecati eum odit, assumenda
              maiores voluptates quis facilis porro.Lorem ipsum dolor sit amet
              consectetur adipisicing elit.Iure minima esse quaerat numquam
              voluptatum fugiat deserunt, officia, ratione nihil recusandae sint
              obcaecati eum odit, assumenda maiores voluptates quis facilis
              porro.Officia, ratione nihil recusandae sint obcaecati eum.
            </p>{" "}
          </ContentSubMenu>
        )}

        {idNav === 3 && (
          <ContentSubMenu>
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve
              n_integrantes={3}
            />
          </ContentSubMenu>
        )}

        {idNav === 4 && (
          <ContentSubMenu>
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve={false}
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve={false}
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve={false}
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve={false}
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve={false}
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve={false}
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve={false}
              n_integrantes={3}
            />
            <CardProposta
              date="25 de dez 2022"
              title="Lider: Fulano de tal"
              approve={false}
              n_integrantes={3}
            />
          </ContentSubMenu>
        )}
      </div>
      <div className="duvida">
        <SublinedText size="32" title="Duvidas sobre essa demanda?" />\
        <div className="duvida-msg">
          <TextArea
            placeholder="Escreva uma mensagem"
            required
            title="demanda"
          />
        </div>
        <ButtonCard value="Enviar" />
      </div>
    </ContainerPage>
  );
}

export default Demandas;
