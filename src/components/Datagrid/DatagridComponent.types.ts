import { TableProps, TableSize, TableType } from "@components/Table/TableComponent.types";

export interface DatagridProps extends TableProps {
    onChangePage ?: (page: number) => void;
    rowClick ?: (id: string) => void;
    pageAmount ?: number;
    defaultPage?: number;
    amountRegister?: number;
    tableSize?: TableSize
    tableType?: TableType

    data: {
        header: DataGridHeaderItems[],
        body: GridItem[]
    }
}

type DataGridHeaderItems = {
    label: string;
    width: number;
    key: string;
}

type GridItem = {
    [x: string]: string;
}



