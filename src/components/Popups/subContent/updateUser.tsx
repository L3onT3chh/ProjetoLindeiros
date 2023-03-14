/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { ContentProfile } from "components/style";
import InputStyle from "components/Inputs";
import { useForm } from "util/form/useForm";
import { createUserThunk } from "app/reducers/user/thunk";
import { AppDispatch } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { IUser, IUserPost } from "interfaces/data/user.interface";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { IStateData } from "interfaces/components.interface";

interface IProps {
  userId: string;
  trigger: boolean;
}

function UpdateUser({ userId, trigger }: IProps) {
  const userFilter = useSelector((state: IStateData) =>
    state.users.users.filter((item) => item.id === userId),
  )[0];

  const dispatch = useDispatch<AppDispatch>();
  const [typeUser, setTypeUser] = useState("");
  const [userFiltered, setUserFiltered] = useState<IUser>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [ddd, setDDD] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [bDate, setBdate] = useState("");
  const [type, setType] = useState("");
  const [uCity, setUcity] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userFilter) {
      setName(userFilter.name);
      setEmail(userFilter.email);
      setCPF(userFilter.cpf);
      setDDD(userFilter.phone_ddd);
      setPhone(userFilter.phone);
      setBdate(userFilter.born_date);
      setAddress(userFilter.address);

      if (userFilter.city_id && userFilter.userType_id) {
        setUcity(userFilter.city_id);
        setType(userFilter.userType_id);
      }
      console.log(userFilter);
    }
  }, [userFilter]);

  useEffect(() => {
    if (!trigger && userFilter) {
      setName("");
      setEmail("");
      setCPF("");
      setDDD("");
      setPhone("");
      setBdate("");
      setAddress("");
      setUcity("");
      setType("");
    }
  }, [trigger, userFilter])

  const [dataCity, setDataCity] = useState("");
  const initialValue: IUserPost = {
    name: "",
    email: "",
    cpf: "",
    born_date: "",
    address: "",
    phone: 0,
    phone_ddd: 0,
    userType: "",
    city: "",
    password: "",
  };
  const { userTypes, city } = useSelector((state: IStateData) => state);
  const { onChange, values } = useForm(initialValue);
  const handleSaveData = async (valuesSave: IUserPost) => {
    dispatch(
      createUserThunk({
        ...valuesSave,
        userType: typeUser,
        city: dataCity,
      }),
    );
  };
  return (
    userFilter && (
      <ContentProfile>
        <div className="content-default">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveData(values);
            }}
          >
            <div className="content-basic-data">
              <h1 className="title-h3">Dados básicos</h1>
              <InputStyle
                onChange={(e) => setName(e.target.value)}
                name="name"
                placeholder="Nome"
                valueChanges={name}
                title=""
                type="text"
                className="form-control-demand"
              />
              <InputStyle
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Email"
                valueChanges={email}
                title=""
                type="email"
                className="form-control-demand"
              />
              <InputStyle
                onChange={(e) => setCPF(e.target.value)}
                placeholder="CPF"
                name="cpf"
                valueChanges={cpf}
                title=""
                maxLength={11}
                type="number"
                className="form-control-demand"
              />
              <div className="double-data" style={{ marginTop: "15px" }}>
                <InputStyle
                  onChange={(e) => setDDD(e.target.value)}
                  placeholder="DDD"
                  title=""
                  valueChanges={ddd}
                  maxLength={2}
                  name="phone_ddd"
                  type="number"
                  className="text-double"
                />
                <InputStyle
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nº de telefone"
                  title=""
                  valueChanges={phone}
                  maxLength={8}
                  name="phone"
                  type="phone"
                  className="text-double"
                />
              </div>
              <InputStyle
                onChange={(e) => setBdate(e.target.value)}
                placeholder="Data de nascimento"
                name="born_date"
                valueChanges={bDate}
                title=""
                type="date"
                className="form-control-demand"
              />
              <div className="double-data" style={{ marginTop: "15px" }}>
                <SelectMenuAlternative
                  setState={setType}
                  value={type}
                  name="user_type"
                  className="text-double text-popup"
                  options={[
                    {
                      name: "Tipo de usuário",
                      id: "standard",
                    },
                    ...userTypes.types
                  ]}
                />
                <SelectMenuAlternative
                  setState={setUcity}
                  value={uCity}
                  valueDefault=""
                  name="city_id"
                  className="text-double text-popup"
                  options={city.city}
                />
              </div>
              <InputStyle
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Endereço completo"
                title=""
                valueChanges={address}
                value=""
                type="text"
                className="form-control-demand"
              />
              <InputStyle
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="mudar senha(opcional)"
                title=""
                type="password"
                className="form-control-demand"
              />
            </div>
            <div className="form-control-demand" />
            <div className="btns-popup">
              <button className="btn-close-two">Fechar</button>
              <button className="btn-send">Enviar dados</button>
            </div>
            <div />
          </form>
        </div>
      </ContentProfile>
    )
  );
}
export default UpdateUser;
