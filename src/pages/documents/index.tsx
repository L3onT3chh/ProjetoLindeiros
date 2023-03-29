import { useEffect, useState } from "react";
import NavBar from "components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { IStateData } from "interfaces/components.interface";
import { CardDocs } from "components/CardDocs";
import IDocument from "interfaces/data/document.interface";
import PDefault from "components/Popups";
import RegisterDocument from "components/Popups/subContent/registerDocument";
import { selectUserLogged } from "app/reducers/auth/authSlice";
import { verifyPermission } from "util/function";
import { ContainerDocuments } from "./styled";
import { BsUpload } from "react-icons/bs";
import { fetchDemandsThunk } from "app/reducers";
import { AppDispatch } from "app/store";
import { findAllDocument } from "API/Document/find.documents";
import { filterDocuments, refreshDocuments } from "app/reducers/document/documentSlice";
import { convertToArray } from "util/handleSelectorObj";

export function Documents() {
  const dispatch = useDispatch<AppDispatch>();
  const document: any = useSelector((state: IStateData) => state.documents.filtered);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const user = useSelector(selectUserLogged);

  useEffect(() => {
    if (refresh) {
      refreshData();
      setRefresh(false);
    }
  }, [refresh])

  const refreshData = async () => {
    let resp = await findAllDocument();
    dispatch(refreshDocuments(resp));
  }

  const handleSearch = (text: string) => {
    setSearch(text);
    dispatch(filterDocuments(text));
  }

  return (
    <>
      <NavBar />
      <ContainerDocuments>
        <PDefault
          height="80%"
          width="517"
          title="Cadastro de Documentos"
          subtitle="Preencha todos os campos marcados *"
          setTrigger={setOpenCard}
          trigger={openCard}
        >
          <RegisterDocument setState={setOpenCard} setRefresh={setRefresh} />
        </PDefault>
        <div className="container">
          <div className="header-btn">
            <h1 className="title color-secondary">
              <span>Documentos</span>
            </h1>

            <div className="controls">
              <input type="text" placeholder="Pesquisar documento" onChange={(e) => handleSearch(e.target.value)} value={search} />
              {user && verifyPermission(user[0].userType) && (
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
              />
            )) : (
              <div className="notFound">
                <p>Nenhum documento encontrado</p>
              </div>
            )}
          </div>
        </div>
      </ContainerDocuments>
    </>
  );
}
