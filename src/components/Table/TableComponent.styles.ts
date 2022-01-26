import styled, { css } from "styled-components";
import { TableHeaderItemStyledProps, TableHeaderStyledProps, TableRowStyledProps } from "./TableComponent.types";


const tableSize = {

    small: css`
        height: 56px;
        padding: 18px 24px;
        div{
            font-size: 14px;
        }
    `,
    medium: css`
        height: 64px;
        padding: 20px 24px;
        font-size: 16px;
    `,
    large: css`
        height: 72px;
        padding: 24px 24px;
        font-size: 16px;
    `,

}
const tableHeaderType = {
    solid: css`
        background-color: ${props => props.theme.colors.general[30]};
        color: ${props => props.theme.colors.general[80]};
        font-size: 14px;
        line-height: 20px;
        font-family: 'Inter';
    `,
    light: css`
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.general[80]};
        font-size: 14px;
        line-height: 20px;
        font-family: 'Inter';
        border-bottom: 2px solid ${props => props.theme.colors.general[30]};

    `,
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const TableHeaderStyled = styled.div<TableHeaderStyledProps>`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 24px;
    ${props => tableHeaderType[props.tableType]}
`

export const TableHeaderItemStyled = styled.div<TableHeaderItemStyledProps>`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width: ${props => props.width ? `${props.width}%`: '100%' };
`
export const TableBodyStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const TableRowStyled = styled.div<TableRowStyledProps>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 12px 24px;
    border-bottom: 1px solid ${props => props.theme.colors.general[40]};
    ${props => tableSize[props.tableSize]};
    :hover{
        background-color: ${props => props.theme.colors.general[30]};
        cursor: pointer;
    }
`

export const TableRowItemStyled = styled.div<TableHeaderItemStyledProps>`
    width: ${props => props.width ? `${props.width}%`: '100%' };
`

export const TableFooterStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
`
