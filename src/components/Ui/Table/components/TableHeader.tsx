import { ITableHeaderProps } from "../lib/types/TableTypes"

const TableHeader = ({children,colSpan=1,rowSpan=1}:ITableHeaderProps) => {
  return (
    <th colSpan={colSpan} rowSpan={rowSpan}>
      <div className="flex flex-wrap justify-center items-center gap-2 py-1 px-2">
        {children}
      </div>
    </th>
  )
}

export default TableHeader