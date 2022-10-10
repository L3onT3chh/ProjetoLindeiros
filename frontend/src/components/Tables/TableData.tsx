/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { IDemand, IProposal } from "interfaces/data/demand.interface";
import { BsFillTrash2Fill } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { PMeuPerfil } from "components/Popups/Profile";
import { CardPropostas } from "components/Card/Propostas";
import { cityspcape } from "assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteDemandsThunk } from "app/reducers/demand/thunk";
import { AppDispatch } from "app/store";
import PDefault from "components/Popups";
import UpdateDemand from "components/Popups/subContent/updateDemand";

export function TableDefaultData({ fields }: IPropsGlobal) {
  const dispatch = useDispatch<AppDispatch>();
  const { demands } = useSelector((state: IStateData) => state);
  const [newData] = useState<IDemand[]>([...demands.demand]);
  const [dataClicked, setDataClicked] = useState<IDemand[]>();
  const [dataUpdated, setDataUpdated] = useState<string>("");
  const [useOpenDemand, setOpenDemand] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const handleClicked = (name: string) => {
    if (name) {
      const data: IDemand[] | undefined = newData?.filter(
        (item) => item.name === name,
      );
      if (data !== undefined && data[0].Proposal) {
        setDataClicked(data);
      } else {
        setDataClicked(undefined);
      }
      setTrigger(!trigger);
    }
  };

  const handleRemoveDemand = (id: string) => {
    dispatch(deleteDemandsThunk(id));
  };

  const handleUpdateDemand = (id: string) => {
    setDataUpdated(id);

    setOpenDemand(true);
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
        {newData &&
          newData.map((item: IDemand) => (
            <tr key={item.id} className="row-content">
              <th>
                <button
                  className="field-styled field-name"
                  onClick={() => handleClicked(item.name)}
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
                <span className="divisor" />
                <span>
                  <BiMessageSquareDetail
                    className="btn-click"
                    size={32}
                    color="blue"
                  />
                </span>
              </th>
            </tr>
          ))}
      </table>
      {dataClicked && dataClicked[0].Proposal && (
        <PMeuPerfil
          height="850"
          width="550"
          setTrigger={() => setTrigger(!trigger)}
          trigger={trigger}
          className="menu-popUp"
        >
          <>
            <div className="cards">
              {dataClicked[0].Proposal?.map((item: IProposal, index) => (
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
      )}
    </>
  );
}
