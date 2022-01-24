import { TableProps } from "@components/Table/TableComponent.types";

export interface DatagridProps extends TableProps {
    onChangePage ?: (page: number) => void;
    pageAmount ?: number;
    defaultPage?: number;
    amountRegister?: number;
    data: {
        header: DataGridHeaderItems[],
        body: DataGridItems[][]
    }
}

type DataGridHeaderItems = {
    label: string;
    width: number;
}
type DataGridItems =
    { label: string;}

