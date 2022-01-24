export type TableSize =  'small' | 'medium' | 'large';
export type TableType = 'solid' | 'light';

export interface TableProps {
    tableSize?: TableSize
    tableType?: TableType
}

export type TableRowStyledProps = {
    tableSize?: TableSize
}

export type TableHeaderStyledProps = {
    tableType?: TableType
}
export type TableHeaderItemStyledProps = {
    width?: number
}

