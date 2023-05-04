/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { IPropsGlobal } from "interfaces/components.interface";
import { IDemand } from "interfaces/data/demand.interface";
import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
// import { PMeuPerfil } from "components/Popups/Profile";
// import { CardPropostas } from "components/Card/Propostas";
// import { cityspcape } from "assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteDemandsThunk, fetchDemandsThunk, findAllByUsersThunk, findOneDemandsThunk } from "app/reducers/demand/thunk";
import { AppDispatch } from "app/store";
import PDefault from "components/Popups";
import UpdateDemand from "components/Popups/subContent/updateDemand";
import {
  cleanDemand,
  clickedDemand,
  mergeDemandFilter,
  // mergeDemandFilter,
  selectCurrentDemands,
} from "app/reducers/demand/demandSlice";
import { ContentProfile } from "components/style";
import { ProposalList } from "components/ProposalList/ProposalList";
import { convertToArray } from "util/handleSelectorObj";
import { selectCurentUser } from "app/reducers/auth/authSlice";
import { LoadingDefault } from "components/Loading";
import { NotFound } from "components/Notfound";

export function TableDefaultData({ fields }: IPropsGlobal) {
  const dispatch = useDispatch<AppDispatch>();
  const demands = useSelector(selectCurrentDemands);
  const user = useSelector(selectCurentUser)[0];
  const [proposalData, setProposalData] = useState<IDemand>();
  const [dataUpdated, setDataUpdated] = useState<string>("");
  const [useOpenDemand, setOpenDemand] = useState(false);
  const [proposalOpen, setProposalOpen] = useState(false);
  const [remove, setRemove] = useState(false);
  const [trigger, setTrigger] = useState(true);
  const [deleteId, setDeleteId] = useState("");

  const [editDemanded, setEditDemanded] = useState(false);

  const handleClicked = (id: string) => {
    if (id) {
      dispatch(clickedDemand(id));
    }
  };
  useEffect(() => {
    dispatch(cleanDemand());
  }, [])

  useEffect(() => {
    dispatch(cleanDemand());

    if (convertToArray(user)[0].id) {
      dispatch(findAllByUsersThunk(convertToArray(user)[0].id));
    }
  }, [dispatch])

  useEffect(() => {
    setTrigger(!trigger);
  }, [demands.demandFilter.clicked]);

  const handleRemoveDemand = () => {
    if (deleteId !== "") {
      dispatch(deleteDemandsThunk(deleteId));
      setRemove(false);
    }
  };

  const handleUpdateDemand = (id: string) => {
    if (id !== undefined) {
      setDataUpdated(id);
    }

    setOpenDemand(!useOpenDemand);
  };

  const preRemove = (id: string) => {
    setRemove(true);
    setDeleteId(id);
  }

  const handlerProposalOpen = (item: IDemand) => {
    setProposalData(item);
    setProposalOpen(true);
  }

  return (
    <>
      <LoadingDefault active={demands.loading} />
      <div className="data-user-poup">
        {proposalData !== undefined && (
          <ProposalList state={proposalOpen} setState={setProposalOpen} data={proposalData} />
        )
        }
        {demands.demand.length > 0 &&
          (
            <PDefault
              height="90%"
              width="569"
              title="Editar demanda"
              subtitle="Altere os dados desejados"
              setTrigger={setOpenDemand}
              trigger={useOpenDemand}
              setPrimaryState={setEditDemanded}
              primaryValue={editDemanded}
              primaryBlocked={editDemanded}
            >
              <UpdateDemand setPrimary={setEditDemanded} primaryValue={editDemanded} setState={setOpenDemand} demandId={dataUpdated} opened={useOpenDemand} />
            </PDefault>
          )
        }
        <PDefault
          height="fit-content"
          width="569"
          title="Excluir demanda"
          subtitle="Deseja realmente excluir esta demanda?"
          setTrigger={setRemove}
          trigger={remove}
        >
          <ContentProfile>
            <div className="content-default" style={{ padding: 0, height: "80px" }}>
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="content-basic-data">
                  <br />
                  <div className="btns-popup" style={{ borderTop: 0 }}>
                    <button className="btn-close-two">Fechar</button>
                    <button className="btn-send" onClick={() => handleRemoveDemand()}>Confirmar</button>
                  </div>
                </div>
              </form>
            </div>
          </ContentProfile>
        </PDefault>
      </div>
      {demands.demand.length > 0 ?
        (
          <table>
            <tr className="one-row-title">
              {fields && fields.map((field) => <th key={field}>{field}</th>)}
            </tr>
            <tbody className="demandTable">
              {demands.demand.length > 0 && convertToArray(demands.demand).map((item: IDemand) => (
                <tr key={item.id} className="row-content">
                  <th>
                    <button
                      className="field-styled field-name"
                      onClick={() => handleClicked(item.id)}
                    >
                      {(item.name.length > 30) ? item.name.toString().substring(0, 30) + '...' : item.name}
                    </button>
                  </th>
                  <th>
                    <p className="field-styled">{item.Axes.name}</p>
                  </th>
                  <th>
                    <p className="field-styled">{item.priority}</p>
                  </th>
                  <th>
                    <p className="field-styled">{item.Cities.name}</p>
                  </th>
                  <th className="field-styled">
                    <span>
                      <BsFillTrash2Fill
                        color="red"
                        className="btn-click"
                        size={22}
                        onClick={() => preRemove(item.id)}
                      />
                    </span>{" "}
                    &nbsp;&nbsp;
                    <span>
                      <BsFillPencilFill
                        onClick={() => item.id && handleUpdateDemand(item.id)}
                        className="update-icon btn-click"
                        color="#3679bc"
                        size={22}
                      />
                    </span>
                  </th>
                  <th>
                    <p className="field-button" onClick={() => handlerProposalOpen(item)}>Ver mais</p>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        ) :
        (
          <NotFound title="Nenhuma demanda encontrada" />
        )

      }

      {/* {dataClicked && dataClicked.Proposal && (
        <PMeuPerfil
          height="850"
          width="550"
          setTrigger={() => setTrigger(!trigger)}
          trigger={trigger}
          className="menu-popUp"
        >
          <>
            <div className="cards">
              {dataClicked.Proposal?.map((item: IProposal, index) => (
                <CardPropostas
                  key={index.toString()}
                  icon={cityspcape}
                  className="card-proposta"
                  author="Arlete Beuren"
                  name={`Proposta ${index}`}
                  datePublished={item.Details.deadline}
                  description={item.description}
                />
              ))}
            </div>
            <h1 className="title-h2">Carregar mais</h1>
          </>
        </PMeuPerfil>
      )} */}
    </>
  );
}
