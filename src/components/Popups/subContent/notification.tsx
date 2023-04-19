import { ContentProfile, NotificationContainer } from "components/style"
import { ISystemNotify } from "interfaces/global.interface";
import { HiDocumentText } from "react-icons/hi"
import { dataFormat } from "util/dateFormater";

interface Iprops {
    data: ISystemNotify[] | [];
}

export const Notification = ({ data }: Iprops) => {
    console.log(data);
    return (
        <ContentProfile>
            <div className="content-default" style={{ width: "100%", height: "100%", padding: 0 }}>
                <div className="content-basic-data" style={{ width: "100%", height: "100%" }}>
                    <NotificationContainer>
                        {data.length >= 1 && data[0] !== undefined ? data.map((item: ISystemNotify) => (
                            <div className="item">
                                <div className="icon">
                                    <HiDocumentText size={23} color="#fff" />
                                </div>
                                <div className="info">
                                    <p><b>{item.sendername}</b> enviou uma proposta a sua demanda</p>
                                    <p className="time">{dataFormat(item.createdAt)}</p>
                                </div>
                            </div>
                        )) : (
                            <div className="notFound">
                                <p>Nenhuma notificação encontrada</p>
                            </div>
                        )
                        }
                    </NotificationContainer>
                </div>
            </div>
        </ContentProfile>
    )
}