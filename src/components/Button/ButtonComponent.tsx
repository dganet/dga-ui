import { useTheme } from '@hooks/useTheme'
import React from 'react'

import { Container } from './ButtonComponent.styles'
import { ButtonProps } from './ButtonComponent.types'

const ButtonComponent: React.FC<ButtonProps> = ({
    children,
    buttonSize = 'large',
    buttonType = 'primary',
    icon: Icon,
    ...props
}) => {
    const theme = useTheme()
    return (
        <Container
            theme={theme}
            buttonSize={buttonSize}
            buttonType={buttonType}
            onlyIcon={!!!children}
            {...props}
        >
            {Icon && <Icon />} <label>{children}</label>
        </Container>
    )
}

export default ButtonComponent
