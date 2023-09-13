import { PressableProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonIconTypeStyleProps, Container, Icon } from './styles'

type Props = PressableProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon name={icon} type={type} />
        </Container>
    )
}