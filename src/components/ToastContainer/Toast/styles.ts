import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

const ToastTypes = {
    success: css`
        background-color: ${props => props.theme.colors.success[100]};
        color: ${props => props.theme.colors.white};
    `,
    ligthSuccess: css`
        background-color: ${props => props.theme.colors.success[30]};
        color: ${props => props.theme.colors.success[100]};
    `,
    warning: css`
        background-color: ${props => props.theme.colors.warning[100]};
        color: ${props => props.theme.colors.white};
    `,
    lightWarning: css`
        background-color: ${props => props.theme.colors.warning[30]};
        color: ${props => props.theme.colors.warning[100]};
    `,
    error: css`
        background-color: ${props => props.theme.colors.danger[100]};
        color: ${props => props.theme.colors.white};
    `,
    lightError: css`
        background-color: ${props => props.theme.colors.danger[30]};
        color: ${props => props.theme.colors.danger[100]};
    `,
    info: css`
        background-color: ${props => props.theme.colors.primary[100]};
        color: ${props => props.theme.colors.white};
    `,
    lightInfo: css`
        background-color: ${props => props.theme.colors.primary[30]};
        color: ${props => props.theme.colors.primary[100]};
    `
}

interface ContainerProps {
    toastType: 'info'| 'lightInfo' | 'success' | 'lightSuccess' | 'warning' | 'lightWarning' | 'error' | 'lightError';
}

export const Container = styled(animated.div)<ContainerProps>`
    padding: 0 18px;
    position: relative;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    min-width: 327px;
    ${props => ToastTypes[props.toastType]};

    & + div {
        margin-top: 8px;
    }
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        > svg {
            margin-right: 10px;
        }
        p {
            font-size: 16px;
        }
    }

    button {
        color: ${props => props.theme.colors.white};
        border: none;
        background: none;
        cursor: pointer;
        outline: none;
        height: 13px;
        width: 13px;

        svg {
            height: 13px;
            width: 13px;
        }
    }
`
