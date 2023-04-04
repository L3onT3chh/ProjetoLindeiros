import { logoIcon } from "assets/icons"
import { AiFillHeart, AiOutlineBarChart } from "react-icons/ai"
import { BsShieldFillCheck, BsTreeFill } from "react-icons/bs"
import { FaCogs } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Container } from "./style"

export const AboutUs = () => {
    return (
        <Container>
            <>
                <div className="top">
                    <h1>Programa de governança</h1>
                </div>
                <div className="topics">
                    <div className="left">
                        <div className="item">
                            <div className="icon">
                                <AiOutlineBarChart size={25} color="#4bd197" />
                            </div>
                            <h2>Fortalecimento da economia local</h2>
                            <p>O Programa de Governança dos Lindeiros fortalece a economia local ao estimular a inovação e a inteligência, gerando empregos e renda para a população. O programa visa também a articulação de ações para fomentar a transformação do território, aumentando a competitividade e melhorando o ambiente de negócios.</p>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <BsTreeFill size={25} color="#4bd197" />
                            </div>
                            <h2>Preservação ambiental</h2>
                            <p>Programa de Governança dos Lindeiros visa preservar as bacias hidrográficas que abastecem o reservatório de Itaipu e a Bacia do Paraná III, bem como as matas ciliares, trazendo como vantagem a preservação ambiental.</p>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <AiFillHeart size={25} color="#4bd197" />
                            </div>
                            <h2>Melhoria da qualidade de vida</h2>
                            <p>Programa de Governança dos Lindeiros pode melhorar a qualidade de vida da população local, gerando empregos e fortalecendo a economia. Isso pode impactar positivamente o acesso a serviços essenciais, e a gestão pública pode se tornar mais eficiente e focada nas necessidades da população, com o planejamento inteligente..</p>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <FaCogs size={25} color="#4bd197" />
                            </div>
                            <h2>Maior integração entre instituições e projetos</h2>
                            <p>O Programa de Governança dos Lindeiros pode integrar instituições e projetos para alcançar objetivos comuns. A governança inteligente e integrada pode resultar em maior eficiência na gestão dos recursos públicos e em resultados mais significativos no desenvolvimento da região.</p>
                        </div>
                    </div>
                </div>
                <Link to="/eixos">
                    <button className="btnAxes">Eixos estruturantes</button>
                </Link>
            </>
        </Container>
    )
}