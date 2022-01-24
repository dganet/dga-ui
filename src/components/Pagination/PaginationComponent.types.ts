export type PaginationProps = {
   count: number,
   onChange: (page: number) => void,
   defaultPage: number,
}

export type PaginationItemProps = {
    isActive: boolean
    disabled?: boolean
}
