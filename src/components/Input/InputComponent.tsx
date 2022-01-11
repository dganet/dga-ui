import { useTheme } from '@hooks/useTheme'
import React from 'react'

import {
    Container,
    InputLabel,
    StyledInput,
    InputContainer
} from './InputComponent.styles'
import { InputProps } from './InputComponent.types'

const InputComponent = ({
    label,
    inputSize = 'large',
    inputType = 'regular'
}: InputProps) => {
    const theme = useTheme()
    return (
        <Container inputSize={inputSize} inputType={inputType}>
            <InputLabel theme={theme}>{label}</InputLabel>
            <InputContainer
                theme={theme}
                inputSize={inputSize}
                inputType={inputType}
            >
                <StyledInput theme={theme} type="text" />
            </InputContainer>
        </Container>
    )
}

export default InputComponent
