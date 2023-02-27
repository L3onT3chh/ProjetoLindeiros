/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
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
import { updateDemandsThunk } from "app/reducers/demand/thunk";
import { PrioriyData } from "assets/data/priority";

interface IProps {
  demandId: string;
  setState: any;
  opened: boolean;
}

function UpdateDemand({ demandId, setState, opened }: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [demandClicked, setDemandClicked] = useState<IDemand>();
  const { city, axes } = useSelector((state: IStateData) => state);
  const [demandName, setDemandName] = useState("");
  const [demandCity, setDemandCity] = useState("");
  const [demandAxes, setDemandAxes] = useState("");
  const [demandText, setDemandText] = useState("");
  const [demandPriority, setDemandPriority] = useState("");
  const [demandDescription, setDemandDescription] = useState("");
  const [demandObjectives, setObjective] = useState("");
  const demandFilter = useSelector((state: IStateData) =>
    state.demands.demand.filter((item) => item.id === demandId),
  )[0];
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

  useEffect(() => {
    if (demandFilter) {
      setDemandClicked(demandFilter);
      setDemandName(demandFilter.name);
      setDemandAxes(demandFilter.Axes.id);
      setDemandCity(demandFilter.Cities.id);
      setDemandText(demandFilter.Objective.general);
      setDemandPriority(demandFilter.priority);
      setDemandDescription(demandFilter.description);
      setObjective(demandFilter.Objective.SpecificText.text);
    }
  }, [demandFilter]);

  useEffect(() => {
    if (!opened && demandFilter) {
      setDemandName("");
      setDemandAxes("");
      setDemandCity("");
      setDemandText("");
      setDemandPriority("");
      setDemandDescription("");
      setObjective("");
    }
  }, [opened, demandFilter]);

  const handleSavedData = async (valuesSave: IDemandPost) => {
    dispatch(
      updateDemandsThunk({
        ...valuesSave,
        city_id: demandCity,
        axes_id: demandAxes,
        description: demandDescription,
        generalText: demandText,
        specificText: demandObjectives.toString(),
        priority: demandPriority,
        id: demandClicked?.id,
        name: demandName
      }),
    );
  };
  const handleSplit = (arrayData: string) => {
    if (arrayData) {
      const aux = arrayData.toString().split(",");
      return aux;
    }
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
                <div className="double-data">
                  <InputStyle
                    onChange={(e) => setDemandName(e.target.value)}
                    name="name"
                    required
                    valueChanges={demandName}
                    placeholder="Nome"
                    title=""
                    type="text"
                    className="form-control-demand popup"
                  />
                  <SelectMenuAlternative
                    value={demandClicked && demandPriority}
                    setState={setDemandPriority}
                    name="prioriy"
                    className="text-double text-popup"
                    options={PrioriyData}
                  />
                </div>
                <TextArea
                  name="generalText"
                  height="80px"
                  value={demandClicked && demandText}
                  setState={setDemandText}
                  required
                  className="form-control-demand"
                  placeholder="Objetivos geral"
                  title=""
                />
                <div className="double-data">
                  <SelectMenuAlternative
                    value={demandClicked && demandCity}
                    setState={setDemandCity}
                    name="city_id"
                    className="text-double text-popup"
                    options={city.city}
                  />
                  <SelectMenuAlternative
                    value={demandClicked && demandAxes}
                    setState={setDemandAxes}
                    name="axes_id"
                    className="text-double text-popup"
                    options={axes.axes}
                  />
                </div>
                <div className="content-data-time">
                  <h1 className="title-h3">Objetivo da demanda</h1>
                  <div className="form-control-demand">
                    <ChipAdd
                      listValue={
                        demandClicked && handleSplit(demandObjectives)
                      }
                      reset={opened}
                      text="Objetivo especifico"
                      setState={setObjective}
                    />
                  </div>
                </div>
                <TextArea
                  required
                  value={demandClicked && demandDescription}
                  height="80px"
                  className="form-control-demand"
                  placeholder="Descrição"
                  title=""
                  setState={setDemandDescription}
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
