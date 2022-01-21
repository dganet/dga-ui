import styled, { css } from "styled-components";
import { TableHeaderStyledProps, TableRowStyledProps } from "./TableComponent.types";


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

export const TableHeader = styled.div<TableHeaderStyledProps>`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 24px;
    ${props => tableHeaderType[props.tableType]}
`

export const TableHeaderItem = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;


`

export const TableBody = styled.div`
    display: flex;
    flex-direction: column;
`

export const TableRow = styled.div<TableRowStyledProps>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 12px 24px;
    border-bottom: 1px solid ${props => props.theme.colors.general[40]};
    ${props => tableSize[props.tableSize]};
`

export const TableRowItem = styled.div`
    flex: 1;
`
