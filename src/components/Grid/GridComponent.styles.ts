import styled, { css } from 'styled-components'
import {  ColStyleProps,  RowStyleProps } from './GridComponent.types'

const  colSize = 8.33;

export const Container = styled.div`
    box-sizing: border-box;
`

export const StyledRow = styled.div<RowStyleProps>`
    display: flex;
    flex-flow: row wrap;

    ${props => props.gap && css`
        ${props.centralize && css`
            justify-content: center;
        ` }
        &+& {
            margin-top: ${props.gap}px;
        }
    `}
`

export const StyledCol = styled.div<ColStyleProps>`
    background-color: yellow;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        background-color: red;
        ${props => css`
            ${ (props.xs * colSize) > 95 ?
                css`
                    width: ${props.xs * colSize}%;
                    &+& {
                        margin-left: 0;
                    }` :
                css`
                    width: calc(${props.xs * colSize}% - ${props.gap}px);
                    &+& {
                        margin-left: ${props.gap}px;
                    }`
            }
        `}
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
     @media only screen and (min-width: 600px) {
        background-color: yellow;
        ${props => css`
            ${ (props.sm * colSize) > 95 ?
                css`
                    width: ${props.sm * colSize}%;
                    &+& {
                        margin-left: 0;
                    }` :
                css`
                    width: calc(${props.sm * colSize}% - ${props.gap}px);
                    &+& {
                        margin-left: ${props.gap}px;
                    }`
            }
        `}
     }
    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        background-color: green;
        ${props => css`
            ${ (props.md * colSize) > 95 ?
                css`
                    width: ${props.md * colSize}%;
                    &+& {
                        margin-left: 0;
                    }` :
                css`
                    width: calc(${props.md * colSize}% - ${props.gap}px);
                    &+& {
                        margin-left: ${props.gap}px;
                    }`
            }
        `}
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media screen and (min-width: 992px) {
        background-color: blue;
        ${props => css`
            ${ (props.lg * colSize) > 95 ?
                css`
                    width: ${props.lg * colSize}%;
                    &+& {
                        margin-left: 0;
                    }` :
                css`
                    width: calc(${props.lg * colSize}% - ${props.gap}px);
                    &+& {
                        margin-left: ${props.gap}px;
                    }`
            }
        `}
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media screen and (min-width: 1200px) {
        background-color: gray;
        ${props => css`
            ${ (props.xl * colSize) > 95 ?
                css`
                    width: ${props.xl * colSize}%;
                    &+& {
                        margin-left: 0;
                    }` :
                css`
                    width: calc(${props.xl * colSize}% - ${props.gap}px);
                    &+& {
                        margin-left: ${props.gap}px;
                    }`
            }
        `}
    }

`
