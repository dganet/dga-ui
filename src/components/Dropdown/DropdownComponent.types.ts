export type DropdownProps = {
    title: string
    items: DropdownItem[]
    multSelect?: boolean
    selectedItem: DropdownItem
    setSelectedItem: any
    label?: string
}

export type DropdownItem = {
    id: number
    value: string
}
