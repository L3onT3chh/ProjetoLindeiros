/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { createProposalThunk } from "app/reducers/proposital/thunk";
import { AppDispatch } from "app/store";
import ChipAdd from "components/Chips/ChipAdd";
import InputStyle from "components/Inputs";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { ContentProfile } from "components/style";
import TextArea from "components/Textarea";
import { IProposalPost } from "interfaces/data/demand.interface";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "util/form/useForm";
import { formatKeyTypes } from "util/function";

interface IProps {
  idDemand?: string;
}

function RegisterProposal({ idDemand }: IProps) {
  const [priority, setPriority] = useState("");
  const [time, setTime] = useState([]);
  const [description, setDescription] = useState("");

  const initialValues: IProposalPost = {
    deadline: "",
    demands_id: idDemand?.toString(),
    description: "",
    priority: "",
    time: [],
    value: "0",
  };

  const dispatch = useDispatch<AppDispatch>();
  const { onChange, values } = useForm(initialValues);

  const handleSavedData = async (valuesSave: IProposalPost) => {
    dispatch(
      createProposalThunk({
        ...valuesSave,
        priority,
        description,
        demands_id: idDemand,
        time,
      }),
    );
  };

  return (
    <ContentProfile>
      <div className="content-default">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="content-basic-data">
            <h1 className="title-h3">Dados básicos</h1>
            <TextArea
              setState={setDescription}
              required
              height="110px"
              placeholder="Descrição"
              title=""
              className="form-control-demand text-areax"
            />
            <div className="double-data">
              <InputStyle
                onChange={onChange}
                required
                placeholder="Prazo de execução"
                type="date"
                title=""
                name="deadline"
                className="text-double"
              />
              <InputStyle
                onChange={onChange}
                required
                placeholder="Valor do orçamento"
                type="number"
                title=""
                name="value"
                className="text-double"
              />
            </div>

            <SelectMenuAlternative
              setState={setPriority}
              name="priority"
              className="text-double text-popup"
              options={formatKeyTypes(["Baixa", "Média", "Alta"])}
            />
          </div>
          <div className="content-data-time">
            <h1 className="title-h3">Dados da equipe</h1>
            <div className="form-control-demand">
              <ChipAdd setState={setTime} listValue={time} />
            </div>
          </div>
          <div className="btns-popup">
            <button className="btn-close-two">Fechar</button>
            <button
              className="btn-send"
              onClick={() => handleSavedData(values)}
            >
              Enviar dados
            </button>
          </div>
          <div />
        </form>
      </div>
    </ContentProfile>
  );
}

export default RegisterProposal;
