/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { ContentProfile } from "components/style";
import InputStyle from "components/Inputs";
import { useForm } from "util/form/useForm";
import { updateUserThunk } from "app/reducers/user/thunk";
import { AppDispatch } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { IUser, IUserPost } from "interfaces/data/user.interface";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { IStateData } from "interfaces/components.interface";
import { showErrorMessage } from "util/function";

interface IProps {
  userId: string;
  trigger: boolean;
  setState: any;
  removeSelects?: boolean;
  setPrimary: any;
  primaryValue: any;
}

function UpdateUser({ userId, trigger, setState, removeSelects, setPrimary, primaryValue }: IProps) {
  const userFilter = useSelector((state: IStateData) =>
    state.users.users.filter((item) => item.id === userId),
  )[0];

  const loading = useSelector((state: IStateData) => state.users.loading);

  const dispatch = useDispatch<AppDispatch>();
  const [typeUser, setTypeUser] = useState("");
  const [userFiltered, setUserFiltered] = useState<IUser>();
  const [reset, setReset] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [ddd, setDDD] = useState("");
  const [phone, setPhone] = useState("");
  const [bDate, setBdate] = useState("");
  const [type, setType] = useState("");
  const [uCity, setUcity] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  useEffect(() => {
    if (userFilter) {
      setName(userFilter.name);
      setEmail(userFilter.email);
      setCPF(userFilter.cpf);
      setDDD(userFilter.phone_ddd);
      setPhone(userFilter.phone);
      setBdate(userFilter.born_date);

      if (userFilter.city_id && userFilter.userType_id) {
        setUcity(userFilter.city_id);
        setType(userFilter.userType_id);
      }
    }
  }, [userFilter]);


  const initialValue: IUserPost = {
    name: "",
    email: "",
    cpf: "",
    born_date: "",
    phone: 0,
    phone_ddd: 0,
    userType: "",
    city: "",
    password: "",
  };
  const { userTypes, city } = useSelector((state: IStateData) => state);
  const { onChange, values } = useForm(initialValue);
  const handleSaveData = async (valuesSave: IUserPost) => {
    if (password.length > 0 && (confPassword !== password)) {
      showErrorMessage("Senhas não coincidem", "error");
      return;
    }

    if(removeSelects){
      dispatch(
        updateUserThunk({
          ...valuesSave,
          ename: name,
          email: email,
          cpf: cpf,
          phone: phone,
          phone_ddd: ddd,
          born_date: bDate,
          password: password,
          id: userId
        }),
      );
    }else{
      dispatch(
        updateUserThunk({
          ...valuesSave,
          ename: name,
          email: email,
          cpf: cpf,
          phone: phone,
          phone_ddd: ddd,
          born_date: bDate,
          password: password,
          userType: type,
          city: uCity,
          id: userId
        }),
      );
    }
    setReset(true);
    setPassword("");
    setConfPassword("");
  };

  useEffect(()=>{
    if(!loading && reset){
      setPrimary(false);
      setState(false);
    }
  }, [loading, reset, setReset, setPrimary])

  useEffect(() => {
    if (primaryValue) {
      handleSaveData(values);
    }
  }, [primaryValue]);

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
            <input type="hidden" value="something" />
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
              {!removeSelects && (
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
              )
              }
              <h1 className="title-h3" style={{ marginTop: "20px" }}>Editar senha do usuario</h1>
              <InputStyle
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                valueChanges={password}
                placeholder="Nova senha (opcional)"
                autocomplete
                title=""
                type="password"
                className="form-control-demand"
              />
              <InputStyle
                name="password"
                onChange={(e) => setConfPassword(e.target.value)}
                valueChanges={confPassword}
                placeholder="Confirmar senha"
                autocomplete
                title=""
                type="password"
                className="form-control-demand"
              />
            </div>
            <div className="form-control-demand" />
            <div />
          </form>
        </div>
      </ContentProfile>
    )
  );
}
export default UpdateUser;
