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
    color: ${props => props.theme.colors.general[80]};
    font-family: 'Inter';
`

export const InputContainer = styled.div<Omit<InputProps, 'label'>>`
    box-sizing: border-box;
    ${props => inputSize[props.inputSize]}
    border: solid 1px ${props => props.theme.colors.general[50]};
    border-radius: 4px;
    padding: 8px 16px;
    font-family: ${props => props.theme.fontFamily.Regular};
`

export const StyledInput = styled.input<Omit<InputProps, 'label'>>`
    outline: none;
    border-style: none;
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: ${props => props.theme.colors.general[50]};

`
