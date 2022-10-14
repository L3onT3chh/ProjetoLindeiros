/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import ChipAdd from "components/Chips/ChipAdd";
import InputStyle from "components/Inputs";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { ContentProfile } from "components/style";
import TextArea from "components/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { AppDispatch } from "app/store";
import { useForm } from "util/form/useForm";
import { IDemand, IDemandPost } from "interfaces/data/demand.interface";
import { createDemandsThunk } from "app/reducers/demand/thunk";

interface IProps {
  demandId: string;
  setState: any;
}

function UpdateDemand({ demandId, setState }: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [demandClicked, setDemandClicked] = useState<IDemand>();
  const demandFilter = useSelector((state: IStateData) =>
    state.demands.demand.filter((item) => item.id === demandId),
  )[0];

  useEffect(() => {
    setDemandClicked(demandFilter);
  }, [demandFilter]);

  const { city, axes } = useSelector((state: IStateData) => state);
  const [userCity, setUserCity] = useState("");
  const [userAxes, setUserAxes] = useState("");
  const [userText, setUserText] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userObjectives, setObjective] = useState("");

  const initialValues: IDemandPost = {
    description: "",
    generalText: "",
    name: "",
    specificText: "",
    priority: "",
    axes_id: "",
    city_id: "",
  };

  const { onChange, values } = useForm(initialValues);

  const handleSavedData = async (valuesSave: IDemandPost) => {
    dispatch(
      createDemandsThunk({
        ...valuesSave,
        city_id: userCity,
        axes_id: userAxes,
        description: userDescription,
        generalText: userText,
        specificText: userObjectives.toString(),
      }),
    );
  };

  return (
    demandFilter && (
      <ContentProfile>
        <div className="content-default">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleSavedData(values);
            }}
          >
            <div className="content-basic-data">
              <div className="data-overflow-data">
                <h1 className="title-h3">Dados Básicos</h1>
                <InputStyle
                  onChange={onChange}
                  name="name"
                  required
                  value={demandClicked && demandClicked.name}
                  placeholder="Nome"
                  title=""
                  type="text"
                  className="form-control-demand"
                />
                <div className="double-data">
                  <InputStyle
                    required
                    onChange={onChange}
                    name="priority"
                    value={demandClicked && demandClicked.priority}
                    placeholder="Prioridade"
                    title=""
                    type="text"
                    className="form-control-demand text-double"
                  />
                  <InputStyle
                    onChange={onChange}
                    name="area"
                    placeholder="Área de conhecimento"
                    title=""
                    required
                    type="text"
                    className="form-control-demand text-double"
                  />
                </div>
                <TextArea
                  name="generalText"
                  height="80px"
                  valueDefault={
                    demandClicked && demandClicked.Objective.general
                  }
                  setState={setUserText}
                  required
                  className="form-control-demand"
                  placeholder="Objetivos geral"
                  title=""
                />
                <div className="double-data">
                  <SelectMenuAlternative
                    value={demandClicked && demandClicked.Cities.name.trim()}
                    setState={setUserCity}
                    name="city_id"
                    className="text-double text-popup"
                    options={city.city}
                  />
                  <SelectMenuAlternative
                    value={demandClicked && demandClicked.Axes.name.trim()}
                    setState={setUserAxes}
                    name="axes_id"
                    className="text-double text-popup"
                    options={axes.axes}
                  />
                </div>
                <div className="content-data-time">
                  <h1 className="title-h3">Objetivo da demanda</h1>
                  <div className="form-control-demand">
                    <ChipAdd
                      text="Objetivo especifico"
                      setState={setObjective}
                    />
                  </div>
                </div>
                <TextArea
                  required
                  valueDefault={demandClicked && demandClicked.description}
                  height="80px"
                  className="form-control-demand"
                  placeholder="Descrição"
                  title=""
                  setState={setUserDescription}
                  name="description"
                />
              </div>{" "}
              <div className="btns-popup">
                <button className="btn-close-two">Fechar</button>
                <button className="btn-send" onClick={() => setState(false)}>
                  Enviar dados
                </button>
              </div>
            </div>
          </form>
        </div>
      </ContentProfile>
    )
  );
}

export default UpdateDemand;
