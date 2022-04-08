import { CardDocs } from "components/cardDocs";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { ContainerDocuments } from "./styled";

export const Documents = () => {
  return (
    <>
      <Header />
      <ContainerDocuments>
        <div className="container">
          <h1 className="title color-secondary">
            <span>Documentos disponíveis</span>
          </h1>

          <CardDocs />
          <CardDocs />
          <CardDocs />
          <CardDocs />
          <CardDocs />
        </div>
      </ContainerDocuments>
      <Footer />
    </>
  );
};
