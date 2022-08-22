import React, { useEffect, useState } from "react";
import backgroundImage from "assets/img/background-demandas.png";
import TextSublined from "components/Label/TextSublined";
import TitleDefault from "components/Label/Title";
import ProgressBar from "components/Progress";
import { ContainerPage } from "pages/styled";
import NavSubMenu from "components/NavBar/NavSubMenu";
import ContentSubMenu from "components/SubMenu";
import SublinedText from "components/Label/Sublined";
import TextArea from "components/Textarea";
import ButtonCard from "components/Buttons/ButtonCard";
import CardProposta from "components/Card/CardProposta";
import NavBar from "components/NavBar";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { IDemand, IProposal } from "interfaces/data/demand.interface";

export function Demanda() {
  const { name } = useParams();

  const { demand } = useSelector((state: IStateData) => state.demands);
  const [data, setData] = useState<IDemand[]>();
  useEffect(() => {
    const filterData = demand.filter((item) => item.name === name && item);
    if (filterData.length > 0 && filterData !== undefined) {
      setData(filterData);
    }
  }, [demand, name]);
  console.log(data);
  const [idNav, setIdNav] = useState(1);
  return data ? (
    <>
      <NavBar />
      <ContainerPage background={backgroundImage}>
        <div className="banner-index" />
        <div className="container-banner">
          <div className="data-banner">
            <TitleDefault name={data[0].name} bold font="30" />
            <span className="spacing" />
            <ProgressBar color="white" percentage="90" font="16" />

            <TextSublined
              font="15"
              name="Criado por: "
              subtitle="fulano 1, fulano 2"
              bold
            />

            <div className="data-info">
              <TitleDefault name="Ultima atualização em 12/2021" font="15" />

              <TitleDefault name="Prioridade: Alta" font="15" />
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
            <ContentSubMenu>{data[0].Objective.general}</ContentSubMenu>
          )}
          {idNav === 2 && (
            <ContentSubMenu>
              {data[0].Objective.specific && (
                <li>{data[0].Objective.specific}</li>
              )}
            </ContentSubMenu>
          )}
          {idNav === 3 && (
            <ContentSubMenu>
              {data[0].Proposal &&
                data[0].Proposal.map((item: IProposal) => (
                  <CardProposta
                    date="25 de dez 2022"
                    title={item.description}
                    approve
                    n_integrantes={item.Details.numberInvolved}
                  />
                ))}
            </ContentSubMenu>
          )}

          {idNav === 4 && (
            <ContentSubMenu>
              {data[0].Proposal &&
                data[0].Proposal.map((item: IProposal) => (
                  <CardProposta
                    date="25 de dez 2022"
                    title={item.description}
                    approve={false}
                    n_integrantes={item.Details.numberInvolved}
                  />
                ))}
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
          <ButtonCard value="Enviar" width="200" />
        </div>
      </ContainerPage>
    </>
  ) : (
    <div className="notFound" />
  );
}
