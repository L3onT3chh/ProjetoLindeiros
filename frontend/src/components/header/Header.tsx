import { Link } from "react-router-dom";
import { bg, logo } from "assets/img";
import { NavBar } from "../NavBar";
import ContainerHeader from "./styled";

const Header = () => {
  return (
    <div>
      <ContainerHeader background={bg}>
        <ContainerHeader
          className="cover"
          style={{ backgroundColor: "rgba(255,255,255,1)" }}
        />
        <div className="inner">
          <ContainerHeader
            className="logo"
            background={logo}
            style={{ backgroundSize: "150px" }}
          />
          <div className="controls">
            <div className="search">
              <input type="text" placeholder="Deseja procurar por algo?" />
              <span className="button bgcolor-secondary">
                <i className="fas fa-search" />
              </span>
            </div>
            <div className="access-list">
              <Link
                to="/cadastro/"
                style={{ width: 135 }}
                className="btn border-secondary color-secondary"
                id="btnPopLogin"
              >
                <i className="fas fa-door-open" style={{ marginLeft: 10 }} />
                Efetuar login{" "}
              </Link>
            </div>
          </div>
        </div>
      </ContainerHeader>
      <NavBar />
    </div>
  );
};

export default Header;
