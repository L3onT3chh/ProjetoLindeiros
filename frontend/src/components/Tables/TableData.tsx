/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { IPropsGlobal } from "interfaces/components.interface";
import { IDemand } from "interfaces/data/demand.interface";
import { BsFillTrash2Fill } from "react-icons/bs";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
// import { PMeuPerfil } from "components/Popups/Profile";
// import { CardPropostas } from "components/Card/Propostas";
// import { cityspcape } from "assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteDemandsThunk } from "app/reducers/demand/thunk";
import { AppDispatch } from "app/store";
import PDefault from "components/Popups";
import UpdateDemand from "components/Popups/subContent/updateDemand";
import {
  clickedDemand,
  // mergeDemandFilter,
  selectCurrentDemands,
} from "app/reducers/demand/demandSlice";

export function TableDefaultData({ fields }: IPropsGlobal) {
  const dispatch = useDispatch<AppDispatch>();
  const demands = useSelector(selectCurrentDemands);
  const [newData, setNewData] = useState<IDemand[]>(demands.demand);
  const [dataUpdated, setDataUpdated] = useState<string>("");
  const [useOpenDemand, setOpenDemand] = useState(false);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    setNewData(demands.demand);
  }, [demands.demand]);

  const handleClicked = (id: string) => {
    if (id) {
      dispatch(clickedDemand(id));
    }
  };
  // -------------------------------------------
  // Resultando em bug
  // -------------------------------------------
  // useEffect(() => {
  //   if (demands.demandFilter.search) {
  //     dispatch(mergeDemandFilter());
  //     setNewData(demands.demandFilter.filtered);
  //   }
  // }, [demands.demandFilter.search]);

  useEffect(() => {
    setTrigger(!trigger);
  }, [demands.demandFilter.clicked]);

  const handleRemoveDemand = (id: string) => {
    dispatch(deleteDemandsThunk(id));
  };

  const handleUpdateDemand = (id: string) => {
    if (id !== undefined) {
      setDataUpdated(id);
    }

    setOpenDemand(!useOpenDemand);
  };
  return (
    <>
      <div className="data-user-poup">
        <PDefault
          height="889"
          width="569"
          title="Envio de demandas"
          subtitle="Preencha todos os campos marcados *"
          setTrigger={setOpenDemand}
          trigger={useOpenDemand}
        >
          <UpdateDemand setState={setOpenDemand} demandId={dataUpdated} />
        </PDefault>
      </div>
      <table>
        <tr className="one-row-title">
          {fields && fields.map((field) => <th key={field}>{field}</th>)}
          <th>Ações</th>
        </tr>
        {newData.map((item: IDemand) => (
          <tr key={item.id} className="row-content">
            <th>
              <button
                className="field-styled field-name"
                onClick={() => handleClicked(item.id)}
              >
                {item.name}
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
            <th>
              <p className="field-styled">{item.createdAt}</p>
            </th>
            <th>
              <span>
                <BsFillTrash2Fill
                  color="red"
                  className="btn-click"
                  size={30}
                  onClick={() => handleRemoveDemand(item.id)}
                />
              </span>{" "}
              <span className="divisor" />
              <span>
                <MdOutlineTipsAndUpdates
                  onClick={() => item.id && handleUpdateDemand(item.id)}
                  className="update-icon btn-click"
                  color="green"
                  size={32}
                />
              </span>
            </th>
          </tr>
        ))}
      </table>
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
