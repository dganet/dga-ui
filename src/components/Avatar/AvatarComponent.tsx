import React from 'react'

import { Container } from './AvatarComponent.styles'
import { AvatarProps } from './AvatarComponent.types'
import { useTheme } from '../../hooks/useTheme'
const AvatarComponent = ({
    avatarType,
    color,
    image,
    size,
    letter
}: AvatarProps) => {
    const theme = useTheme()
    return (
        <Container color={color} size={size} theme={theme}>
            {avatarType === 'image' && <img src={image} alt="" />}
            {avatarType === 'letter' && <p>{letter}</p>}
        </Container>
    )
}

export default AvatarComponent
