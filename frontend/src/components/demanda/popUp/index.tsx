import { Container } from "./style";

const SendDemandas = () => {
  return (
    <Container className="enviarDemanda" visibility={"hidden"}>
      <div className="form">
        <h1 className="border-left-secondary color-secondary t">
          Desenvolvimento do projeto tal
        </h1>
        <div className="conteudo">
          <div className="left">
            <div
              className="logo"
              style={{ backgroundImage: "url(img/logo.png)" }}
            />
            <div className="info">
              <div className="data">
                <p>Orçamento</p>
                <h2>R$ 2.500,00</h2>
              </div>
              <div className="data">
                <p>Criado em</p>
                <h2>25 de set, 2021</h2>
              </div>
              <div className="data">
                <p>Será enviado por</p>
                <h2>Fulano de tal</h2>
              </div>
              <button className="btnProposta bgcolor-secondary">
                Enviar proposta
              </button>
            </div>
          </div>
          <div className="right">
            <fieldset style={{ marginBottom: 15 }}>
              <legend>Arquivos (opcional)</legend>
              <input type="file" />
            </fieldset>
            <fieldset style={{ height: 200 }}>
              <legend>Resumo da proposta</legend>
              <textarea defaultValue={"\n                        "} />
            </fieldset>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SendDemandas;
