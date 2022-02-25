import React from 'react'

import {
    Container,
    FloatContainerStyled,
    FloatingItemStyled,
    ContentMenu
} from './DropdownmenuComponent.styles'
import {
    DropdownmenuProps,
    FloatingContainerTypes,
    FloatingItemTypes
} from './DropdownmenuComponent.types'
import { IoIosArrowDown, IoIosArrowUp, IoIosCafe } from 'react-icons/io'
import { useTheme } from '../../hooks/useTheme/'

const DropdownmenuComponent = ({
    children,
    floatingSide,
    floatingItems
}: DropdownmenuProps) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const theme = useTheme()
    return (
        <Container>
            <ContentMenu onClick={() => setIsOpen(!isOpen)}>
                {children}
                {isOpen ? (
                    <IoIosArrowUp size={14} />
                ) : (
                    <IoIosArrowDown size={14} />
                )}
            </ContentMenu>
            <FloatingContainer floatingSide={floatingSide} isOpen={isOpen}>
                {floatingItems}
            </FloatingContainer>
        </Container>
    )
}

export const FloatingContainer: React.FC<FloatingContainerTypes> = ({
    floatingSide = 'left',
    isOpen,
    children
}) => {
    const theme = useTheme()
    return (
        <FloatContainerStyled
            floatingSide={floatingSide}
            theme={theme}
            isOpen={isOpen}
        >
            {children}
        </FloatContainerStyled>
    )
}

export const FloatingItem: React.FC<FloatingItemTypes> = ({
    children,
    onClick
}) => {
    const theme = useTheme()
    return (
        <FloatingItemStyled onClick={onClick} theme={theme}>
            {children}
        </FloatingItemStyled>
    )
}

export default DropdownmenuComponent
