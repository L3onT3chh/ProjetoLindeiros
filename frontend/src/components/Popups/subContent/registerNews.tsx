/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import InputStyle from "components/Inputs";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { ContentProfile } from "components/style";
import TextArea from "components/Textarea";
import { useForm } from "util/form/useForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import { createNewssThunk } from "app/reducers/news/thunk";
// import { IPropsGlobal } from "interfaces/components.interface";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { INewsPost } from "../../../interfaces/data/news.interface";

function RegisterNews({ setState }: IPropsGlobal) {
  const { city } = useSelector((state: IStateData) => state);
  const initialState: INewsPost = {
    title: "",
    body: "",
    city_id: "",
    title_url: "",
  };
  const dispatch = useDispatch<AppDispatch>();
  const [cityId, setSelectCity] = useState("");
  const [description, setSelectDescription] = useState("");
  const { onChange, values } = useForm(initialState);
  const handleSavedData = async (valuesSave: INewsPost) => {
    dispatch(
      createNewssThunk({
        ...valuesSave,
        body: description,
        city_id: cityId,
      }),
    );
    setState(false);
  };

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
            <h1 className="title-h3">Dados Básicos</h1>
            <InputStyle
              onChange={onChange}
              name="title"
              placeholder="Nome da Noticía"
              title=""
              required
              type="text"
              className="form-control-demand"
            />
            <SelectMenuAlternative
              setState={setSelectCity}
              name="city_id"
              className="text-double text-popup"
              options={city.city}
            />
            <TextArea
              setState={setSelectDescription}
              required
              height="150px"
              name="body"
              className="form-control-demand"
              placeholder="Descrição"
              title=""
            />
            <div className="btns-popup">
              <button className="btn-close-two">Fechar</button>
              <button className="btn-send">Enviar dados</button>
            </div>
          </div>
        </form>
      </div>
    </ContentProfile>
  );
}

export default RegisterNews;
