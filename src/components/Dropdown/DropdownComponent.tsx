import React, { useState } from 'react'

import { useTheme } from '../../hooks/useTheme'
import {
    Container,
    DropdownContainerItem,
    DropdownItem,
    DropdownLabel,
    DropdownTitle
} from './DropdownComponent.styles'
import {
    DropdownProps,
    DropdownItem as DropdownItemType
} from './DropdownComponent.types'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const DropdownComponent = ({
    items = [],
    title,
    size = 'small',
    multSelect = false,
    selectedItem,
    label,
    setSelectedItem
}: DropdownProps) => {
    const [open, setOpen] = useState(false)

    const theme = useTheme()

    const handleClick = () => {
        setOpen(!open)
    }
    const handleItemClick = (item: DropdownItemType) => {
        setSelectedItem(item)
        setOpen(false)
    }

    return (
        <div>
            <DropdownLabel theme={theme}>{title}</DropdownLabel>
            <Container
                theme={theme}
                onClick={handleClick}
                isOpen={open}
                size={size}
            >
                <DropdownTitle theme={theme}>
                    {selectedItem?.value ? selectedItem.value : label}
                </DropdownTitle>
                {open ? (
                    <IoIosArrowUp title="arrow-up" />
                ) : (
                    <IoIosArrowDown title="arrow-down" />
                )}

                <DropdownContainerItem theme={theme} isOpen={open} size={size}>
                    {items.map(item => (
                        <DropdownItem
                            theme={theme}
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                        >
                            {item.value}
                        </DropdownItem>
                    ))}
                </DropdownContainerItem>
            </Container>
        </div>
    )
}
export default DropdownComponent
