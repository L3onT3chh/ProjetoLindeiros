/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-lonely-if */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import backgroundImage from "assets/img/background-demandas.png";
import TextSublined from "components/Label/TextSublined";
import TitleDefault from "components/Label/Title";
import ProgressBar from "components/Progress";
import { ContainerPage } from "pages/css/styled";
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
import PDefault from "components/Popups";
import RegisterProposal from "components/Popups/subContent/registersPropostas";
import ProposalDetail from "components/Card/ProposalDetail";

export function Demanda() {
  const { name } = useParams();
  const [OpenProposalCad, setOpenProposalCad] = useState(false);
  const [proposal, setProposal] = useState<any[]>([]);
  const [openCard, setopenCard] = useState(false);
  const [aux, setAux] = useState<{
    proposal: IProposal | undefined;
    popUp: boolean;
  }>({
    popUp: false,
    proposal: undefined,
  });
  const [demandClicked, setDemandClicked] = useState<IProposal>();

  const { demand } = useSelector((state: IStateData) => state.demands);
  const [data, setData] = useState<IDemand[]>();
  useEffect(() => {
    const filterData = demand.filter((item) => item.name === name && item);
    if (filterData.length > 0 && filterData !== undefined) {
      setData(filterData);
      if (filterData[0].Proposal !== undefined) {
        if (Array.isArray(filterData[0].Proposal)) {
          setProposal([...filterData[0].Proposal]);
        } else {
          setProposal([filterData[0].Proposal]);
        }
      } else {
        setProposal([]);
      }
    }
  }, [demand, name]);

  useEffect(() => {
    if (aux.proposal !== undefined) {
      setDemandClicked(aux.proposal);
      setopenCard(!openCard);
    }
  }, [aux]);
  const [idNav, setIdNav] = useState(1);
  return data ? (
    <>
      <PDefault
        height="85%"
        width="929"
        title=""
        // active={active}
        alternativeText="Listagem de proposta"
        subtitle=""
        setTrigger={setopenCard}
        trigger={openCard}
      >
        <ProposalDetail demand={demandClicked} />
      </PDefault>
      <PDefault
        height="85%"
        width="569"
        title="Envio de proposta"
        subtitle="Preencha todos os campos marcados *"
        setTrigger={setOpenProposalCad}
        trigger={OpenProposalCad}
      >
        <RegisterProposal idDemand={data[0].id} />
      </PDefault>
      <NavBar />
      <ContainerPage background={backgroundImage}>
        <div className="banner-index" />
        <div className="container-banner">
          <div className="data-banner">
            <TitleDefault
              name={data[0].name}
              bold
              font="30"
              className="mainTitle"
            />
            <span className="spacing" />
            <ProgressBar
              color={data[0].progress > 0 ? "white" : "black"}
              percentage={data[0].progress.toString()}
              font="16"
            />

            <TextSublined
              font="15"
              name="Criado por: "
              subtitle="fulano 1, fulano 2"
              bold
            />
            {/* 
                setTrigger: () => setOpenProposalCad(!OpenProposalCad),
            */}
            <div className="data-info">
              <TitleDefault name="Ultima atualização em 12/2021" font="15" />

              <TitleDefault name="Prioridade: Alta" font="15" />
            </div>
            <button
              className="create-proposal"
              onClick={() => setOpenProposalCad(!OpenProposalCad)}
            >
              Cadastrar proposta
            </button>
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
              { name: "Propostas recebidas", id: 4 },
            ]}
          />
          {idNav === 1 && (
            <ContentSubMenu>{data[0].Objective.general}</ContentSubMenu>
          )}
          {idNav === 2 && (
            <ContentSubMenu>
              {data[0].Objective.SpecificText.text.split(",").map((item) => (
                <li>{item}</li>
              ))}
            </ContentSubMenu>
          )}
          {idNav === 3 && (
            <ContentSubMenu>
              {proposal &&
                proposal.map(
                  (item) =>
                    item.isAproved === "1" && (
                      <CardProposta
                        date="25 de dez 2022"
                        title={`${item.description.substring(0, 20)}...`}
                        approve
                        key={item.id}
                        n_integrantes={item.Details.numberInvolved}
                        setState={setAux}
                        state={aux.popUp}
                        proposal={item}
                      />
                    ),
                )}
            </ContentSubMenu>
          )}

          {idNav === 4 && (
            <ContentSubMenu>
              {proposal &&
                proposal.map(
                  (item: IProposal) =>
                    item.isAproved === "0" && (
                      <CardProposta
                        key={item.id}
                        date="25 de dez 2022"
                        title={`${item.description.substring(0, 20)}...`}
                        approve={false}
                        setState={setAux}
                        state={aux.popUp}
                        proposal={item}
                        n_integrantes={item.Details.numberInvolved}
                      />
                    ),
                )}
            </ContentSubMenu>
          )}
        </div>
        <div className="duvida">
          <SublinedText size="32" title="Duvidas sobre essa demanda?" />
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
