import React from 'react'
import Table, {
    TableBody,
    TableHeader,
    TableHeaderItem,
    TableRow,
    TableRowItem,
    TableFooter
} from '@components/Table/TableComponent'

import { DatagridProps } from './DatagridComponent.types'
import PaginationComponent from '@components/Pagination/PaginationComponent'
import { useTheme } from '@hooks/useTheme'
import { AmounRegisters } from './DatagridComponent.styles'

const DatagridComponent = ({
    data,
    tableSize = 'small',
    tableType = 'light',
    onChangePage,
    pageAmount,
    defaultPage,
    amountRegister,
    rowClick
}: DatagridProps) => {
    const theme = useTheme()

    return (
        <Table tableSize={tableSize} tableType={tableType}>
            <TableHeader>
                {data.header.map((header, index) => (
                    <TableHeaderItem width={header?.width} key={index}>
                        {header.label}
                    </TableHeaderItem>
                ))}
            </TableHeader>
            <TableBody>
                {data.body.map((row, index) => (
                    <TableRow rowClick={() => rowClick(row.id)} key={index}>
                        {Object.keys(row).map((key, index) => {
                            if (key !== 'id') {
                                return (
                                    <TableRowItem
                                        key={index}
                                        width={data.header[index]?.width}
                                    >
                                        {row[data.header[index].key]}
                                    </TableRowItem>
                                )
                            }
                        })}
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <PaginationComponent
                    defaultPage={defaultPage}
                    onChange={onChangePage}
                    count={pageAmount}
                />
                <AmounRegisters theme={theme}>
                    {amountRegister} registros
                </AmounRegisters>
            </TableFooter>
        </Table>
    )
}

export default DatagridComponent
