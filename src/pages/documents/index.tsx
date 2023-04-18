import { useEffect, useState } from "react";
import NavBar from "components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';
import { IStateData } from "interfaces/components.interface";
import { CardDocs } from "components/CardDocs";
import IDocument from "interfaces/data/document.interface";
import PDefault from "components/Popups";
import RegisterDocument from "components/Popups/subContent/registerDocument";
import { selectCurentUser, selectUserLogged } from "app/reducers/auth/authSlice";
import { verifyPermission } from "util/function";
import { ContainerDocuments } from "./styled";
import { BsUpload } from "react-icons/bs";
import { fetchDemandsThunk } from "app/reducers";
import { AppDispatch } from "app/store";
import { findAllDocument } from "API/Document/find.documents";
import { filterDocuments, navigate, refreshDocuments } from "app/reducers/document/documentSlice";
import { convertToArray } from "util/handleSelectorObj";
import { PaginatedItems } from "components/Paginate";

export function Documents() {
  const dispatch = useDispatch<AppDispatch>();
  const document: any = useSelector((state: IStateData) => state.documents.filtered);
  const { auth } = useSelector((state: IStateData) => state);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [user, logged] = useSelector(selectCurentUser);
  const [allowed, setAllowed] = useState(false);
  const [sendDocument, setSendDocument] = useState(false);

  const [pag, setPag] = useState();

  useEffect(() => {
    if (logged) {
      if (auth.auth.user) {
        if (auth.auth.user[0].userType === "Administrador") {
          setAllowed(true);
        }
      }
    }
  }, [user, logged, allowed])


  useEffect(() => {
    if (refresh) {
      refreshData();
      setRefresh(false);
    }
  }, [refresh])

  useEffect(()=>{
    if(pag !== undefined) {
      dispatch(filterDocuments(Object.assign({text: search}, pag)));
    }
  }, [pag, setPag]);

  const refreshData = async () => {
    let resp = await findAllDocument();
    console.log(resp);
    dispatch(refreshDocuments(resp));
  }

  const handleSearch = (text: string) => {
    setSearch(text);

    let pagObj = (pag) ?? {min:0, max:9}
    dispatch(filterDocuments(Object.assign({text}, pagObj)));
    console.log(convertToArray(document).length);
  }

  return (
    <>
      <NavBar text="documents" />
      <ContainerDocuments>
        <PDefault
          height="80%"
          width="517"
          title="Cadastro de Documentos"
          subtitle="Preencha todos os campos marcados *"
          setTrigger={setOpenCard}
          trigger={openCard}
          setPrimaryState={setSendDocument}
          primaryValue={sendDocument}
          primaryBlocked={sendDocument}
        >
          <RegisterDocument setPrimary={setSendDocument} primaryValue={sendDocument} setState={setOpenCard} setRefresh={setRefresh} />
        </PDefault>
        <div className="container">
          <div className="header-btn">
            <h1 className="title color-secondary">
              <span>Documentos</span>
            </h1>

            <div className="controls">
              <input type="text" placeholder="Pesquisar documento" onChange={(e) => handleSearch(e.target.value)} value={search} />
              {allowed && (
                <button className="btnUpload" onClick={() => setOpenCard(!openCard)}><BsUpload color="#fff" style={{ width: "40px" }} />Enviar arquivo</button>
              )}
            </div>
          </div>
          {/* Remover os objetivos especificos */}
          <div className="content-docs" style={{ display: (document && document.length > 0) ? 'flex' : 'block' }}>
            {document ? convertToArray(document).map((item: IDocument, index: any) => (
              <CardDocs
                key={index}
                extension={item.extension}
                fullPath={item.fullPath}
                name={item.name}
                path={item.path}
                size={item.size}
                id={item.id}
                visible={item.visible}
              />
            )) : (
              <div className="notFound">
                <p>Nenhum documento encontrado</p>
              </div>
            )}
          </div>
          {convertToArray(document).length > 9 &&
            (
              <PaginatedItems itemsPerPage={9} max={convertToArray(document).length} setPag={setPag}/>
            )
          }
        </div>
      </ContainerDocuments>
    </>
  );
}
