/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/button-has-type */

import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { IDemand, IProposal } from "interfaces/data/demand.interface";
import PDefault from "components/Popups";
import RegisterProposal from "components/Popups/subContent/registersPropostas";
import ProposalDetail from "components/Card/ProposalDetail";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { eixoData } from "assets/data/eixo";
import ImagesEixos from "assets/img/eixos";
import { FaCity, FaRegHandshake } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { dataFormat } from "util/dateFormater";
import moment from "moment";
import 'moment/locale/pt-br'
import { ProposalList } from "components/ProposalList/ProposalList";
import { selectUserLogged } from "app/reducers/auth/authSlice";
import { convertToArray } from "util/handleSelectorObj";
import { BsHeadset } from "react-icons/bs";
import { AppDispatch } from "app/store";
import { fetchDemandsThunk, findAllByUrlThunk } from "app/reducers/demand/thunk";
import { LoadingScreen } from "components/LoadingScreen";
import { cleanItem } from "app/reducers/demand/demandSlice";
import { showErrorMessage } from "util/function";

export function Demanda() {
  const nav = useNavigate();
  const { name } = useParams();
  const { auth } = useSelector((state: IStateData) => state);
  const { demands } = useSelector((state: IStateData) => state);
  const [localLoading, setLocalLoading] = useState(true);
  const proposalList = useSelector((state: IStateData) => state.proposal);
  const dispatch = useDispatch<AppDispatch>();

  const [sendProposal, setSendProposal] = useState(false);
  const [OpenProposalCad, setOpenProposalCad] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [proposal, setProposal] = useState<IProposal[]>([]);
  const [proposalOpen, setProposalOpen] = useState(false);
  const [proposalSelected, setProposalSelected] = useState<IProposal>();
  const [openCard, setopenCard] = useState(false);
  const [aux, setAux] = useState<{
    proposal: IProposal | undefined;
    popUp: boolean;
  }>({
    popUp: false,
    proposal: undefined,
  });
  const [demandClicked, setDemandClicked] = useState<IProposal>();

  const [demand, setDemand] = useState<IDemand>();

  const [data, setData] = useState<IDemand[]>();

  useEffect(() => {
    if (name) {
      dispatch(cleanItem());
      dispatch(findAllByUrlThunk(name));
    }
  }, []);

  useEffect(() => {
    if (demands.status !== 200 && demands.status !== 0) {
      showErrorMessage("A demanda que você procura não existe. Redirecionando...", "error");
      setTimeout(()=>{
        nav("/demandas");
      }, 5000);
    }
  }, [demands.status]);

  useEffect(() => {
    if (demands.item.length === 1) {
      if (demands.item[0].Proposal !== undefined) {
        let proposalList;
        if (Array.isArray(demands.item[0].Proposal)) {
          proposalList = [...demands.item[0].Proposal];
        } else {
          proposalList = [demands.item[0].Proposal];
        }
        proposalList.sort(function (a, b) {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setProposal(proposalList);
      } else {
        setProposal([]);
      }

      let temp = eixoData.filter(item => item.title === demands.item[0].Axes.name);
      let image = ImagesEixos.filter(item => item.sigle === temp[0].url);

      setBackgroundImage(image[0].image);
      setLocalLoading(false);
    }
  }, [demands.item]);

  // useEffect(() => {
  //   if (aux.proposal !== undefined) {
  //     setDemandClicked(aux.proposal);
  //     setopenCard(!openCard);
  //   }
  // }, [aux]);

  const handleStatus = (status: number) => {
    if (status == 1) return "Em execução";
    if (status == 2) return "Recebendo propostas";
    if (status == 3) return "Finalizado";
  }

  const handleDateAgo = (status: string) => {
    moment.locale('pt-br');
    const date = moment(status);
    return date.fromNow() + " atrás";
  }

  const handleProposalDetail = (item: any) => {
    console.log("handle")
    setProposalSelected(item);
    setProposalOpen(true);
  }

  const [idNav, setIdNav] = useState(1);

  return (!demands.loading && demands.status === 200 && !localLoading) ? (
    <>
      {proposalSelected && (
        <ProposalList state={proposalOpen} setState={setProposalOpen} outDetails={proposalSelected} />
      )
      }
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
        height="90%"
        width="569"
        title="Envio de proposta"
        subtitle="Preencha todos os campos marcados *"
        setTrigger={setOpenProposalCad}
        trigger={OpenProposalCad}
        setPrimaryState={setSendProposal}
        primaryValue={sendProposal}
        primaryBlocked={sendProposal}
      >
        <RegisterProposal
          idDemand={demands.item[0].id}
          setTrigger={setOpenProposalCad}
          trigger={OpenProposalCad}
          primaryValue={sendProposal}
          setPrimary={setSendProposal}
        />
      </PDefault>
      <NavBar />
      <ContainerPage background={backgroundImage}>
        <div className="banner-index" />
        <div className="container-banner">
          <div className="content-container">
            <div className="data-banner">
              <TitleDefault
                name={demands.item[0].name}
                bold
                font="40"
                className="mainTitle"
              />
              <p className="demandDescription">{demands.item[0].description}</p>
              <TextSublined
                font="15"
                name="Criado por: "
                subtitle={demands.item[0].User.name}
                bold
              />
              {/* 
                  setTrigger: () => setOpenProposalCad(!OpenProposalCad),
              */}
              <div className="data-info">
                <TitleDefault name={"Última atualização em " + dataFormat(demands.item[0].createdAt)} font="16" Icon={() => <AiOutlineCalendar />} />

                <TitleDefault name={"Prioridade: " + demands.item[0].priority} font="16" Icon={() => <RiErrorWarningFill />} />
              </div>
              <div className="create-proposal">
                <div className="info">
                  <div className="orcamento">
                    <p>Status</p>
                    <h2>{handleStatus(demands.item[0].status)}</h2>
                  </div>
                  <div className="data">
                    <p>Criado em</p>
                    <h2>{dataFormat(demands.item[0].createdAt)}</h2>
                  </div>
                  <h3 className="title">Mais detalhes</h3>
                  <ul className="lista">
                    <li>
                      <FaCity size={20} />
                      <p>Aplicado em {demands.item[0].Cities.name}</p>
                    </li>
                    <li>
                      <HiOutlineLightBulb size={20} />
                      <p>Eixo {demands.item[0].Axes.name}</p>
                    </li>
                    <li>
                      <FaRegHandshake size={20} />
                      <p>{(proposal) ? proposal.length : '0'} propostas recebidas</p>
                    </li>
                    {auth.auth.logged &&
                      (
                        <li>
                          <BsHeadset size={20} />
                          <p>{demands.item[0].User.email}</p>
                        </li>
                      )
                    }
                  </ul>
                </div>
                {auth.auth.logged &&
                  (
                    <button

                      onClick={() => setOpenProposalCad(!OpenProposalCad)}
                    >
                      Enviar proposta
                    </button>
                  )
                }
              </div>
            </div>
          </div>
        </div>

        <div className="content-demanda">
          <div className="objetivoGeral">
            <h1>
              Descrição
            </h1>
            <div className="text">
              <p>
                {demands.item[0].Objective.general}
              </p>
            </div>
          </div>
          {proposal.length > 0 && (
            <div className="proposalList">
              <h1>
                Propostas recebidas
              </h1>
              <div className="content">
                {proposal.map((item) => (
                  <div className="item" onClick={() => handleProposalDetail(item)}>
                    <div className="data">
                      <p>Enviado em {dataFormat(item.createdAt)}</p>
                    </div>
                    <div className="detalhe">
                      <h4>{item.description.substring(0, 20) + "..."}</h4>
                      <p><b>Feito por: </b>{item.User.name} {handleDateAgo(item.createdAt)}</p>
                    </div>
                  </div>
                ))
                }

              </div>
            </div>
          )
          }
        </div>
      </ContainerPage>
    </>
  ) : (
    <LoadingScreen></LoadingScreen>
  );
}
