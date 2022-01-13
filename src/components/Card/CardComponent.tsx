import React from 'react'

import { useTheme } from '@hooks/useTheme'
import { Container } from './CardComponent.styles'
import { CardProps } from './CardComponent.types'

const CardComponent = ({ children, cardType }: CardProps) => {
    const theme = useTheme()
    return (
        <Container theme={theme} cardType={cardType}>
            {children}
        </Container>
    )
}

export default CardComponent
