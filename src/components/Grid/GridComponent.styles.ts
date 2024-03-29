import styled, { css } from 'styled-components'
import {  ColStyleProps,  RowStyleProps } from './GridComponent.types'

const  colSize = 8.33;

export const Container = styled.div`
    box-sizing: border-box;
`

export const StyledRow = styled.div<RowStyleProps>`
    display: flex;
    flex-flow: row wrap;

    ${props => props.centralize && css`
        justify-content: center;
    ` }
    ${props => props.gap && css`
        &+& {
            margin-top: ${props.gap}px;
        }
    `}
`

export const StyledCol = styled.div<ColStyleProps>`

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        ${props => css`
            ${ (props.xs * colSize) > 95 ?
                css`
                    ${props.xs ? css`
                        width: ${props.xs * colSize}%;
                    ` : css`
                        flex: 1;
                    `}
                    &+& {
                        margin-left: 0;
                    }` :
                css`
                    ${props.xs ? css`
                        width: calc(${props.xs * colSize}% - ${props.gap}px);
                    ` : css`
                        flex: 1;
                    `}
                    &+& {
                        margin-left: ${props.gap}px;
                    }`
            }
        `}
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
     @media only screen and (min-width: 600px) {
        ${props => css`
            ${ (props.sm * colSize) > 95 ?
                css`
                    ${props.sm ? css`
                        width: ${props.sm * colSize}%;
                    ` : css`
                        flex: 1;
                    `}
                    &+& {
                        margin-left: 0;
                    }` :
                css`
                    ${props.sm ? css`
                        width: calc(${props.sm * colSize}% - ${props.gap}px);
                    ` : css`
                        flex: 1;
                    `}
                    &+& {
                        margin-left: ${props.gap}px;
                    }`
            }
        `}
     }
    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        ${props => css`
            ${ (props.md * colSize) > 95 ?
                css`
                    ${props.md ? css`
                        width: ${props.md * colSize}%;
                    ` : css`
                        flex: 1;
                    `}
                    &+& {
                        margin-left: 0;
                    }` :
                css`
                    ${props.md ? css`
                        width: calc(${props.md * colSize}% - ${props.gap}px);
                    ` : css`
                        flex: 1;
                    `}
                    &+& {
                        margin-left: ${props.gap}px;
                    }`
            }
        `}
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media screen and (min-width: 992px) {
        ${props => css`
            ${ (props.lg * colSize) > 95 ?
                css`
                    ${props.lg ? css`
                        width: ${props.lg * colSize}%;
                    ` : css`
                        flex: 1;
                    `}
                    &+& {
                        margin-left: 0;
                    }` :
                css`
                    ${props.lg ? css`
                        width: calc(${props.lg * colSize}% - ${props.gap}px);
                    ` : css`
                        flex: 1;
                    `}
                    &+& {
                        margin-left: ${props.gap}px;
                    }`
            }
        `}
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media screen and (min-width: 1200px) {
        ${props => css`
            ${ (props.xl * colSize) > 95 ?
                css`
                    ${props.lg ? css`
                        width: ${props.xl * colSize}%;
                    ` : css`
                        flex: 1;
                    `}
                    &+& {
                        margin-left: 0;
                    }` :
                css`
                    ${props.lg ? css`
                        width: calc(${props.xl * colSize}% - ${props.gap}px);
                    ` : css`
                        flex: 1;
                    `}
                    &+& {
                        margin-left: ${props.gap}px;
                    }`
            }
        `}
    }

`
