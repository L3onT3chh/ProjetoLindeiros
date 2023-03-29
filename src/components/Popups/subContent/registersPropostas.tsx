/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { createProposalThunk } from "app/reducers/proposital/thunk";
import { AppDispatch } from "app/store";
import ChipAdd from "components/Chips/ChipAdd";
import InputStyle from "components/Inputs";
import { ContentProfile } from "components/style";
import TextArea from "components/Textarea";
import { IProposalPost } from "interfaces/data/demand.interface";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "util/form/useForm";

interface IProps {
  idDemand?: string;
  setTrigger?: any;
  trigger?: boolean;
}

function RegisterProposal({ idDemand, setTrigger, trigger }: IProps) {
  const [valueFormat, setValuFormat] = useState("");
  const [time, setTime] = useState([]);
  const [description, setDescription] = useState("");

  const initialValues: IProposalPost = {
    deadline: "",
    numberInvolved: 0,
    demands_id: idDemand?.toString(),
    description: "",
    time: [],
    value: "0",
  };

  const dispatch = useDispatch<AppDispatch>();
  const { onChange, values } = useForm(initialValues);

  const handleSavedData = async (valuesSave: IProposalPost) => {
    dispatch(
      createProposalThunk({
        ...valuesSave,
        value: valueFormat,
        description,
        demands_id: idDemand,
        time,
        numberInvolved: time.length,
      }),
    );

    setTime([]);
    setDescription("");
    setValuFormat("");
    values.deadline = "";
  };

  const handleFormat = (value: string) => {
    if (value) {
      setValuFormat(`${value}`);
    }
  };

  const closeModal = () => {
    setTrigger(!trigger);
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
              value={description}
              required
              height="110px"
              placeholder="Descrição"
              title=""
              className="form-control-demand text-areax"
            />
            <div className="double-data">
              <InputStyle
                onChange={onChange}
                valueChanges={values.deadline}
                required
                placeholder="Prazo de execução"
                type="date"
                title=""
                name="deadline"
                className="text-double"
              />
              <InputStyle
                onChange={(e) => handleFormat(e.target.value)}
                required
                valueChanges={valueFormat}
                placeholder="Valor do orçamento"
                type="text"
                title=""
                name="value"
                className="text-double"
              />
            </div>
          </div>
          <div className="content-data-time">
            <h1 className="title-h3">Dados da equipe</h1>
            <div className="form-control-demand">
              <ChipAdd setState={setTime} listValue={time} />
            </div>
          </div>
          <div className="btns-popup">
            <button className="btn-close-two" onClick={() => closeModal()}>
              Fechar
            </button>
            <button
              type="button"
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
