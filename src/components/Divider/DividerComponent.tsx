import React from 'react'

import { Container } from './DividerComponent.styles'
import { useTheme } from '../../hooks/useTheme'

const DividerComponent = () => {
    const theme = useTheme()
    return <Container theme={theme} />
}

export default DividerComponent
