type TableSize =  'small' | 'medium' | 'large';
type TableType = 'solid' | 'light';

export type TableProps = {
    tableSize?: TableSize
    tableType?: TableType
}

export type TableRowStyledProps = {
    tableSize?: TableSize
}

export type TableHeaderStyledProps = {
    tableType?: TableType
}
