/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from "react";
import { ContentProfile } from "components/style";
import { useForm } from "util/form/useForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { createDocuments } from "app/reducers/document/thunk";
import { IDocumentPost } from "../../../interfaces/data/document.interface";
import addFile from '../../../assets/img/docsext/addfile.png';
import check from '../../../assets/img/check.png';
import { MdClose } from "react-icons/md";
import { showErrorMessage } from "util/function";
import { allowedExt, maxUploadSize } from "config";
import { RegisterDocumenty } from "../../../API/Document/crud.documents";

function RegisterDocument({ setState, setRefresh, primaryValue, setPrimary }: IPropsGlobal) {
  let input: any = useRef("");
  const { demands } = useSelector((state: IStateData) => state);
  const initialState: IDocumentPost = {
    name: "",
    extension: "",
    path: "",
    fullPath: "",
    size: ""
  };

  const dispatch = useDispatch<AppDispatch>();
  const [demandSelect, setDemandSelect] = useState("");
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState("");
  const { onChange, values } = useForm(initialState);

  const handleSavedData = async (valuesSave: IDocumentPost) => {
    if (title.length === 0) {
      showErrorMessage("Informe o titulo do arquivo", "error");
      return;
    }
    if (!file) {
      showErrorMessage("Selecione um arquivo", "error");
      return;
    }
    if (file.size > maxUploadSize) {
      cleanFile()
      showErrorMessage(`Selecione um arquivo até ${bytesToSize(maxUploadSize)}`, "error");
      return;
    }
    if (!allowedExt.includes(file.type)) {
      cleanFile()
      showErrorMessage("Tipo de arquivo não permitido", "error");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("name", title);

    let resp = await RegisterDocumenty(data);

    if (resp && resp.status === 200) {
      showErrorMessage(resp.message, "success");
      setState(false);
      setTitle("");
      cleanFile();
      setRefresh(true);
    }
    
    setPrimary(false);
  };

  useEffect(() => {
    if (primaryValue) {
      handleSavedData(values);
    }
  }, [primaryValue]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files[0].size > maxUploadSize) {
        cleanFile()
        showErrorMessage(`Selecione um arquivo até ${bytesToSize(maxUploadSize)}`, "error");
        return;
      }
      if (!allowedExt.includes(e.target.files[0].type)) {
        cleanFile()
        showErrorMessage("Tipo de arquivo não permitido", "error");
        return;
      }

      setFile(e.target.files[0]);
    }
  }

  const cleanFile = () => {
    setFile(undefined);
    input.current.value = "";
  }

  function bytesToSize(bytes: any, seperator = "") {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes == 0) return 'n/a'
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    if (i === 0) return `${bytes}${seperator}${sizes[i]}`
    return `${(bytes / (1024 ** i)).toFixed(1)}${seperator}${sizes[i]}`
  }

  return (
    <ContentProfile className="content-file">
      <div className="content-default" style={{ width: "100%", height: "100%" }}>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSavedData(values);
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <div className="content-basic-data" style={{ width: "100%", height: "100%" }}>
            <div className="fileContent" onClick={() => (!file) ? input.current.click() : ''} style={{ borderColor: (file) ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)', cursor: (file) ? 'initial' : 'pointer' }}>
              <img src={(file) ? check : addFile} alt="upload de arquivo" width="50" />
              {file && (
                <div className="fileInfo">
                  <div className="left">
                    <img src={addFile} alt="upload de arquivo" width="40" height="40" />
                    <div className="text">
                      <p>{(file.name.length > 28) ? file.name.toString().substring(0, 28) + '...' : file.name}</p>
                      <span>{bytesToSize(file.size, "")}</span>
                    </div>
                  </div>
                  <button className="btnRemoveFile" style={{ background: 'none' }}><MdClose size={25} onClick={() => cleanFile()} /></button>
                </div>
              )
              }
              {!file && (
                <>
                  <p>Selecione um arquivo</p>
                  <span>são permitidos pdf, xls, jpg, png</span>
                </>
              )
              }
              <input type="file" onChange={(e) => handleFileUpload(e)} ref={input} hidden />
            </div>
            <div className="titleContent">
              <h2>Titulo documento</h2>
              <input type="text" name="name" onChange={(e) => setTitle(e.currentTarget.value)} value={title} placeholder="digite o titulo" />
            </div>
          </div>
        </form>
      </div>
    </ContentProfile>
  );
}

export default RegisterDocument;
