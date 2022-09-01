import { GridProvider, useGrid } from '@hooks/useGrid/GridProvider'
import React, { useEffect } from 'react'

import { Container, StyledRow, StyledCol } from './GridComponent.styles'
import { ColProps, GridProps, RowProps } from './GridComponent.types'

const Grid = ({ colGap, rowGap, children }: GridProps) => {
    return (
        <GridProvider>
            <GridComponent colGap={colGap} rowGap={rowGap}>
                {children}
            </GridComponent>
        </GridProvider>
    )
}

const GridComponent = ({ colGap, rowGap, children }: GridProps) => {
    const { setColGap, setRowGap } = useGrid()

    useEffect(() => {
        if (colGap) setColGap(colGap)
        if (rowGap) setRowGap(rowGap)
    }, [colGap, rowGap])

    return <Container>{children}</Container>
}

const Row = ({ children, centralize }: RowProps) => {
    const { rowGap } = useGrid()
    return (
        <StyledRow centralize={centralize} gap={rowGap}>
            {children}
        </StyledRow>
    )
}

const Col = ({ children, lg, md, xl, sm, xs }: ColProps) => {
    const { colGap } = useGrid()
    return (
        <StyledCol gap={colGap} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            {children}
        </StyledCol>
    )
}

export { Grid, Row, Col }
