export type FloatingSide = 'left' | 'right' | 'center'

export type DropdownmenuProps = {
    children: React.ReactNode
    floatingItems: React.ReactNode
    floatingSide: FloatingSide
}

export type DropdownMenuStyledProps = {
    isOpen: boolean
    floatingSide: FloatingSide
}

export type FloatingContainerTypes = {

    floatingSide: FloatingSide
    isOpen: boolean
}
