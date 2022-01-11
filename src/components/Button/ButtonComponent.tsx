import { useTheme } from '@hooks/useTheme'
import React from 'react'

import { Container } from './ButtonComponent.styles'
import { ButtonProps } from './ButtonComponent.types'

const ButtonComponent: React.FC<ButtonProps> = ({
    children,
    buttonSize = 'large',
    buttonType = 'primary',
    onlyIcon = false,
    icon: Icon
}) => {
    const theme = useTheme()
    return (
        <Container
            theme={theme}
            buttonSize={buttonSize}
            buttonType={buttonType}
            onlyIcon={!!!children}
        >
            {Icon && <Icon />} <label>{children}</label>
        </Container>
    )
}

export default ButtonComponent
