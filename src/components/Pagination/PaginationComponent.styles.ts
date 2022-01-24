import styled, { css } from 'styled-components'
import { PaginationItemProps } from './PaginationComponent.types'

export const Container = styled.div`
    display: flex;
`

export const PaginationItem = styled.div<PaginationItemProps>`
    width: 36px;
    height: 36px;
    font-size: 16px;
    color: ${props => props.theme.colors.general[80]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    ${props => props.isActive && css`
        background: ${props => props.theme.colors.primary[30]};
        color: ${props => props.theme.colors.primary[100]};
    `}

    :hover {
        ${props => !props.disabled && css`
            background: ${props => props.theme.colors.primary[30]};
            color: ${props => props.theme.colors.primary[100]};
            cursor: pointer;
        `}
    }
`

export const ActionButton = styled.button`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    background: transparent;
    svg{
        width: 26px;
        height: 20px;
    }
    :hover {
        cursor: pointer;
    }

`
