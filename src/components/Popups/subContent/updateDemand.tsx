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
import { selectUserLogged } from "app/reducers/auth/authSlice";
import { convertToArray } from "util/handleSelectorObj";

interface IProps {
  demandId: string;
  setState: any;
  opened: boolean;
  setPrimary: any;
  primaryValue: any;
}

function UpdateDemand({ demandId, setState, opened, setPrimary, primaryValue }: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: IStateData) => state.demands.loading);
  const [demandClicked, setDemandClicked] = useState<IDemand>();
  const { city, axes } = useSelector((state: IStateData) => state);
  const [demandName, setDemandName] = useState("");
  const [demandCity, setDemandCity] = useState("");
  const [demandAxes, setDemandAxes] = useState("");
  const [demandText, setDemandText] = useState("");
  const [demandPriority, setDemandPriority] = useState("");
  const [demandDescription, setDemandDescription] = useState("");
  const [demandObjectives, setObjective] = useState([]);
  const user = useSelector(selectUserLogged);
  const demandFilter = useSelector((state: IStateData) =>
    (convertToArray(state.demands.demand) || []).filter((item) => item.id === demandId),
  )[0];
  const [reset, setReset] = useState(false);
  const initialValues: IDemandPost = {
    description: "",
    generalText: "",
    name: "",
    specificText: "",
    priority: "",
    axes_id: "",
    city_id: "",
    user_id: ""
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
    if (primaryValue) {
      handleSavedData(values);
    }
  }, [primaryValue]);

  useEffect(()=>{
    if(!loading && reset){
      setState(false);
      setPrimary(false);
    }
  }, [loading, reset, setReset, setPrimary])

  const handleSavedData = async (valuesSave: IDemandPost) => {
    if (convertToArray(user)[0].id) {
      let specific = (demandObjectives) ? demandObjectives.join('@') : demandObjectives;
      dispatch(
        updateDemandsThunk({
          ...valuesSave,
          user_id: convertToArray(user)[0].id,
          city_id: demandCity,
          axes_id: demandAxes,
          description: demandDescription,
          generalText: demandText,
          specificText: specific,
          priority: demandPriority,
          id: demandClicked?.id,
          name: demandName
        }),
      );
      setReset(true);
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
                    maxLength={60}
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
                  length={30000}
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
                      listValue={demandClicked && demandObjectives}
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
                  length={150}
                  title=""
                  setState={setDemandDescription}
                  name="description"
                />
              </div>{" "}
            </div>
          </form>
        </div>
      </ContentProfile>
    )
  );
}

export default UpdateDemand;
