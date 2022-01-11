import styled, { css } from 'styled-components'
import { ButtonProps } from './ButtonComponent.types'

const buttonSize = {
    'large': css`
        height: 48px;
        padding: 12px 24px;
        font-size: 16px;
        line-height: 24px;
    `,
    'medium': css`
        height: 40px;
        padding: 8px 24px;
        font-size: 16px;
        line-height: 24px;
    `,
    'small': css`
        height: 36px;
        padding: 8px 24px;
        font-size: 14px;
        line-height: 20px;
    `
}

const buttonColors = {
    'primary' : css`
        background-color: ${props => props.theme.colors.primary[100]};
        color: ${props => props.theme.colors.white};
        :hover{
            background-color: ${props => props.theme.colors.primary[80]};
        }

    `,
    'secondary' : css`
        background-color: ${props => props.theme.colors.primary[40]};
        color: ${props => props.theme.colors.primary[100]};
        :hover{
            background-color: ${props => props.theme.colors.primary[30]};
        }
    `,
    'destructive' : css`
        background-color: ${props => props.theme.colors.danger[100]};
        color: ${props => props.theme.colors.white};
        :hover{

            background-color: ${props => props.theme.colors.danger[80]};
        }
    `,
    'destructiveSecondary' : css`
        background-color: ${props => props.theme.colors.danger[30]};
        color: ${props => props.theme.colors.danger[100]};
        :hover{

            background-color: ${props => props.theme.colors.danger[40]};
        }
    `,
    'white' : css`
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.primary[100]};
        border-style: solid;
        border-width: 1px;
        border-color: ${props => props.theme.colors.general[50]};
        :hover{

            background-color: ${props => props.theme.colors.general[30]};
        }
    `,

}

const onlyIconPadding = {
    'large': css`padding: 14px 14px;`,
    'medium': css`padding: 10px 10px;`,
    'small': css`padding: 8px 8px;`,

}

export const Container = styled.button<ButtonProps>`
    box-sizing: border-box;
    border-style: none;
    outline: none;
    cursor: pointer;


    ${props => buttonSize[props.buttonSize]};
    ${props => buttonColors[props.buttonType]};


    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-family: ${props => props.theme.fontFamily.Regular};

    svg{
        font-size: 20px;
        line-height: 20px;
        height: 20px;
        width: 20px;
    }
    label{
        margin-left: 4px
    }

    ${props => props.onlyIcon && css`
        ${onlyIconPadding[props.buttonSize]}
        label{
            margin-left: 0
        }
    `}
    :disabled{
        background-color: ${props => props.theme.colors.general[50]};
        color: ${props => props.theme.colors.white};
        cursor: not-allowed;
    }

`
