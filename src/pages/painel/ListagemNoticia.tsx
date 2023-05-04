/* eslint-disable @typescript-eslint/no-shadow */
// import ButtonCard from "components/Buttons/ButtonCard";
import { filterAll, filterSearch } from "app/reducers/demand/demandSlice";
import { filterNews } from "app/reducers/news/newsSlice";
import { AppDispatch } from "app/store";
import ButtonCard from "components/Buttons/ButtonCard";
import { InputSearch } from "components/Inputs/Search";
import { LoadingDefault } from "components/Loading";
import PDefault from "components/Popups";
import RegisterDemandas from "components/Popups/subContent/registerDemandas";
import RegisterNews from "components/Popups/subContent/registerNews";
import { MenuRight } from "components/SubMenu/MenuRight";
import { IPropsGlobal } from "interfaces/components.interface";
import { ContainerPainel } from "pages/css/styled";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function NoticiaProposta({
    type,
    children,
    active,
    state,
}: IPropsGlobal) {
    let dispatch = useDispatch<AppDispatch>();
    const [addNews, setAddNews] = useState(false);
    const [openPopupNews, setOpenPopupNews] = useState(false);
    const [search, setSearch] = useState<any>();

      useEffect(() => {
        let searchTemp = search ?? "";

        dispatch(filterNews({ "searchSelector": searchTemp}));
      }, [search, dispatch]);

    return (
        <ContainerPainel>
            <MenuRight />
            <LoadingDefault active={active} />
            <PDefault
                height="90%"
                width="569"
                title="Cadastro de notícia"
                subtitle="Preencha todos os campos marcados *"
                setTrigger={setOpenPopupNews}
                trigger={openPopupNews}
                setPrimaryState={setAddNews}
                primaryValue={addNews}
                primaryBlocked={addNews}
            >
                <RegisterNews primaryValue={addNews} setPrimary={setAddNews} setState={setOpenPopupNews} />
            </PDefault>
            <div className="container">
                <div className="content-header">
                    <div className="btn-header">
                        <ButtonCard
                            router="/painel/news"
                            state={openPopupNews}
                            setState={setOpenPopupNews}
                            value={`Adicionar ${type}`}
                        />
                    </div>
                    <InputSearch
                        className="painelSearch"
                        text="Pesquisar notícia"
                        background="#cecece"
                        size="84%"
                        valueDefault={search}
                        setState={setSearch}
                        borderRadius="40px 0 0 40px"
                    />
                </div>
                {children}
            </div>
        </ContainerPainel>
    );
}
