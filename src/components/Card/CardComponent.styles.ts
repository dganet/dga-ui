import styled, { css } from 'styled-components'
import { CardProps } from './CardComponent.types';

export const Container = styled.div<Omit<CardProps, 'cardTitle' | 'children'>>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 'auto';
    border-radius: 6px;
    padding: 28px;
    font-family: inherit;

    ${props => props.cardType === 'shadow' && css`
        background: #FFFFFF;
        box-shadow: 0 1px 4px 0 ${props => props.theme.colors.shadow};
    `}
    ${props => props.cardType === 'border' && css`
        background: #FFFFFF;
        border: 1px solid ${props => props.theme.colors.general['40']};
    `}
    ${props => props.cardType === 'border-shadow' && css`
        background: #FFFFFF;
        border: 1px solid ${props => props.theme.colors.general['50']};
        box-shadow: 0 2px 6px 0 ${props => props.theme.colors.shadow};
    `}
`;


export const CardBody = styled.div``;
