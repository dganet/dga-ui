import React, { createContext, useContext, useState } from 'react'

interface GridContextData {
    colGap: number
    rowGap: number
    setColGap: (col: number) => void
    setRowGap: (row: number) => void
}

interface IGridProvider {
    children: React.ReactNode
}

const GridContext = createContext<GridContextData>({} as GridContextData)

const GridProvider = ({ children }: IGridProvider) => {
    const [colGap, setColGap] = useState<number>(0)
    const [rowGap, setRowGap] = useState<number>(0)

    return (
        <GridContext.Provider value={{ colGap, rowGap, setColGap, setRowGap }}>
            {children}
        </GridContext.Provider>
    )
}

function useGrid() {
    const context = useContext(GridContext)
    if (!context) {
        throw new Error('useGrid must be used within a GridProvider')
    }
    return context
}

export { useGrid, GridProvider }
