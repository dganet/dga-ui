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
            width: calc(${props.xs * colSize}% - ${props.gap}px);
            ${ (props.xs * colSize) > 95 ?
                css` &+& {margin-left: 0;}` :
                css` &+& {margin-left: ${props.gap}px;}`
            }

        `}
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
     @media only screen and (min-width: 600px) {
        background-color: yellow;
        ${props => css`
            width: calc(${props.sm * colSize}% - ${props.gap}px);
            ${ (props.sm * colSize) > 95 ?
                css` &+& {margin-left: 0;}` :
                css` &+& {margin-left: ${props.gap}px;}`
            }

        `}
     }
    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        background-color: green;
        ${props => css`
            width: calc(${props.md * colSize}% - ${props.gap}px);
            ${ (props.md * colSize) > 95 ?
                css` &+& {margin-left: 0;}` :
                css` &+& {margin-left: ${props.gap}px;}`
            }

        `}
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media screen and (min-width: 992px) {
        background-color: blue;
        ${props => css`
            width: calc(${props.lg * colSize}% - ${props.gap}px);
            ${ (props.lg * colSize) > 95 ?
                css` &+& {margin-left: 0;}` :
                css` &+& {margin-left: ${props.gap}px;}`
            }

        `}
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media screen and (min-width: 1200px) {
        background-color: gray;
        ${props => css`
            width: calc(${props.xl * colSize}% - ${props.gap}px);
            ${ (props.xl * colSize) > 95 ?
                css` &+& {margin-left: 0;}` :
                css` &+& {margin-left: ${props.gap}px;}`
            }
        `}
    }

`
