/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { ContainerInputAdd } from "components/style";
import { GrAdd } from "react-icons/gr";
import { IPropsGlobal } from "interfaces/components.interface";

function InputAdd({ setState, listValue, text }: IPropsGlobal) {
  const [state, setInput] = useState("");

  const handleAdd = (value: string) => {
    if (value !== "" && listValue !== undefined && listValue.length < 6) {
      setState([...listValue, value]);
    }
    setInput("");
  };

  return (
    <ContainerInputAdd>
      <input
        type="text"
        className="input-add-btn text-popup"
        placeholder={text || "Adicione um novo item"}
        value={state}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="button-btn-add" onClick={() => handleAdd(state)}>
        <GrAdd color="white" className="icon-add-btn" size={17} />
      </button>
    </ContainerInputAdd>
  );
}

export default InputAdd;
