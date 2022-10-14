/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import InputStyle from "components/Inputs";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { ContentProfile } from "components/style";
import { useForm } from "util/form/useForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
// import { IPropsGlobal } from "interfaces/components.interface";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { createDocuments } from "app/reducers/document/thunk";
import { IDocumentPost } from "../../../interfaces/data/document.interface";

function RegisterNews({ setState }: IPropsGlobal) {
  const { demands } = useSelector((state: IStateData) => state);
  const initialState: IDocumentPost = {
    name: "",
    extension: "",
    path: "",
    fullPath: "",
    demands_id: "",
  };

  const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };
  useEffect(() => {
    const reader = new FileReader();
  }, [selectedFile]);
  // const handleSubmission = () => {};

  const dispatch = useDispatch<AppDispatch>();
  const [demandSelect, setDemandSelect] = useState("");
  const { onChange, values } = useForm(initialState);
  const handleSavedData = async (valuesSave: IDocumentPost) => {
    dispatch(
      createDocuments({
        ...valuesSave,
        demands_id: demandSelect,
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
              placeholder="Nome do Documento"
              title=""
              required
              type="text"
              className="form-control-demand"
            />
            <SelectMenuAlternative
              setState={setDemandSelect}
              name="demands_id"
              className="text-double text-popup"
              options={demands.demand}
            />
            <input
              type="file"
              name="test"
              id="file_id"
              onChange={changeHandler}
            />
            {/* <TextArea
              setState={setSelectDescription}
              required
              height="150px"
              name="body"
              className="form-control-demand"
              placeholder="Descrição"
              title=""
            /> */}
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
