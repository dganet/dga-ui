import styled, { css } from 'styled-components'
import { AvatarStyledProps } from './AvatarComponent.types'

const sizes = {
    xs: css`
        height: 24px;
        width: 24px;

        font-size: 14px;
        line-height: 20px;

    `,
    sm: css`
        height: 36px;
        width: 36px;

        font-size: 18px;
        line-height: 28px;
    `,
    md: css`
        height: 48px;
        width: 48px;

        font-size: 24px;
        line-height: 34px;
    `,
    lg: css`
        height: 72px;
        width: 72px;

        font-size: 32px;
        line-height: 44px;
    `,
    xl: css`
        height: 96px;
        width: 96px;

        font-size: 48px;
        line-height: 66px;
    `,
}

const colors = {
    blue: css`
        background-color: ${props => props.theme.colors.primary[100]};
    `,
    grey: css`
        background-color: ${props => props.theme.colors.general[60]};
    `,
    green: css`
        background-color: ${props => props.theme.colors.success[90]};
    `,
    red: css`
        background-color: ${props => props.theme.colors.danger[90]};
    `,
    yellow: css`
        background-color: ${props => props.theme.colors.warning[80]};
    `
}
export const Container = styled.div<AvatarStyledProps>`
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: capitalize;
    font-weight: bold;

    ${props => sizes[props.size]}
    ${props => colors[props.color]}

    img{
        ${props => sizes[props.size]}
        border-radius:50%;

    }


`
