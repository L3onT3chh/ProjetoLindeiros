import NavBar from "components/NavBar";
import { apiUrl } from "config";
import { IStateData } from "interfaces/components.interface";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router"
import { dataFormat } from "util/dateFormater";
import { convertToArray } from "util/handleSelectorObj";

export const NewsItem = () => {
    let { name } = useParams();
    const { news } = useSelector((state: IStateData) => state);
    const item = news.news.filter(item => item.title_url === name)[0];
    const [background, setBackground] = useState<string>("https://www.lindeiros.org.br/upload/170932336561ea00084f57c2.95845073.jpeg");

    useEffect(() => {
        if (item.Photos) {
            setBackground(apiUrl + "/media/news/" + convertToArray(item.Photos)[0].name);
        }
    }, [item]);

    return item && (
        <>
            <NavBar />
            <div className="noticiasItem">
                <div className="cover" style={{ backgroundImage: `url(${background})` }}></div>
                <div className="black-cover"></div>
                <div className="info">
                    <h5>{dataFormat(item.createdAt)}</h5>
                    <ul className="tag">
                        <li>Lindeiros</li>
                        <li>Santa Helena</li>
                        <li>Gestão</li>
                    </ul>
                    <h1 className="color-secondary">{item.title}</h1>
                    {/* <div className="block">
                        <p>
                            O Conselho de Desenvolvimento dos Municípios Lindeiros ao Lago de Itaipu reuniu, nesta quinta-feira (20), prefeitos, vereadores, presidentes de associações comerciais e outras lideranças regionais e estaduais para Assembleia Geral Ordinária (AGO). O evento ocorreu em Guaíra e antecedeu o lançamento do Prodesg (Programa de Desenvolvimento do Município de Guaíra).
                        </p>
                    </div> */}

                    <div className="block">
                        <p>
                            {item.body}
                        </p>
                    </div>

                    {/* <div className="block">
                        <h2>Termos de cooperação</h2>
                        <p>
                            O major Washington Vasconcelos Santana, que representou a Itaipu Binacional no evento, ressaltou que é uma satisfação verificar o trabalho que o Conselho dos Lindeiros faz na região. “Ficamos muito felizes com o que foi apresentado na Assembleia Ordinária. A região toda terá um ganho fundamental, não só na parte infraestrutura como também na inovação, tecnologia, saúde, turismo e meio ambiente”, ressalta. “Quero parabenizar o Lindeiros pelo brilhante projeto que está sendo desenvolvido o que fortalece a parceria com Itaipu”, enfatiza.
                        </p>
                    </div> */}

                    {item.Photos &&
                        (
                            <div className="galeria">
                                <h2>Ver fotos</h2>
                                <div className="itens">
                                    {convertToArray(item.Photos).map((item) => (
                                        <div className="item" style={{ backgroundImage: `url(${apiUrl+"/"+item.path+item.name})` }}></div>
                                    ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}