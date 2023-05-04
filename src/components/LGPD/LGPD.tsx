import { Container } from "./style";

interface Iprops {
    visible: boolean;
    trigger: any;
    setResponse: any;
}

export const LGPD = ({visible, trigger, setResponse}:Iprops) => {
    return visible ? (
        <Container>
            <div className="card">
                <div className="content scroll">
                    <div className="top">
                        <h2>Termos de uso</h2>
                        <p>Atualizado em 29, abril de 2023</p>
                    </div>
                    <div className="body">
                        <fieldset className="block">
                            <legend>Acesso ao sistema</legend>
                            <p>Este Contrato de Proteção de Dados descreve os termos e condições em que o Programa de Governança dos Lindeiros coleta, armazena, processa e divulga informações pessoais do usuário.</p>

                            <p>O Programa de Governança dos Lindeiros se compromete a proteger a privacidade do usuário e suas informações pessoais, exceto pelo e-mail que será utilizado para comunicação com o mesmo.</p>

                            <p>Ao se cadastrar para acessar o sistema do Programa de Governança dos Lindeiros, o usuário declara estar ciente e de acordo que as informações pessoais fornecidas serão armazenadas em um banco de dados e utilizadas apenas para fins administrativos e de contato com o usuário.</p>

                        </fieldset>
                        <fieldset className="block">
                            <legend>Quanto ao cadastro de demandas</legend>
                            <p>Além disso, o usuário declara estar ciente e de acordo que ao cadastrar uma demanda, as informações fornecidas nessa demanda serão tornadas públicas, com exceção do e-mail de contato do usuário. O usuário declara estar ciente que o envio de demanda/problema ou solução não é garantia da sua execução. </p>
                        </fieldset>
                        <fieldset className="block">
                            <legend>Quanto ao envio de proposta</legend>
                            <p>O usuário também declara estar ciente e de acordo que, ao enviar uma proposta em resposta a uma demanda, as informações fornecidas nessa proposta serão tornadas públicas, incluindo o contato do usuário. O usuário está ciente que se trata de prospecção de demanda/problema e solução e que as atividades, projetos e ações conjuntas serão acordadas em contrato/termo específico com concordância dos envolvidos.</p>
                        </fieldset>
                        <fieldset className="block">
                            <legend>Proteção dos dados</legend>
                            <p>O Programa de Governança dos Lindeiros se compromete a tomar todas as medidas razoáveis para proteger as informações pessoais do usuário contra perda, uso indevido, acesso não autorizado, alteração ou divulgação.</p>
                            <p>Ao clicar no botão de aceitação, o usuário concorda com os termos e condições deste Contrato e confirma que leu e entendeu os termos da Lei de Proteção de Dados.</p>

                        </fieldset>
                    </div>
                </div>
                <div className="footer">
                    <button className="close" onClick={() => trigger(false)}>Fechar</button>
                    <button className="accept" onClick={() => setResponse(true)}>Eu concordo</button>
                </div>
            </div>
        </Container>
    ): (
        <></>
    )
}