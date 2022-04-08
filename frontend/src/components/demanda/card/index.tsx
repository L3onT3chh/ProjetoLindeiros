import { Link } from "react-router-dom";
// Style
import "assets/css/demandas.css";
import { IDemandas } from "interfaces/IDemandas";

interface IProps {
  itemDemanda: IDemandas;
}

export const CardDemanda = ({ itemDemanda }: IProps) => {
  return (
    <div className="conteudo">
      <div className="title">
        <h2 className="color-secondary">
          {itemDemanda.name}
          {"\n"}
          <span className="etiqueta etiqueta-resolvido">
            {itemDemanda.progress?.status}
          </span>
        </h2>
        <p className="data">Criado em {itemDemanda.updated}</p>
      </div>
      <div className="desc">
        <label
          style={{
            fontWeight: "bolder",
            color: "#555",
            fontSize: "0.9rem",
          }}
        >
          Descrição
        </label>
        <p>{itemDemanda.description}</p>
      </div>

      <button className="bgcolor-secondary border-secondary">
        <Link to={"/demandas/" + itemDemanda.id}>Ver mais</Link>
      </button>
    </div>
  );
};
