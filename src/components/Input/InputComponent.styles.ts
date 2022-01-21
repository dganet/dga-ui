import styled, { css } from 'styled-components'
import { InputProps } from './InputComponent.types'


const inputSize ={
    'large': css`
        height: 48px ;
        padding: 12px 16px;
    `,
    'medium': css`
        height: 40px ;
        padding: 8px 16px;
    `,
    'small': css`
        height: 36px;
        padding: 8px 16px;
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

    font-family: ${props => props.theme.fontFamily.Regular};
    ${props => props.inputType === 'number' &&
    css`
        width: 144px;
        padding: 12px;
    `
    }
    svg{

        height: 23px;
        width: 23px;
    }
    :hover{
        border-color: ${props => props.theme.colors.general[60]};
    }
    :active{
        border-color: ${props => props.theme.colors.primary[100]};
    }
    :focus{
        border: 4px solid ${props => props.theme.colors.primary[40]};
    }
    ${props => props.error && css`
        border-color: ${props.theme.colors.danger[100]};
    `}
`

export const StyledInput = styled.input<Omit<InputProps, 'label'>>`
    outline: none;
    border-style: none;
    height: 100%;
    font-size: ${props => props.inputSize === 'small' ? '14px' : '16px'};
    line-height: 24px;
    ${props => props.inputType}
    color: ${props => props.theme.colors.general[100]};
    background-color: transparent;
    ${props => props.inputType === 'number' ? css`
        width: 48px;
    `: css`
        width: 100%;
    `}
    ::placeholder{
        color: ${props => props.theme.colors.general[60]};
        font-size: ${props => props.inputSize === 'small' ? '14px' : '16px'};
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
