import styled, { css } from 'styled-components'
import { InputProps } from './InputComponent.types'


const inputSize ={
    'large': css`
        height: 48px ;
    `,
    'medium': css`
        height: 40px ;
    `,
    'small': css`
        height: 36px;
    `,
}

export const Container = styled.div<Omit<InputProps, 'label'>>`
    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.label`
    margin-bottom: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    font-family: 'Inter';
    color: ${props => props.theme.colors.general[80]};


`

export const InputContainer = styled.div<Omit<InputProps, 'label'>>`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${props => inputSize[props.inputSize]}
    border: solid 1px ${props => props.theme.colors.general[50]};
    border-radius: 4px;
    padding: 8px 16px;
    font-family: ${props => props.theme.fontFamily.Regular};
    ${props => props.inputType === 'number' &&
    css`
        width: 144px;
        padding: 12px;
    `
    }
`

export const StyledInput = styled.input<Omit<InputProps, 'label'>>`
    outline: none;
    border-style: none;
    height: 100%;
    font-size: 16px;
    line-height: 24px;
    ${props => props.inputType}
    color: ${props => props.theme.colors.general[80]};
    ${props => props.inputType === 'number' ? css`
        width: 48px;
    `: css`
        width: 100%;
    `}
    ::placeholder{
        color: ${props => props.theme.colors.general[50]};
    }

`

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    border: none;
    background: transparent;
`
