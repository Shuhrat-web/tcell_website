import ReactPaginate from "react-paginate";
import DropDown from "../../Dropdown/DropDown"
import { IDropdownOption } from "../../Dropdown/lib/type/DropDownTypes"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ITablePaginationProps } from "../lib/types/TableTypes";
import { useState } from "react";

const TablePagination = ({itemsPerPage=10,itemsCount=80,activePage=1,onPageChanged = () => {}}:ITablePaginationProps) => {
    const showPerPageOptions:IDropdownOption[] = [
        {
            value: '5',
            label: 'Показать 5'
        },
        {
            value: '10',
            label: 'Показать 10'
        },
        {
            value: '20',
            label: 'Показать 20'
        }
    ]
    const [perPage,setPerPage] = useState<number>(itemsPerPage)
    const [currentPage,setCurrentPage] = useState<number>(activePage)

    

    const calculatePageCount = (): number => {
        return Math.ceil(itemsCount/perPage );
      }
    const handleSelect = (value: string) => {
        console.log(currentPage);
        setCurrentPage(1)
        onPageChanged(1,+value)
        setPerPage(+value)
      };

    const handlePageClick = ({selected}: { selected: number }) => {
        onPageChanged(selected+1,perPage)
        setCurrentPage(selected+1)
    };
  return (
    <div className="flex justify-between items-center py-2 px-4">
        <DropDown onSelect={handleSelect} options={showPerPageOptions} />
        <ReactPaginate
            breakLabel="..."
            forcePage={activePage-1}
            nextLabel={
                <span className="text-sm inline-flex items-center rounded-r-md px-2 py-3 text-secondary-400 ring-1 ring-inset ring-secondary-200 hover:bg-secondary-500 focus:z-20 focus:outline-offset-0">
                    <FaChevronRight />
                </span>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={calculatePageCount()}
            previousLabel={
                <span className="text-sm inline-flex items-center rounded-l-md px-2 py-3 text-secondary-400 ring-1 ring-inset ring-secondary-200 hover:bg-gray-50">
                    <FaChevronLeft />
                </span>
            }
            renderOnZeroPageCount={null}
            breakClassName="inline-flex items-center px-4 py-2 text-sm font-semibold text-secondary-400 ring-1 ring-inset ring-secondary-200 focus:outline-offset-0"
            activeClassName="bg-primary/30 text-primary border border-primary box-border z-20"
            pageClassName="z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-secondary-200 hover:bg-secondary-500"
            containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
        />
    </div>
  )
}

export default TablePagination