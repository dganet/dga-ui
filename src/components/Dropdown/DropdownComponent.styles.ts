import styled, { css } from 'styled-components'

interface DropdownContainerItemStyleProps {
    isOpen: boolean
    size: 'small' | 'medium' | 'large'
}
const size = {
    small: css`
        height: 36px;
        font-size: 14px;
    `,
    medium: css`
        height: 40px;
        font-size: 16px;

    `,
    large: css`
        height: 48px;
        font-size: 16px;
    `,

}

export const Container = styled.div<DropdownContainerItemStyleProps>`
    width: 268px;
    ${props => size[props.size]};
    border: 1px solid ${props => props.theme.colors.general[50]};
    border-radius: 4px;
    cursor: pointer;
    color: ${props => props.theme.colors.general[60]};
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    ${props =>
        props.isOpen &&
        css`
            color:${props => props.theme.colors.general[100]};
        `
    }
    svg {
        margin-right: 5px;
        fill: ${props => props.theme.colors.general[70]};
    }
`

export const DropdownContainerItem = styled.div<DropdownContainerItemStyleProps>`
    position: absolute;
    transform: translateY(64%);
    background-color: ${props => props.theme.colors.white};
    width: 100%;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: none;
    box-shadow: 0 6px  24px rgba(38, 44, 71, 0.16);
    ${props =>
        props.isOpen &&
        css`
            color:${props => props.theme.colors.general[100]};
            display: block;
        `
    }
`

export const DropdownItem = styled.div`
    font-size: 16px;
    line-height: 24px;
    padding: 10px 16px;
    height: 24px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.primary[30]};
        color: ${props => props.theme.colors.primary[100]};
    }
`

export const DropdownTitle = styled.div`
    padding: 16px;
`

export const DropdownLabel = styled.span`
    color: ${props => props.theme.colors.general[80]};
    font-size: 14px;
    line-height: 20px;
`
