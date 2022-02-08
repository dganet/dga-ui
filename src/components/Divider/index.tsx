import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Container } from './styles'

const Divider: React.FC = () => {
    const theme = useTheme()
    return <Container theme={theme} />
}

export default Divider
