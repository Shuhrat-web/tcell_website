import { IUiTypes } from "@/lib/shared/types/IGlobalTypes";


export interface ITableHead{
    id: number;
    label: string;
    query: string;
    colSpan: number;
    rowSpan: number;
}

export interface ITableContainerProps{
    headers: ITableHead[];
    showActions?: boolean;
    showSelect?: boolean;
    children: any;
    tableFilters?: any;
    showPagination?: boolean;
    showSorting?: boolean;
    isLoading?: boolean;
    isError?: boolean; 
    error?: boolean; 
    pagination?: ITablePaginationData;
    onPageChanged?: (page:number,perPage:number) => void
}

export interface ITablePaginationData{
    itemsPerPage?: number;
    activePage?: number;
    itemsCount?: number
}

export interface ITableHeaderProps{
    children: any;
    rowSpan?: number;
    colSpan?: number;
}

export interface ITableControlsProps{
    children: any;
}

export interface ITableColumn{
    children: any;
    rowSpan?: number;
    colSpan?: number;
}

export interface ITableRowProps{
    children: any;
    showSelect?: boolean;
    color?: string;
}

export interface ITableRowSettings{
    color: IUiTypes
}

export interface ITablePaginationProps{
    itemsPerPage?: number;
    activePage?: number;
    itemsCount?: number
    onPageChanged?: (page:number,perPage:number) => void
}