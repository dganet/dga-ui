import { useTheme } from '@hooks/useTheme'
import React, { BaseSyntheticEvent, useState } from 'react'

import {
    Container,
    InputLabel,
    StyledInput,
    InputContainer,
    StyledButton
} from './InputComponent.styles'
import { InputProps } from './InputComponent.types'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
const InputComponent = ({
    label,
    inputSize = 'large',
    inputType = 'regular',
    inputIconSide = 'left',
    icon: Icon = null,
    error = false,
    ...props
}: InputProps) => {
    const theme = useTheme()
    const [valNum, setValNum] = useState<number>(0)

    const plusClick = () => setValNum(valNum + 1)
    const minusClick = () => valNum > 0 && setValNum(valNum - 1)
    const handleNumberChange = (e: BaseSyntheticEvent) => {
        try {
            const value = parseInt(e.currentTarget.value)
            setValNum(value)
        } catch {}
    }

    return (
        <Container inputSize={inputSize} inputType={inputType}>
            <InputLabel theme={theme}>{label}</InputLabel>
            <InputContainer
                theme={theme}
                inputSize={inputSize}
                inputType={inputType}
                error={error}
            >
                {inputType === 'number' ? (
                    <>
                        <StyledButton onClick={plusClick}>
                            <AiOutlinePlus />
                        </StyledButton>
                        <StyledInput
                            inputSize={inputSize}
                            inputType={inputType}
                            theme={theme}
                            type="text"
                            value={valNum}
                            onChange={handleNumberChange}
                            {...props}
                        />
                        <StyledButton onClick={minusClick}>
                            <AiOutlineMinus />
                        </StyledButton>
                    </>
                ) : (
                    <>
                        {inputIconSide === 'left' && Icon && (
                            <Icon style={{ marginRight: '8px' }} />
                        )}
                        <StyledInput theme={theme} type="text" {...props} />
                        {inputIconSide === 'right' && Icon && <Icon />}
                    </>
                )}
            </InputContainer>
        </Container>
    )
}

export default InputComponent
