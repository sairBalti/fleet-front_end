import { usePagination, useTable } from "react-table"
import {AiFillEdit} from "react-icons/ai"
function Drivertable({columns,data}){
  //console.log('columnsthfasdfhfjasdfjk',columns)
  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    page, 
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow 
  } = useTable({
    columns,
    data
  }, usePagination );
 
  const {pageIdex} = state;

  return (
    <>
  
    <div className="p-[1rem]">
       <table className="font-sans border-collapse w-[100%]" {...getTableProps()}>
      <thead >
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className=" border-solid border-[1px] text-left p-[8px]" {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody  {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td className=" border-solid border-[1px] text-left p-[8px]" {...cell.getCellProps()}>{cell.render("Cell")} </td>;
              })}
               
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="pt-[2rem]">
      <span>
        page{' '}
        <strong>
          {pageIdex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <button className="bg-blue-500 hover:bg-blue-600 text-white text-center rounded w-[100px] mr-[1rem] ml-[1rem]"
       onClick={() => previousPage()} disabled={!canPreviousPage}>previous</button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white text-center rounded w-[100px]" onClick={() => nextPage()}disabled = {!canNextPage}>next</button>
    </div>
   

    </div>
    </>
   
  );
}
export default Drivertable