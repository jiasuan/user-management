//interfaces
import { TableRowProps, ID } from "@/interfaces";

//components
import { DeleteIcon, EditIcon } from "@/components/atoms/icons";  


export default function TableRowComponent<T extends ID>(props: TableRowProps<T>) {
  
    const { header, item, editAction, deleteAction } = props;
  
    return(
      <tr key={`table-row-${item.id}`} className="text-xs bg-white border-b">
      {
        header.map((headerItem)=>{
  
          const rowKey = headerItem.key
          const rowLabel = String(item[rowKey])
  
          return(
            <td className="px-6 py-2.5" key={`table-row-label-${rowLabel}`}>{rowLabel}</td>
          )
        })
      }
     
      <td>
        <div className="flex justify-center">
        {
          editAction && 
          <div className='has-tooltip'>
              <span className='text-xxs tooltip rounded p-1.5 bg-gray-900 -mt-8 text-white'>Edit</span>
              <button type="button" className="hover:bg-gray-100 rounded-lg text-sm p-1"  onClick={()=>{editAction(item)}}>
                <EditIcon/>
              </button>
          </div>
        }
        {
          deleteAction && 
          <div className='has-tooltip'>
            <span className='text-xxs tooltip rounded p-1.5 bg-gray-900 -mt-8 text-white'>Delete</span>
            <button type="button" className="hover:bg-gray-100 rounded-lg text-sm p-1" onClick={()=>{deleteAction(item)}}>
              <DeleteIcon/>
            </button>
          </div>
        }
        </div>
      </td>
    </tr>
    )
}