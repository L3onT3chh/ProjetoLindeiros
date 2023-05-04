/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { IUser } from "interfaces/data/user.interface";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { NotFound } from "components/Notfound";
import PDefault from "components/Popups";
import UpdateUser from "components/Popups/subContent/updateUser";
import { IStateData } from "interfaces/components.interface";
import { useDispatch, useSelector } from "react-redux";
import { mergeFilters, cleanFilters, filterSearch, filterCity, filterTypeUser } from "app/reducers/user/userSlice";
import { AppDispatch } from "app/store";
import { deleteUserThunk, fetchUsersThunk } from "app/reducers/user/thunk";
import { ContentProfile } from "components/style";
import { cleanDemand, selectCurrentDemands } from "app/reducers/demand/demandSlice";
import { findAllByUsersThunk } from "app/reducers/demand/thunk";
import { IDemand, IProposal } from "interfaces/data/demand.interface";
import { convertToArray } from "util/handleSelectorObj";
import UpdateProposal from "components/Popups/subContent/updateProposal";
import { fetchProposalRelatedDemand } from "app/reducers/proposital/thunk";
import { showErrorMessage } from "util/function";


interface IProps {
    fields: string[];
}

export function TableProposal({ fields }: IProps) {
    const dispatch = useDispatch<AppDispatch>();
    const demands = useSelector(selectCurrentDemands);
    const [userClicked, setUserClicked] = useState("");
    const { auth } = useSelector((state: IStateData) => state);
    const { proposal } = useSelector((state: IStateData) => state.proposal);
    const { loading } = useSelector((state: IStateData) => state.proposal);
    // const [proposal, setProposal] = useState<any[]>([]);


    const [proposalId, setProposalId] = useState("");
    const [editProposal, setEditProposal] = useState(false);
    const [editProposalFooter, setEditProposalFooter] = useState(true);

    useEffect(() => {
        dispatch(fetchProposalRelatedDemand());
        console.log(proposal);
    }, []);

    // useEffect(() => {
    //     if (demands.demand.length !== 0) {
    //         let temp: any[] = [];
    //         demands.demand.forEach((item: IDemand) => {
    //             if (item.Proposal) {
    //                 convertToArray(item.Proposal).forEach((prop) => {
    //                     temp.push(prop);
    //                 })
    //             }
    //         })

    //         temp.sort(function (a, b) {
    //             return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    //         });

    //         setProposal(temp);
    //     }
    // }, [demands.demand])

    const [OpenUserCard, setOpenUserCard] = useState(false);

    const handleUpdateProposal = (userUpdate: string, state: string) => {
        if(state == "1"){
            showErrorMessage("Propostas aprovadas não podem ser editadas", "error");
            return;
        }
        setProposalId(userUpdate);
        setOpenUserCard(!OpenUserCard);
    };

    return proposal && proposal.length > 0 ? (
        <>
            {!loading ? (
                <>
                    <div className="data-user-poup">
                        {proposalId !== "" &&
                            (
                                <PDefault
                                    height="90%"
                                    width="517"
                                    title="Atualização da proposta"
                                    subtitle="Preencha todos os campos marcados *"
                                    setTrigger={setOpenUserCard}
                                    trigger={OpenUserCard}
                                    setPrimaryState={setEditProposal}
                                    primaryValue={editProposal}
                                    primaryBlocked={editProposal}
                                    footerInvisible={editProposalFooter}
                                >
                                    <UpdateProposal primaryValue={editProposal} setPrimary={setEditProposal} proposalId={proposalId} trigger={OpenUserCard} setState={setOpenUserCard} setFooter={setEditProposalFooter} modal={undefined} />
                                </PDefault>
                            )
                        }
                    </div>
                    <table>
                        <tr className="one-row-title">
                            {fields.map((field) => (
                                <th key={field}>{field}</th>
                            ))}
                        </tr>
                        <tbody>
                            {proposal && (
                                proposal.map((item: IProposal, index: any) => (
                                    <tr key={index} className="row-content">
                                        <td style={{ fontSize: "14px", textAlign: "center", color: (item.isAproved == "1") ? "#3bd68b" : "#1d5e83" }}>{(item.isAproved == "1") ? "Aprovado" : "Pendente"}</td>
                                        <th style={{ height: "50px" }}>{item.description.toString().substring(0, 28)}...</th>
                                        <th style={{ height: "50px" }}>{item.Details.value}</th>
                                        <th style={{ height: "50px" }}>{item.Details.numberInvolved}</th>
                                        <th style={{ height: "50px" }}>
                                            <span>
                                                <BsFillPencilFill
                                                    onClick={() => item.id && handleUpdateProposal(item.id, item.isAproved)}
                                                    className="update-icon btn-click"
                                                    color="#3679bc"
                                                    size={22}
                                                />
                                            </span>
                                        </th>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </>
            ) : (
                <NotFound title="Carregando..." />
            )
            }
        </>
    ) : (
        <NotFound title="Não há dados cadastrados no momento" />
    );
}
