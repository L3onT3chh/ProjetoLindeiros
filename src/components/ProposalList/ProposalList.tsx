import { Container } from "./style";
import { FaTimes } from "react-icons/fa";
import { BsFillTrash2Fill, BsCheckLg, BsStopwatch } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineUser } from "react-icons/ai";
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

interface IProposalList {
    state: boolean;
    setState: any;
    data?: IDemand;
    outDetails?: any;
}

export const ProposalList = ({ state, setState, data, outDetails }: IProposalList) => {
    const dispatch = useDispatch<AppDispatch>();
    const [list, setList] = useState<any>();
    const [demandId, setDemandId] = useState<any>();
    const [details, setDetails] = useState<any>();

    useEffect(() => {
        if (outDetails !== undefined) {
            openProposalData(outDetails);
        }
    }, [outDetails, details]);

    useEffect(() => {
        if (data && data.id) {
            setDemandId(data.id);
            setList([]);
        }
    }, [data, demandId]);

    useEffect(() => {
        if (list && list.length === 0) {
            const refreshProposal = async () => {
                if (demandId) {
                    let proposal: any = await findProposal(demandId);

                    if (proposal.data) {
                        console.log(proposal.data.ProposalList)
                        setList(convertToArray(proposal.data.ProposalList));
                    }
                }
            }

            refreshProposal();
        }
    }, [list, demandId]);

    const setCurrency = (num: string) => {
        let fnum = parseFloat(num);

        return fnum.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' });
    }

    const setProposalState = async (id: string, state: string) => {
        if (id) {
            const up = await updateProposal({
                id: id,
                isAproved: state,
            })
            console.log(up);
            setList([]);
        }
    }

    const openProposalData = async (item: IProposal) => {
        if (item) {
            let data = await findTeam(item.id);

            let fullData: any = Object.assign({}, item);
            fullData['team'] = convertToArray(data);

            if (outDetails !== undefined) {
                fullData['name'] = item.User.name;
            }

            setDetails(fullData);
        }
    }

    return (
        <Container state={state}>
            <div className="body">
                <div className="title">
                    <div className="info">
                        <h1>{(outDetails === undefined) ? "Lista de Propostas" : "Detalhes da Propostas"}</h1>
                        <h3>{data?.name}</h3>
                    </div>
                    <span style={{ cursor: "pointer" }} onClick={() => { setState(false); setDetails(undefined) }}><FaTimes size={25} color="#8f9497" /></span>
                </div>
                <div className="content">
                    {details &&
                        (
                            <div className="details">
                                {outDetails === undefined &&
                                    (
                                        <button className="backButton" onClick={() => setDetails(undefined)}><AiOutlineArrowLeft /> Voltar</button>
                                    )
                                }
                                <p className="subTitle"><span>{parseInt(details.Details.numberInvolved) + 1}</span> Participantes</p>
                                <div className="participants">
                                    <span style={{ borderColor: '#ffcd56', color: '#ffcd56' }}><AiOutlineUser color="#ffcd56" />{details.name.trim()}</span>
                                    {details.team[0] !== undefined && convertToArray(details.team).map((item: any, index: number) => (
                                        <span key={index} onClick={()=> console.log(item)}><AiOutlineUser />{item.name}</span>
                                    ))}
                                </div>
                                <p className="subTitle">Plano proposto</p>
                                <p className="text">{details.description}</p>
                            </div>
                        )
                    }
                    {!details &&
                        (
                            <>
                                {outDetails === undefined && (
                                    <>
                                        <div className="search">
                                            <p className="subTitle">Encontrar Proposta</p>
                                            <input type="text" placeholder="Pesquise por" disabled={(list && list.length > 0) ? false : true} />
                                        </div>
                                        <div className="table">
                                            <p className="subTitle"><span>{(list) ? list.length : 0}</span> Propostas encontradas<sub style={{ fontSize: "10px", letterSpacing: "-0.5px", fontWeight: "normal" }}>(Clique em "Ver mais" para consultar detalhes)</sub></p>
                                            <table>
                                                <thead>
                                                    <th>Proposta</th>
                                                    <th>Prazo para conclusão</th>
                                                    <th>Orçamento</th>
                                                    <th>Situação</th>
                                                    <th>Ações</th>
                                                </thead>
                                                <tbody>
                                                    {list &&
                                                        list.map((item: any, index: number) => (
                                                            <tr key={index}>
                                                                <td onClick={() => openProposalData(item)} style={{paddingLeft:0}}><p className="field-button" style={{textAlign: "center"}}>Ver mais</p></td>
                                                                <td>{dataFormat(item.Details.deadline)}</td>
                                                                <td>{item.Details.value}</td>
                                                                <td className={(item.isAproved == 1) ? "aproved" : "await"}>{(item.isAproved == 1) ? "Aprovado" : "Pendente"}</td>
                                                                <td>
                                                                    <span>
                                                                        {item.isAproved == 1 &&
                                                                            (
                                                                                <BsStopwatch
                                                                                    color="#1d5e83"
                                                                                    className="btn-click"
                                                                                    size={20}
                                                                                    onClick={() => setProposalState(item.id, "0")}
                                                                                />
                                                                            )
                                                                        }
                                                                        {item.isAproved != 1 &&
                                                                            (
                                                                                <BsCheckLg
                                                                                    color="#4aea38"
                                                                                    className="btn-click"
                                                                                    size={20}
                                                                                    onClick={() => setProposalState(item.id, "1")}
                                                                                />
                                                                            )
                                                                        }
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        )
                                                        )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                )
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </Container>
    )
}