/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { fetchDemandsThunk } from "app/reducers/demand/thunk";
import { createProposalThunk } from "app/reducers/proposital/thunk";
import { AppDispatch } from "app/store";
import ChipAdd from "components/Chips/ChipAdd";
import InputStyle from "components/Inputs";
import { ContentProfile } from "components/style";
import TextArea from "components/Textarea";
import { IProposalPost } from "interfaces/data/demand.interface";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "util/form/useForm";
import { showErrorMessage } from "util/function";

interface IProps {
  idDemand?: string;
  setTrigger?: any;
  trigger?: boolean;
  setPrimary: any;
  primaryValue: any;
}

export const RegisterProposal = ({ idDemand, setTrigger, trigger, setPrimary, primaryValue }: IProps) => {
  const [valueFormat, setValuFormat] = useState("");
  const [time, setTime] = useState([]);
  const [description, setDescription] = useState("");
  const [timeReset, setTimeReset] = useState(false);

  const initialValues: IProposalPost = {
    deadline: "",
    numberInvolved: 0,
    demands_id: idDemand?.toString(),
    description: "",
    time: "",
    value: "0",
  };

  const dispatch = useDispatch<AppDispatch>();
  const { onChange, values } = useForm(initialValues);

  const handleSavedData = async (valuesSave: IProposalPost) => {
    if (description.length === 0 || time.length === 0 || valueFormat.length === 0 || values.deadline.length === 0) {
      showErrorMessage("Preencha todos os campos", "error");
      return;
    }

    setTimeReset(false);
    dispatch(
      createProposalThunk({
        ...valuesSave,
        value: valueFormat,
        description,
        demands_id: idDemand,
        time: time.join("@"),
        numberInvolved: time.length,
      }),
    );
    dispatch(fetchDemandsThunk());

    setTime([]);
    setDescription("");
    setValuFormat("");
    setTimeReset(true);
    values.deadline = "";
  };

  useEffect(() => {
    if (primaryValue) {
      setPrimary(false);
      handleSavedData(values);
    }
  }, [primaryValue]);

  return (
    <ContentProfile>
      <div className="content-default">
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
                title="Prazo de execução"
                name="deadline"
                className="text-double"
              />
              <InputStyle
                onChange={(e) => setValuFormat(e.target.value)}
                required
                valueChanges={valueFormat}
                placeholder="Ex: 5000,00"
                type="text"
                title="Valor do orçamento"
                name="value"
                className="text-double"
              />
            </div>
          </div>
          <div className="content-data-time">
            <h1 className="title-h3">Dados da equipe</h1>
            <div className="form-control-demand">
              <ChipAdd setState={setTime} listValue={time} reset={timeReset} />
            </div>
          </div>
      </div>
    </ContentProfile>
  );
}

export default RegisterProposal;
