import { TableProps } from "@components/Table/TableComponent.types";

export interface DatagridProps extends TableProps {
    onChangePage ?: (page: number) => void;
    rowClick ?: (id: string) => void;
    pageAmount ?: number;
    defaultPage?: number;
    amountRegister?: number;

    data: {
        header: DataGridHeaderItems[],
        body: DataGridRowItems[]
    }
}

type DataGridHeaderItems = {
    label: string;
    width: number;
}
type DataGridRowItems ={
        rowId: string,
        items: GridItem[]
}
type GridItem = {
    label: string;
}



