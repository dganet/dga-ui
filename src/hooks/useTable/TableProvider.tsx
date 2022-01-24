import React, { createContext, useContext, useState } from 'react'
import { TableSize, TableType } from '@components/Table/TableComponent.types'

interface TableContextData {
    tableSize: TableSize
    tableType: TableType
    setTableSize: (size: TableSize) => void
    setTableType: (type: TableType) => void
}

const TableContext = createContext<TableContextData>({} as TableContextData)

const TableProvider = ({ children }: any) => {
    const [tableSize, setTableSize] = useState<TableSize>('small')
    const [tableType, setTableType] = useState<TableType>('light')

    return (
        <TableContext.Provider
            value={{ tableSize, tableType, setTableSize, setTableType }}
        >
            {children}
        </TableContext.Provider>
    )
}

function useTable() {
    const context = useContext(TableContext)
    if (!context) {
        throw new Error('useTable must be used within a TableProvider')
    }
    return context
}

export { TableProvider, useTable }
