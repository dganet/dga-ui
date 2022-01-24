import { TableProvider, useTable } from '@hooks/useTable/TableProvider'
import { useTheme } from '@hooks/useTheme'
import React, { Children, useEffect } from 'react'

import {
    Container,
    TableHeaderStyled,
    TableHeaderItemStyled,
    TableBodyStyled,
    TableRowStyled,
    TableRowItemStyled,
    TableFooterStyled
} from './TableComponent.styles'
import { TableHeaderItemStyledProps, TableProps } from './TableComponent.types'

const Table: React.FC<TableProps> = ({ children, ...rest }) => {
    return (
        <TableProvider>
            <TableComponent {...rest}>{children}</TableComponent>
        </TableProvider>
    )
}
const TableComponent: React.FC<TableProps> = ({
    tableSize = 'small',
    tableType = 'light',
    children
}) => {
    const theme = useTheme()
    const { setTableSize, setTableType } = useTable()

    useEffect(() => {
        if (tableSize) {
            setTableSize(tableSize)
        }
        if (tableType) {
            setTableType(tableType)
        }
    }, [tableType, tableSize, setTableSize, setTableType])

    return <Container theme={theme}>{children}</Container>
}

export const TableHeader: React.FC = ({ children }) => {
    const theme = useTheme()
    const { tableType } = useTable()
    return (
        <TableHeaderStyled theme={theme} tableType={tableType}>
            {children}
        </TableHeaderStyled>
    )
}
export const TableHeaderItem: React.FC<TableHeaderItemStyledProps> = ({
    children,
    width
}) => {
    const theme = useTheme()
    return (
        <TableHeaderItemStyled width={width} theme={theme}>
            {children}
        </TableHeaderItemStyled>
    )
}
export const TableBody: React.FC = ({ children }) => {
    const theme = useTheme()
    return <TableBodyStyled theme={theme}>{children}</TableBodyStyled>
}
export const TableRow: React.FC = ({ children }) => {
    const theme = useTheme()
    const { tableSize } = useTable()
    return (
        <TableRowStyled theme={theme} tableSize={tableSize}>
            {children}
        </TableRowStyled>
    )
}
export const TableRowItem: React.FC<TableHeaderItemStyledProps> = ({
    children,
    width
}) => {
    const theme = useTheme()
    return (
        <TableRowItemStyled width={width} theme={theme}>
            {children}
        </TableRowItemStyled>
    )
}

export const TableFooter: React.FC = ({ children }) => {
    const theme = useTheme()
    return <TableFooterStyled theme={theme}>{children}</TableFooterStyled>
}
export default Table
