import { Fragment } from "react";

//interfaces
import { TableComponentProps, ID } from "@/interfaces";

//components
import TableRowComponent from './tableRow';

export default function TableComponent<T extends ID>(props: TableComponentProps<T>) {

    const { data, header, editAction, deleteAction } = props;
  
    return(
        <table className="w-full text-left text-gray-500 rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-blue-50">
                <tr>
                    {
                      header.map((item=>{
                        return(
                          <th scope="col" className="px-6 py-3" key={item.key as string}>
                            {item.label}
                          </th>
                        )
                      }))
                    }
                    <th scope="col" className="px-6 py-3" key={"actions"}></th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((item, index)=>{
                  return(
                    <Fragment >
                      <TableRowComponent item={item} header={header} editAction={editAction} deleteAction={deleteAction} />
                    </Fragment>
                  )
                })
            }
            </tbody>
        </table>
    )
  }
  
  
