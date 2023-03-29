import { selectCurentUser } from "app/reducers/auth/authSlice"
import { IPropsGlobal } from "interfaces/components.interface"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Container } from "./style"

export const AutenticateCard = ({ children, text, title, setState, isPublic }: IPropsGlobal) => {
    const [user, logged] = useSelector(selectCurentUser);
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        if (logged) {
            if (isPublic) {
                setAllowed(true);
                return;
            }
            if (!isPublic && user) {
                if (user[0].userType !== "Administrador") {
                    setAllowed(false);
                } else {
                    setAllowed(true);
                }
            }
        }
    }, [isPublic, user, logged, allowed])
    return allowed ? (
        <Container>
            <div className="contentArea">
                <h1>Seja bem vindo, {(user) ? user[0].name : ''}</h1>
                <p>{text}</p>
            </div>
            <div className="buttonArea">
                <button onClick={() => setState(true)}>{title}</button>
            </div>
            {children}
        </Container>
    ) : (
        <></>
    )
}