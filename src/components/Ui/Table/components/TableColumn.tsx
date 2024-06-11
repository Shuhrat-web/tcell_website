import { ITableColumn } from '../lib/types/TableTypes'

const TableColumn = ({children,rowSpan=1,colSpan=1}:ITableColumn) => {
  return (
    <td rowSpan={rowSpan} colSpan={colSpan}>
      <div className='flex flex-wrap justify-center px-2 items-center py-2'>
        {children}
      </div>
    </td>
  )
}

export default TableColumn