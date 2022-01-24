import { TableProps } from "@components/Table/TableComponent.types";

export interface DatagridProps extends TableProps {
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

