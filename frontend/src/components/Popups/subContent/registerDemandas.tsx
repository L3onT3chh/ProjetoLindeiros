/* eslint-disable react/button-has-type */
import React from "react";
import ChipAdd from "components/Chips/ChipAdd";
import InputStyle from "components/Inputs";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { ContentProfile } from "components/style";
import TextArea from "components/Textarea";

function RegisterDemandas() {
  //   const dispatch = useDispatch<AppDispatch>();
  //   const { onChange, values } = useForm(initialValues);

  //   const handleSavedData = async (valuesSave: IDemandPost) => {
  //     dispatch(
  //       createDemandsThunk({
  //         ...valuesSave,
  //       }),
  //     );
  //   };

  return (
    <ContentProfile>
      <div className="content-default">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            // handleSavedData(values);
          }}
        >
          <div className="content-basic-data">
            <h1 className="title-h3">Dados Básicos</h1>
            <InputStyle
              //   onChange={onChange}
              name="name"
              placeholder="Nome"
              title=""
              type="text"
              className="form-control-demand"
            />
            <div className="double-data">
              <InputStyle
                // onChange={onChange}
                name="priority"
                placeholder="Prioridade"
                title=""
                type="text"
                className="form-control-demand text-double"
              />
              <InputStyle
                // onChange={onChange}
                name="area"
                placeholder="Área de conhecimento"
                title=""
                type="text"
                className="form-control-demand text-double"
              />
            </div>
            <TextArea
              height="80px"
              className="form-control-demand"
              placeholder="Objetivos geral"
              title=""
            />
            <div className="double-data">
              <SelectMenuAlternative
                //   setState={setTypeUser}
                name="user_type"
                className="text-double text-popup"
                options={[]}
              />
              <SelectMenuAlternative
                //   setState={setTypeUser}
                name="user_type"
                className="text-double text-popup"
                options={[]}
              />
            </div>
            <div className="content-data-time">
              <h1 className="title-h3">Dados da equipe</h1>
              <div className="form-control-demand">
                <ChipAdd text="Objetivo especifico" />
              </div>
            </div>
            <TextArea
              height="80px"
              className="form-control-demand"
              placeholder="Descrição"
              title=""
              name="description"
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

export default RegisterDemandas;
