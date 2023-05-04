/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import InputStyle from "components/Inputs";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { ContentProfile } from "components/style";
import TextArea from "components/Textarea";
import { useForm } from "util/form/useForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
// import { IPropsGlobal } from "interfaces/components.interface";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { INewsPost } from "../../../interfaces/data/news.interface";
import { UploadBox } from "components/UploadBox";
import { showErrorMessage } from "util/function";
import { addNews } from "API/News/crud.news";

function RegisterNews({ setState, primaryValue, setPrimary }: IPropsGlobal) {
  const { city, axes } = useSelector((state: IStateData) => state);
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);
  const initialState: INewsPost = {
    title: "",
    body: "",
    city_id: "",
    title_url: "",
    axes_id: "",
    createdAt: "",
    Photos: []
  };
  const dispatch = useDispatch<AppDispatch>();
  const [file, setFile] = useState<File[]>();
  const [name, setName] = useState("");
  const [cityId, setSelectCity] = useState("");
  const [axesId, setSelectAxes] = useState("");
  const [description, setSelectDescription] = useState("");
  const { onChange, values } = useForm(initialState);
  const handleSavedData = async (valuesSave: INewsPost) => {
    if (description.length === 0 || cityId === "none" || axesId === "none") {
      showErrorMessage("Preencha todos os campos", "error");
      setPrimary(false);
      return;
    }
    if (!file || file.length === 0) {
      setPrimary(false);
      showErrorMessage("Selecione ao menos arquivo", "error");
      return;
    }

    const data = new FormData();

    for (let i = 0; i < file.length; i++) {
      data.append("file[]", file[i]);
    }

    data.append("name", name);
    data.append("body", description);
    data.append("city_id", cityId);
    data.append("axes_id", axesId);

    setLoading(true);
    let resp = await addNews(data);

    if (resp.status === 200) {
      showErrorMessage(resp.message, "success");
      setName("");
      setSelectAxes("none");
      setSelectCity("none");
      setSelectDescription("");
      setFile(undefined);
      setState(false);
      setReset(true);
      setLoading(false);
      return;
    }

    showErrorMessage(resp.message, "error");
    setPrimary(false);
  };

  useEffect(() => {
    if (!loading && reset) {
      setPrimary(false);
    }
  }, [loading, reset, setReset, setPrimary])

  useEffect(() => {
    if (primaryValue) {
      handleSavedData(values);
    }
  }, [primaryValue]);

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
              onChange={(e) => setName(e.target.value)}
              valueChanges={name}
              name="title"
              placeholder="Nome da Noticía"
              title=""
              required
              type="text"
              className="form-control-demand"
            />
            <div className="double-data" style={{ marginTop: "15px" }}>
              <SelectMenuAlternative
                setState={setSelectCity}
                value={cityId}
                name="city_id"
                className="text-double text-popup"
                options={city.city}
              />
              <SelectMenuAlternative
                setState={setSelectAxes}
                value={axesId}
                name="city_id"
                className="text-double text-popup"
                options={axes.axes}
              />
            </div>
            <TextArea
              setState={setSelectDescription}
              value={description}
              required
              height="200px"
              name="body"
              className="form-control-demand"
              placeholder="Corpo da noticia"
              title=""
            />
            <h1 className="title-h3">Imagens</h1>
            <UploadBox file={file} setFile={setFile} isMultiple={true} />
          </div>
        </form>
      </div>
    </ContentProfile>
  );
}

export default RegisterNews;
