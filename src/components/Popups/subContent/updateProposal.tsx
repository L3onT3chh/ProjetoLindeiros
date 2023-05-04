/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from "react";
import { ContentProfile } from "components/style";
import InputStyle from "components/Inputs";
import { useForm } from "util/form/useForm";
import { createUserThunk } from "app/reducers/user/thunk";
import { AppDispatch } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { IUser, IUserPost } from "interfaces/data/user.interface";
import { SelectMenuAlternative } from "components/Select/Alterntive";
import { IStateData } from "interfaces/components.interface";
import { getToast, setMessageToToast } from "app/reducers/toast/toastSlice";
import cep from "cep-promise";
import { showErrorMessage } from "util/function";
import { selectUsersMessage, usersStatus } from "app/reducers/user/userSlice";
import { exit } from "process";
import { findOneProposal, updateProposal } from "app/reducers/proposital/thunk";
import TextArea from "components/Textarea";
import { IProposal } from "interfaces/data/demand.interface";
import { clean, proposalStatus } from "app/reducers/proposital/propositalSlice";
import { convertToArray } from "util/handleSelectorObj";
import { PopUpLoading } from "components/PopUpLoading";
// import { findByCep } from "API/Cep";

interface props {
    modal: any;
    setPrimary: any;
    trigger: any;
    primaryValue: any;
    setState?: any;
    proposalId: string;
    setFooter: any;
}

function UpdateProposal({ modal, setPrimary, primaryValue, setState, proposalId, setFooter }: props) {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: IStateData) => state.proposal.secondaryLoading);
    const proposal = useSelector((state: IStateData) => state.proposal.item);
    const status = useSelector(proposalStatus);
    const [valueFormat, setValuFormat] = useState("");
    const [time, setTime] = useState([]);
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [timeReset, setTimeReset] = useState(false);

    const [reset, setReset] = useState(false);



    useEffect(() => {
        if (proposalId) {
            dispatch(clean());
            dispatch(findOneProposal(proposalId));
        }
    }, [proposalId]);

    const currentDate = (date: string) => {
        var data = new Date(date);
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();

        return `${ano}-${mes}-${dia}`;
    }

    useEffect(() => {
        if (typeof proposal === "object" && convertToArray(proposal).length > 0) {
            let temp: any = proposal;
            setDescription(convertToArray(proposal)[0].description);
            setDate(currentDate(convertToArray(proposal)[0].Details.deadline));
            handlerMoney(convertToArray(proposal)[0].Details.value);
            setFooter(false);
        }
    }, [proposal]);

    const handleSaveData = async () => {
        if (description.length === 0 || valueFormat.length === 0 || date.length === 0) {
            showErrorMessage("Preencha todos os campos", "error");
            setPrimary(false);
            return;
        }

        dispatch(updateProposal({
            description,
            id: proposalId,
            value: valueFormat,
            deadline: date
        }))


        setReset(true);
    };

    useEffect(() => {
        setFooter(loading);
    }, [loading, setFooter]);

    useEffect(() => {
        if (!loading && reset) {
            setPrimary(false);

            if (status === 200) {
                setReset(false);
                setState(false);
            }
        }
    }, [loading, reset, setReset, setPrimary])

    const handlerMoney = (value: any) => {
        var valor = value.replace(/[^\d]+/gi, '').split('').reverse().join('');
        var resultado = "";
        var mascara = "##.###.###,##".split('').reverse().join('');
        for (var x = 0, y = 0; x < mascara.length && y < valor.length;) {
            if (mascara.charAt(x) != '#') {
                resultado += mascara.charAt(x);
                x++;
            } else {
                resultado += valor.charAt(y);
                y++;
                x++;
            }
        }

        setValuFormat(resultado.split('').reverse().join(''));
    }

    useEffect(() => {
        if (primaryValue) {
            handleSaveData();
        }
    }, [primaryValue]);

    return (
        <ContentProfile>
            {(loading) ? (
                <PopUpLoading loading={true} />
            ) : (
                <div className="content-default">
                    <div className="content-basic-data">
                        <h1 className="title-h3">Dados básicos</h1>
                        <TextArea
                            setState={setDescription}
                            value={description}
                            required
                            height="150px"
                            placeholder="Descreva sua proposta..."
                            length={30000}
                            title=""
                            className="form-control-demand text-areax"
                        />
                        <div className="double-data">
                            <InputStyle
                                onChange={(e) => setDate(e.target.value)}
                                valueChanges={date}
                                required
                                limitBefore
                                placeholder="Prazo para conclusão"
                                type="date"
                                title="Prazo para conclusão"
                                name="deadline"
                                className="text-double"
                            />
                            <InputStyle
                                onChange={(e) => handlerMoney(e.target.value)}
                                required
                                valueChanges={valueFormat}
                                placeholder="somente numeros"
                                type="text"
                                title="Valor do orçamento"
                                name="value"
                                className="text-double"
                            />
                        </div>
                    </div>
                </div>
            )
            }
        </ContentProfile>
    );
}
export default UpdateProposal;
