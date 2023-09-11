import { PressableProps } from 'react-native'
import { Container, Title } from './styles'

type Props = PressableProps & {
    title: string
}

export function GroupCard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}