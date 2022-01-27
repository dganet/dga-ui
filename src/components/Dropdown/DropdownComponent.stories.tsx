import React, { useState } from 'react'

import DropdownComponent from './DropdownComponent'
import { DropdownItem } from './DropdownComponent.types'

export default {
    title: 'DropdownComponent',
    component: DropdownComponent
}

const customItems: DropdownItem[] = [
    {
        id: 1,
        value: 'Teste1'
    },
    {
        id: 2,
        value: 'Teste2'
    },
    {
        id: 3,
        value: 'Teste3'
    },
    {
        id: 4,
        value: 'Teste4'
    },
    {
        id: 5,
        value: 'Teste5'
    }
]

export const Default = args => {
    const [selectedItem, setSelectedItem] = useState({} as DropdownItem)
    return (
        <DropdownComponent
            {...args}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
        />
    )
}
