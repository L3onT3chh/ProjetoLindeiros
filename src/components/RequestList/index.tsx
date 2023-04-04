import { Container } from "./style";
import { FaCity, FaTimes } from "react-icons/fa";
import { BsFillTrash2Fill, BsCheckLg, BsStopwatch } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { IDemand, IProposal } from "interfaces/data/demand.interface";
import { useEffect, useState } from "react";
import { GetMonth } from "util/getMonth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "app/store";
import { findOneDemands } from "API/Demand/find.demand";
import { updateProposal } from "API/Demand/Proposital/crud.proposal";
import { findProposal } from "API/Demand/Proposital/find.proposal";
import { findTeam } from "API/Team/find.team";
import { dataFormat } from "util/dateFormater";
import { convertToArray } from "util/handleSelectorObj";
import { selectCurentUser } from "app/reducers/auth/authSlice";
import { GiSuitcase } from "react-icons/gi";
import { IRequest } from "interfaces/data/user.interface";
import { requestAccept, requestDenied } from "API/User/crud.user";
import { showErrorMessage } from "util/function";
import { fetchRequestUsersThunk } from "app/reducers/user/thunk";

interface IProposalList {
    state: boolean;
    setState: any;
    data: IRequest;
}

export const RequestList = ({ state, setState, data }: IProposalList) => {
    const dispatch = useDispatch<AppDispatch>();
    const [list, setList] = useState<any>();
    const [demandId, setDemandId] = useState<any>();
    const [details, setDetails] = useState<any>();

    const acceptRequest = async (id:string) => {
        if(id && data.status === "1"){
          const resp = await requestAccept(id);
          if (resp.status === 200) showErrorMessage("Email enviado com sucesso!", "success");
          setState(false);
          dispatch(fetchRequestUsersThunk());
        }
    }
    const deniedRequest = async (id:string) => {
        // eslint-disable-next-line no-restricted-globals
        if(id && confirm("Tem certeza que deseja realizar essa ação?")){
          const resp = await requestDenied(id);
          if (resp.status === 200) showErrorMessage("Ação realizada com sucesso!", "success");
          setState(false);
          dispatch(fetchRequestUsersThunk());
        }
    }
    return (
        <Container state={state}>
            <div className="body">
                <div className="title">
                    <div className="info">
                        <h1>Informações adicionais</h1>
                    </div>
                    <span style={{ cursor: "pointer" }} onClick={() => { setState(false); setDetails(undefined) }}><FaTimes size={25} color="#8f9497" /></span>
                </div>
                <div className="content">
                    <div className="details">
                        <p className="subTitle">Dados</p>
                        <div className="participants">
                            <span><FaCity />&nbsp;{data.Cities.name}</span>
                            <span><GiSuitcase />&nbsp;{data.Usertype.name}</span>
                            <span><AiOutlineMail />&nbsp;{data.email}</span>
                        </div>
                        <p className="subTitle">Objetivo</p>
                        <p className="text">{data.text}</p>
                    </div>
                </div>
                <div className="footer">
                    <button className={"accept "+(data.status === "2" ? "disabled" : "")} onClick={() => acceptRequest(data.id)}>Aceitar</button>
                    <button className="denied" onClick={() => deniedRequest(data.id)}>Negar</button>
                </div>
            </div>
        </Container>
    )
}