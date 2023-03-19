/* eslint-disable react/button-has-type */
import React, { useRef, useState } from "react";
import { IPropsGlobal, IStateData } from "interfaces/components.interface";
import { ContentProfile } from "components/style";
import { DeleteDocuments } from "API/Document/crud.documents";
import { useDispatch } from "react-redux";
import { deleteDocuments } from "app/reducers/document/thunk";
import { AppDispatch } from "app/store";

interface IProps {
  deleteId: string;
  setDeleteModal: any;
}

export const DeleteDocument = ({ deleteId, setDeleteModal}: IProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async () => {
    if(deleteId){
      dispatch(deleteDocuments(deleteId));
      setDeleteModal(false);
    }
  }
  return (
    <ContentProfile>
      <div className="content-default" style={{ padding: 0 }}>
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
              <button className="btn-send" onClick={() => handleDelete()}>Confirmar</button>
            </div>
          </div>
        </form>
      </div>
    </ContentProfile>
  );
}
