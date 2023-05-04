import { CircleLoading } from "components/circleLoading";
import { Container } from "./style";

interface Iprops{
    loading:boolean;
}

export const PopUpLoading = ({loading}:Iprops) =>{
    return (
        <Container>
            <CircleLoading color="#333"/>
        </Container>
    )
}