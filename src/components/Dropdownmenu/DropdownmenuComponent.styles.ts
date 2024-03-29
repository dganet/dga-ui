import styled, { css } from 'styled-components'
import { DropdownMenuStyledProps } from './DropdownmenuComponent.types'
import Card from '../Card/CardComponent'

export const Container = styled.div`
    position: relative;
    height: 36px;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FloatContainerStyled = styled.div<DropdownMenuStyledProps>`
    position: absolute;
    ${props => props.floatingSide === 'left' && css`
        transform: translate(15%,80%);
    `}
    ${props => props.floatingSide === 'right' && css`
        transform: translate(-15%,80%);
    `}
    ${props => props.floatingSide === 'center' && css`
        transform: translate(7.5%,80%);
    `}
    width: 255px;
    border-radius: 6px;
    font-family: inherit;
    background: #FFFFFF;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    ${props => props.isOpen && css`
        padding: 12px;
        height: auto;
        box-shadow: 0px 6px 24px rgba(38, 44, 71, 0.16);
    `}
    ${props => !props.isOpen && css`
        height: 0;
    `}
`

export const FloatingItemStyled = styled.a`
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    padding:10px 16px;
    border-radius: 4px;
    color: ${props => props.theme.colors.general[80]};
    cursor: pointer;

    &+&{
        margin-top:4px;
    }

    :active{
        background-color: red;
    }

    :hover{
        color: ${props => props.theme.colors.primary[100]};
        background-color: ${props => props.theme.colors.primary[30]};
    }

    svg{
        margin:0px 8px;
        height: 1.3rem;
        width: 1.3rem;
        color: ${props => props.theme.colors.general[80]};
        :hover{
            color: ${props => props.theme.colors.primary[100]};
        }
    }

`


export const ContentMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    svg{
        margin-left:12px
    }
`
