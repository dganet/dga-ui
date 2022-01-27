import styled, { css } from 'styled-components'

interface DropdownContainerItemStyleProps {
    isOpen: boolean
}
export const Container = styled.div`
    width: 268px;
    height: 32px;
    border: 1px solid ${props => props.theme.colors.neutral.soft};
    border-radius: 4px;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    svg {
        margin-right: 5px;
    }
`

export const DropdownContainerItem = styled.div<DropdownContainerItemStyleProps>`
    position: absolute;
    transform: translateY(62%);
    border: 1px solid ${props => props.theme.colors.neutral.soft};
    width: 100%;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: none;

    ${props =>
        props.isOpen &&
        css`
            display: block;
        `}
`

export const DropdownItem = styled.div`
    padding: 3px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.colors.neutral.light[300]};
    }
`

export const DropdownTitle = styled.div`
    padding: 16px;
`

export const DropdownLabel = styled.span`
    color: ${props => props.theme.colors.neutral.dark};
    ${props => props.theme.fontTokens[100]};
`
