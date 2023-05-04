/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { IDemand } from "interfaces/data/demand.interface";
import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
// import { PMeuPerfil } from "components/Popups/Profile";
// import { CardPropostas } from "components/Card/Propostas";
// import { cityspcape } from "assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteDemandsThunk, fetchDemandsThunk, findAllByUsersThunk, findOneDemandsThunk } from "app/reducers/demand/thunk";
import { AppDispatch } from "app/store";
import PDefault from "components/Popups";
import UpdateDemand from "components/Popups/subContent/updateDemand";
import {
    cleanDemand,
    clickedDemand,
    mergeDemandFilter,
    // mergeDemandFilter,
    selectCurrentDemands,
} from "app/reducers/demand/demandSlice";
import { ContentProfile } from "components/style";
import { ProposalList } from "components/ProposalList/ProposalList";
import { convertToArray } from "util/handleSelectorObj";
import { selectCurentUser } from "app/reducers/auth/authSlice";
import { LoadingDefault } from "components/Loading";
import { NotFound } from "components/Notfound";
import { deleteNewssThunk, fetchNewssThunk } from "app/reducers/news/thunk";
import INews from "interfaces/data/news.interface";
import { dataFormat } from "util/dateFormater";
import UpdateNews from "components/Popups/subContent/updateNews";

export function TableNews({ fields }: IPropsGlobal) {
    const dispatch = useDispatch<AppDispatch>();
    const { news } = useSelector((state: IStateData) => state.news);
    const user = useSelector(selectCurentUser)[0];
    const [dataUpdated, setDataUpdated] = useState<string>("");
    const [useOpenNews, setOpenNews] = useState(false);
    const [remove, setRemove] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    const [editNews, setEditNews] = useState(false);
    const [footerNews, setFooterNews] = useState(true);

    useEffect(() => {
        dispatch(fetchNewssThunk());
    }, [dispatch])


    const handleRemoveDemand = () => {
        if (deleteId !== "") {
            dispatch(deleteNewssThunk(deleteId));
            setRemove(false);
        }
    };

    const handleUpdateNews = (id: string) => {
        if (id !== undefined) {
            setDataUpdated(id);
        }

        setOpenNews(!useOpenNews);
    };

    const preRemove = (id: string) => {
        setRemove(true);
        setDeleteId(id);
    }

    return (
        <>
            {/* <LoadingDefault active={news.loading} /> */}
            <div className="data-user-poup">
                {news.length > 0 &&
                    (
                        <PDefault
                            height="90%"
                            width="569"
                            title="Editar notícia"
                            subtitle="Altere os dados desejados"
                            setTrigger={setOpenNews}
                            trigger={useOpenNews}
                            setPrimaryState={setEditNews}
                            primaryValue={editNews}
                            primaryBlocked={editNews}
                            footerInvisible={footerNews}
                            
                        >
                            <UpdateNews setPrimary={setEditNews} primaryValue={editNews} setFooter={setFooterNews} setState={setOpenNews} idNews={dataUpdated} trigger={useOpenNews} />
                        </PDefault>
                    )
                }
                <PDefault
                    height="fit-content"
                    width="569"
                    title="Excluir notícia"
                    subtitle="Deseja realmente excluir esta notícia?"
                    setTrigger={setRemove}
                    trigger={remove}
                >
                    <ContentProfile>
                        <div className="content-default" style={{ padding: 0, height: "80px" }}>
                            <form
                                action=""
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <div className="content-basic-data">
                                    <br />
                                    <div className="btns-popup" style={{ borderTop: 0 }}>
                                        <button className="btn-close-two">Fechar</button>
                                        <button className="btn-send" onClick={() => handleRemoveDemand()}>Confirmar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </ContentProfile>
                </PDefault>
            </div>
            {news.length > 0 ?
                (
                    <table>
                        <tr className="one-row-title">
                            {fields && fields.map((field) => <th key={field}>{field}</th>)}
                        </tr>
                        <tbody className="demandTable">
                            {news.length > 0 && convertToArray(news).map((item: INews) => (
                                <tr key={item.id} className="row-content">
                                    <th className="field-styled">
                                        {(item.title.length > 30) ? item.title.toString().substring(0, 30) + '...' : item.title}
                                    </th>
                                    <th>
                                        <p className="field-styled">{dataFormat(item.createdAt)}</p>
                                    </th>
                                    <th className="field-styled">
                                        <span>
                                            <BsFillTrash2Fill
                                                color="red"
                                                className="btn-click"
                                                size={22}
                                                onClick={() => preRemove(item.id)}
                                            />
                                        </span>{" "}
                                        &nbsp;&nbsp;
                                        <span>
                                            <BsFillPencilFill
                                                onClick={() => item.id && handleUpdateNews(item.id)}
                                                className="update-icon btn-click"
                                                color="#3679bc"
                                                size={22}
                                            />
                                        </span>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) :
                (
                    <NotFound title="Nenhuma notícia encontrada" />
                )
            }
        </>
    );
}
