import { useTheme } from '@hooks/useTheme'
import React from 'react'

import {
    Container,
    TableHeader,
    TableHeaderItem,
    TableBody,
    TableRow,
    TableRowItem
} from './TableComponent.styles'
import { TableProps } from './TableComponent.types'

const Table = ({ tableSize = 'small', tableType = 'light' }: TableProps) => {
    const theme = useTheme()
    return (
        <Container>
            <TableHeader theme={theme} tableType={tableType}>
                <TableHeaderItem theme={theme}>header</TableHeaderItem>
                <TableHeaderItem>header</TableHeaderItem>
                <TableHeaderItem>header</TableHeaderItem>
                <TableHeaderItem>header</TableHeaderItem>
            </TableHeader>
            <TableBody>
                <TableRow theme={theme} tableSize={tableSize}>
                    <TableRowItem theme={theme}>item</TableRowItem>
                    <TableRowItem>item</TableRowItem>
                    <TableRowItem>item</TableRowItem>
                    <TableRowItem>item</TableRowItem>
                </TableRow>
                <TableRow theme={theme} tableSize={tableSize}>
                    <TableRowItem theme={theme}>item</TableRowItem>
                    <TableRowItem>item</TableRowItem>
                    <TableRowItem>item</TableRowItem>
                    <TableRowItem>item</TableRowItem>
                </TableRow>
            </TableBody>
        </Container>
    )
}

export default Table
