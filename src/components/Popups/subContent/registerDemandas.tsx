/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";
import ChipAdd from "components/Chips/ChipAdd";
import InputStyle from "components/Inputs";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { ContentProfile } from "components/style";
import TextArea from "components/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { AppDispatch } from "app/store";
import { useForm } from "util/form/useForm";
import { IDemandPost } from "interfaces/data/demand.interface";
import { createDemandsThunk } from "app/reducers/demand/thunk";
import { PrioriyData } from "assets/data/priority";
import { showErrorMessage } from "util/function";

function RegisterDemandas({ setState }: IPropsGlobal) {
  const { city, axes } = useSelector((state: IStateData) => state);
  const [userCity, setUserCity] = useState("");
  const [userAxes, setUserAxes] = useState("");
  const [userText, setUserText] = useState("");
  const [userPriority, setUserPriority] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userObjectives, setObjective] = useState([]);
  const [reset, setReset] = useState(false);

  const initialValues: IDemandPost = {
    description: "",
    generalText: "",
    name: "",
    specificText: "",
    priority: "",
    axes_id: "",
    city_id: "",
  };

  const dispatch = useDispatch<AppDispatch>();
  const { onChange, values } = useForm(initialValues);

  const handleSavedData = async (valuesSave: IDemandPost) => {
    if (userAxes === "" || userCity === "" || userText === "" || userPriority === "" || userPriority === "*"  || userDescription === "") {
      showErrorMessage("Preencha todos os campos", "error");
      return;
    }
    dispatch(
      createDemandsThunk({
        ...valuesSave,
        city_id: userCity,
        axes_id: userAxes,
        description: userDescription,
        generalText: userText,
        specificText: userObjectives.toString(),
        priority: userPriority,
      }),
    );

    setReset(true);
  };

  useEffect(() => {
    if (reset === true) {
      values.name = "";
      setUserPriority("*");
      setUserCity("");
      setUserAxes("");
      setUserText("");
      setUserDescription("");
      setObjective([]);
      setReset(false);
    } 
  }, [reset]);

  return (
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
                  valueChanges={values.name}
                  onChange={onChange}
                  name="name"
                  placeholder="Nome"
                  title=""
                  type="text"
                  className="form-control-demand popup"
                />
                <SelectMenuAlternative
                  value={userPriority}
                  width="30%"
                  className="text-double text-popup"
                  setState={setUserPriority}
                  name="priority"
                  options={PrioriyData}
                />
              </div>
              <TextArea
                value={userText}
                name="generalText"
                height="80px"
                setState={setUserText}
                className="form-control-demand"
                placeholder="Objetivos geral"
                title=""
              />
              <div className="double-data">
                <SelectMenuAlternative
                  value={userCity}
                  setState={setUserCity}
                  name="city_id"
                  className="text-double text-popup"
                  options={city.city}
                />
                <SelectMenuAlternative
                  value={userAxes}
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
                    listValue={userObjectives}
                    reset={reset}
                  />
                </div>
              </div>
              <TextArea
                value={userDescription}
                height="80px"
                className="form-control-demand"
                placeholder="Descrição"
                title=""
                setState={setUserDescription}
                name="description"
              />
            </div>
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
  );
}

export default RegisterDemandas;
