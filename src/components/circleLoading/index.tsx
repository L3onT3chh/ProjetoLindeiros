import { Container } from "./style"

interface IProps {
    color: string;
}

export const CircleLoading = ({color}:IProps) => {
    return (
        <Container color={color}></Container>
    )
}