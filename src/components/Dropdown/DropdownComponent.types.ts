export type DropdownProps = {
    title: string
    items: DropdownItem[]
    multSelect?: boolean
    selectedItem: DropdownItem
    setSelectedItem: any
    label?: string
    size?: 'small' | 'medium' | 'large'
}

export type DropdownItem = {
    id: string
    value: string
}
