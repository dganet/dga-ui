import styled, { css } from 'styled-components'

interface TabPanelStyleProps {
    active: boolean
}

interface TabCellProps {
    isActive: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    border-top: 2px solid ${props => props.theme.colors.general[30]};
    padding: 16px;
    width: 100%;
    height: 100%;
`

export const TabTitles = styled.div`
    display: flex;
    align-items: center;
`
export const TabCell = styled.div<TabCellProps>`
    padding: 5px;
    margin-right: 10px;
    margin-bottom: -1px;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.general[80]};
    cursor: pointer;
    ${props =>
        props.isActive &&
        css`
            border-bottom: 2px solid ${props => props.theme.colors.primary[100]};
            color: ${props => props.theme.colors.primary[100]};
            font-weight: 500;
        `}
`
export const TabPanelContainer = styled.div<TabPanelStyleProps>`
    ${props =>
        !props.active &&
        css`
            display: none;
        `}
`
