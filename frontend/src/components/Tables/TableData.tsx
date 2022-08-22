/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { IPropsGlobal } from "interfaces/components.interface";
import { IDemand, IProposal } from "interfaces/data/demand.interface";
import { BsFillTrash2Fill } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { PMeuPerfil } from "components/Popups/Profile";
import { CardPropostas } from "components/Card/Propostas";
import { cityspcape } from "assets/icons";
// import { findProposal } from "API/Demand/Proposital/crud";
// import { findProposital } from "API/Demand/Proposital/find";

export function TableDefaultData({ fields, dataDemand }: IPropsGlobal) {
  const [newData, setNewData] = useState<IDemand[]>();
  const [dataClicked, setDataClicked] = useState<IDemand[]>();
  const [trigger, setTrigger] = useState(false);
  // const [dataClicked, setDataClicked] = useState<IDemand>();
  useEffect(() => {
    setNewData(dataDemand);
  }, [dataDemand]);

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

  return (
    <>
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
                <p className="field-styled">{item.updated}</p>
              </th>
              <th>
                <span>
                  <BsFillTrash2Fill color="red" size={30} />
                </span>{" "}
                <span className="divisor" />
                <span>
                  <MdOutlineTipsAndUpdates
                    className="update-icon"
                    color="green"
                    size={32}
                  />
                </span>
                <span className="divisor" />
                <span>
                  <BiMessageSquareDetail size={32} color="blue" />
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
