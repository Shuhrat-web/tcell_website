import { ITableControlsProps } from "../lib/types/TableTypes"

const TableControls = ({children}:ITableControlsProps) => {
  return (
    <div className="py-3">
      {children}
    </div>
  )
}

export default TableControls