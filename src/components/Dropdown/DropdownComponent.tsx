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
        <>
            <DropdownLabel theme={theme}>{label}</DropdownLabel>
            <Container theme={theme} onClick={handleClick}>
                <DropdownTitle theme={theme}>
                    {selectedItem?.value ? selectedItem.value : title}
                </DropdownTitle>
                {open ? (
                    <IoIosArrowUp title="arrow-up" />
                ) : (
                    <IoIosArrowDown title="arrow-down" />
                )}

                <DropdownContainerItem theme={theme} isOpen={open}>
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
        </>
    )
}
export default DropdownComponent
