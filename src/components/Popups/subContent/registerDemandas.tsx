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
import { selectUserLogged } from "app/reducers/auth/authSlice";
import { convertToArray } from "util/handleSelectorObj";
import { demandLoading, demandStatus } from "app/reducers/demand/demandSlice";

function RegisterDemandas({ setState, setPrimary, primaryValue }: IPropsGlobal) {
  const { city, axes } = useSelector((state: IStateData) => state);
  const loading = useSelector(demandLoading);
  const status = useSelector(demandStatus);
  const [userCity, setUserCity] = useState("");
  const [userAxes, setUserAxes] = useState("");
  const [userText, setUserText] = useState("");
  const [userPriority, setUserPriority] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userObjectives, setObjective] = useState([]);
  const [reset, setReset] = useState(false);
  const user = useSelector(selectUserLogged);

  const initialValues: IDemandPost = {
    description: "",
    generalText: "",
    name: "",
    priority: "",
    axes_id: "",
    city_id: "",
    user_id: ""
  };

  const dispatch = useDispatch<AppDispatch>();
  const { onChange, values } = useForm(initialValues);

  const handleSavedData = async (valuesSave: IDemandPost) => {
    if (userAxes === "" || userCity === "" || userText === "" || userPriority === "" || userPriority === "*" || userDescription === "") {
      showErrorMessage("Preencha todos os campos", "error");
      setPrimary(false);
      return;
    }

    if (convertToArray(user)[0].id) {
      setReset(true);
      dispatch(
        createDemandsThunk({
          ...valuesSave,
          user_id: convertToArray(user)[0].id,
          city_id: userCity,
          axes_id: userAxes,
          description: userDescription,
          generalText: userText,
          priority: userPriority,
        }),
      );
    }
  };

  useEffect(()=>{
    if(!loading && reset){
      setPrimary(false);

      if(status === 200){
        clean();
      }
    }
  }, [loading, reset, status, setReset, setPrimary])

  useEffect(() => {
    if (primaryValue) {
      handleSavedData(values);
    }
  }, [primaryValue]);

  const clean = () => {
    values.name = "";
    setUserPriority("*");
    setUserCity("");
    setUserAxes("");
    setUserText("");
    setUserDescription("");
    setObjective([]);
    setReset(false);
  }

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
                  maxLength={60}
                  marginB="0px"
                  placeholder="Título da demanda"
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
                length={150}
                height="100px"
                setState={setUserText}
                className="form-control-demand"
                placeholder="Objetivo geral"
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
              <TextArea
                value={userDescription}
                height="150px"
                length={30000}
                className="form-control-demand"
                placeholder="Descrição detalhada"
                title=""
                setState={setUserDescription}
                name="description"
              />
            </div>
          </div>
        </form>
      </div>
    </ContentProfile>
  );
}

export default RegisterDemandas;
