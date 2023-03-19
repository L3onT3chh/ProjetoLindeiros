/* eslint-disable react/destructuring-assignment */
import { CardDocsStyled } from "components/style";
import { IStateData } from "interfaces/components.interface";
import IDocument from "interfaces/data/document.interface";
import { Dropdown } from "react-bootstrap";
import { FiMoreVertical } from "react-icons/fi";
import { useSelector } from "react-redux";
import pdf from '../../assets/img/docsext/pdf.png';
import jpg from '../../assets/img/docsext/jpg.png';
import xls from '../../assets/img/docsext/xls.png';
import png from '../../assets/img/docsext/png.png';
import doc from '../../assets/img/docsext/doc.png';
import file from '../../assets/img/docsext/file.png';
import { useEffect, useRef, useState } from "react";
import { apiUrl } from "config";
import { DeleteDocument } from "components/Popups/subContent/deleteDocument";
import PDefault from "components/Popups";
import { selectUserLogged } from "app/reducers/auth/authSlice";
import { verifyPermission } from "util/function";

// import { BsDownload } from "react-icons/bs";

export function CardDocs(documentSelect: IDocument) {
  let item:any = useRef();
  const [icon, setIcon] = useState(file);
  const [deleteId, setDeleteId] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const user = useSelector(selectUserLogged);


  useEffect(() => {
    if (documentSelect) {
      switch (documentSelect.extension.toLocaleLowerCase()) {
        case 'pdf': setIcon(pdf);
          break;
        case 'jpg': setIcon(jpg);
          break;
        case 'xls': setIcon(xls);
          break;
        case 'docx': setIcon(doc);
          break;
        case 'png': setIcon(png);
          break;
        default: setIcon(file);
      }
    }
  }, [documentSelect])


  return (
    <CardDocsStyled color="red" ref={item}>
      <PDefault
        height="fit-content"
        width="517"
        title="Exclusão de documento"
        subtitle="Clique no botão para concluir a ação"
        setTrigger={setDeleteModal}
        trigger={deleteModal}
      >
        <DeleteDocument deleteId={deleteId} setDeleteModal={setDeleteModal}/>
      </PDefault>
      <div className="left-doc">
        <div className="data-docs">
          <div className="top">
            {icon && <img src={icon} width="40" alt="extensão" />}
            <Dropdown style={{ background: "transparent", width: "60px" }}>
              <Dropdown.Toggle id="dropdown-basic" key="end">
                <FiMoreVertical size="22" color="#afafaf" style={{ cursor: "pointer" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item target="_blank" href={apiUrl + '/' + documentSelect.fullPath} download={documentSelect.fullPath}>
                  <span>{(documentSelect.extension === "pdf" || documentSelect.extension === "png" || documentSelect.extension === "jpg") ? 'Visualizar' : 'Baixar'}</span>
                </Dropdown.Item>
                {verifyPermission(user?.userType) && (
                <Dropdown.Item>
                  <span onClick={(e) => {e.preventDefault(); setDeleteModal(true); setDeleteId(documentSelect.id)}}>Excluir</span>
                </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            {/* {documentSelect?.extension.toLocaleUpperCase()} */}
          </div>
          <span className="data-docs-especify">
            <p>{documentSelect?.name.substring(0, 20) || "Nome do documento"}</p>
            <p className="size">24 kbs</p>
          </span>
        </div>
      </div>
    </CardDocsStyled>
  );
}
