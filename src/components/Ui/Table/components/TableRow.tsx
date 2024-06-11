import { IUiTypes } from "@/lib/shared/types/IGlobalTypes"
import { ITableRowProps, ITableRowSettings } from "../lib/types/TableTypes"
import TableColumn from "./TableColumn"

const TableRow = ({children,showSelect=false, color='none'}:ITableRowProps) => {
    const settings:ITableRowSettings = {
      color: {
        primary: '',
        secondary: 'bg-secondary-200',
        success: '',
        warning: '',
        danger: '',
        none: ''
      }
    }
  return (
    <tr className={`${settings.color[color as keyof IUiTypes]} border-b border-secondary-200`}>
      {
        showSelect &&
        <TableColumn>
          <input type="checkbox" />
        </TableColumn>
      }
      {children}
    </tr>
  )
}

export default TableRow