import TableHeader from "./components/TableHeader";
import TablePagination from "./components/TablePagination";
import { ITableContainerProps } from "./lib/types/TableTypes";
import { HiArrowsUpDown } from "react-icons/hi2";
import SpinnerLoader from "../Loaders/SpinnerLoader";
import Title from "../Title/Title";


const TableContainer = ({
    children,
    headers,
    showActions=false,
    showSelect,
    tableFilters, 
    showPagination = false,
    showSorting =true,
    isLoading=false,
    error,
    isError,
    pagination={
        itemsCount: 80,
        itemsPerPage: 10,
        activePage: 1
    },
    onPageChanged = () =>{},
    }:ITableContainerProps) => {
  return (
    <div className="bg-white rounded-md border border-secondary-200">
        {
            tableFilters &&
            tableFilters
        }
        <table className="w-full">
            <thead className="uppercase text-[12px] text-secondary font-medium">
                <tr className="bg-secondary-300 py-4">
                    {
                        showSelect &&
                        <TableHeader>
                            <input className="border" type="checkbox" name="selectAll" id="selectAll" />
                        </TableHeader>
                    }
                    {
                        headers.map(tableHead =>
                        <TableHeader key={tableHead.id} colSpan={tableHead.colSpan} rowSpan={tableHead.rowSpan}>
                            {tableHead.label}
                            {
                                showSorting &&
                                <HiArrowsUpDown  />
                            }
                        </TableHeader>    
                    )}
                    {
                        showActions &&
                        <TableHeader>
                            Действия
                        </TableHeader>
                    }
                </tr>
            </thead>
            <tbody className="text-[12px]">
                {
                    !isLoading &&
                    children
                }
            </tbody>
        </table>
            {
                isLoading &&
                <div className="flex justify-center items-center h-80 bg-secondary-200 animate-pulse">
                    <SpinnerLoader />
                </div>
            }
            {
                isError && error &&
                <Title centered extraClass="my-5">
                    {error}
                </Title>
                
            }
            {
                isError && !error &&
                <Title centered extraClass="my-5">
                    Неполадки с сетью, попробуйте позже!
                </Title>
                
            }
            
        {
            showPagination &&
            <TablePagination onPageChanged={onPageChanged} {...pagination} />
        }
    </div>
  )
}

export default TableContainer;