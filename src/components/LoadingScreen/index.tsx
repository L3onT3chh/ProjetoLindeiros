import { CircleLoading } from "components/circleLoading";
import { Container } from "./style"
import Banner from "../../assets/icons/logo.png";

export const LoadingScreen = () => {
    return (
        <Container>
            <div className="img">
                <img src={Banner} alt="" width={275} />
            </div>
            <CircleLoading color="#bbb" />
        </Container>
    )
}