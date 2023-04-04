import { FaRegHandshake } from "react-icons/fa";
import { Container } from "./style";
import backphoto from "../../assets/img/news.png"
import { Link } from "react-router-dom";
import { IDemand } from "interfaces/data/demand.interface";
import INews from "interfaces/data/news.interface";
import { convertToArray } from "util/handleSelectorObj";
import { apiUrl } from "config";
import { dataFormat } from "util/dateFormater";

interface Iprops {
    title: string;
    link: string;
    photo?: any;
    objDemand?: IDemand[];
    objNews?: INews[];
}

export const ListComponent = ({ title, link, photo, objDemand, objNews }: Iprops) => {
    const checktitle = (title: string) => {
        let min = title.substring(0, 100) + "...";
        return (title.length >= 100) ? min : title;
    }

    return (
        <Container>
            <div className="top">
                <h1>{title}</h1>
                <Link to={link}>
                    <button>Ver mais</button>
                </Link>
            </div>
            <ul className="cardList">
                {objDemand &&
                    (
                        convertToArray(objDemand).map((item: IDemand) => (
                            <li>
                                <div className="header">
                                    <div className="left">
                                        <p>{dataFormat(item.createdAt)}</p>
                                        <div className="bar"></div>
                                    </div>
                                    <Link to={"/demanda/" + item.url}>
                                        <button>Acessar</button>
                                    </Link>
                                </div>
                                <div className="body">
                                    <h2>{item.name}</h2>
                                    <p>{checktitle(item.description)}</p>
                                </div>
                                <div className="footer">
                                    <div className="proposalQtd">
                                        <FaRegHandshake size={20} />
                                        <p>{(item.Proposal) ? convertToArray(item.Proposal).length : 0}</p>
                                    </div>
                                    <div className="cityTag">
                                        <p>{item.Cities.name}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    )
                }
                {objNews &&
                    (
                        convertToArray(objNews).map((item: INews) => (
                            <li>
                                <div className="header">
                                    <div className="left">
                                        <p>{dataFormat(item.createdAt)}</p>
                                        <div className="bar"></div>
                                    </div>
                                    <Link to={"/noticias/" + item.title_url}>
                                        <button>Acessar</button>
                                    </Link>
                                </div>
                                {item.Photos ?
                                    (
                                        <div className="photo" style={{ backgroundImage: `url(${apiUrl + "/" + convertToArray(item.Photos)[0].path + convertToArray(item.Photos)[0].name})` }}></div>
                                    ) :
                                    (
                                        <div className="photo" style={{ backgroundImage: `url(${backphoto})` }}></div>
                                    )
                                }
                                <div className="body">
                                    <h2>{item.title}</h2>
                                    <p>{checktitle(item.body)}</p>
                                </div>
                            </li>
                        ))
                    )
                }
            </ul>
        </Container>
    )
}