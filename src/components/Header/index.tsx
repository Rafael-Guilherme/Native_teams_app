import { BackButton, Container, Logo } from './styles'

import logoImg from '@assets/logo.png'

type Props = {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }:Props) {
    return (
        <Container>
            {showBackButton && 
                <BackButton>
                    Voltar
                </BackButton>
            }
            

            <Logo source={logoImg} />
        </Container>
    )
}