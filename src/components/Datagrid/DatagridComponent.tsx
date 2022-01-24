import React from 'react'
import Table, {
    TableBody,
    TableHeader,
    TableHeaderItem,
    TableRow,
    TableRowItem
} from '@components/Table/TableComponent'

import { DatagridProps } from './DatagridComponent.types'

const DatagridComponent = ({
    data,
    tableSize = 'small',
    tableType = 'light'
}: DatagridProps) => {
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
                    <TableRow key={index}>
                        {row.map((item, index) => {
                            return (
                                <TableRowItem
                                    key={index}
                                    width={data.header[index]?.width}
                                >
                                    {item.label}
                                </TableRowItem>
                            )
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DatagridComponent
