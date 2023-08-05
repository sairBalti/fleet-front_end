import { useTable,useFilters,useGlobalFilter,useAsyncDebounce } from "react-table"
import { MapProvider } from "./map-context";
import MarkerButton from "./MarkerButton";
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
})
        {const count = preGlobalFilteredRows.length
            const [value, setValue] = useState(globalFilter)
            const onChange = useAsyncDebounce(value => {
                setGlobalFilter(value || undefined)
            }, 200)
            return (
                <label className="flex gap-x-2 items-baseline">
                  <span className="text-gray-700">Search: </span>
                  <input
                    type="text"
                    class="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={value || ""}
                    onChange={(e) => {
                      setValue(e.target.value);
                      onChange(e.target.value);
                    }}
                    placeholder={`${count} records...`}
                  />
                </label>
              );
        }

       export function defaultColumnFilter({column: { filterValue, preFilteredRows, setFilter, id, render },})
        {
            const options = React.useMemo(() => {
                const options = new Set();
                preFilteredRows.forEach((row) => {
                  options.add(row.values[id]);
                });
                return [...options.values()];
              }, [id, preFilteredRows]);
              return(<label className="flex gap-x-2 items-baseline">
              <span className="text-gray-700">{render("Header")}: </span>
              <select
                className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name={id}
                id={id}
                value={filterValue}
                onChange={(e) => {
                  setFilter(e.target.value || undefined);
                }}
              >
                <option value="">All</option>
                {options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          );
        
        }
        export function StatusPill({ value }) {
            const status = value ? value.toLowerCase() : "unknown";
          
            return (
              <span
                className={classNames(
                  "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
                  status.startsWith("active") ? "bg-green-100 text-green-700" : null,
                  status.startsWith("inactive") ? "bg-yellow-100 text-yellow-700" : null,
                  status.startsWith("offline") ? "bg-red-100 text-red-700" : null
                )}
              >
                {status}
              </span>
            );
          }
          
          export function LocateCell({ value, column, row }) {
            // function handleClick() {
            //   //console.log(flying);
            //   row.original[column.mapAccessor].flyTo(row.original[column.posAccessor]);
            // }
          
            return (
              <>
                <MapProvider>
                  <MarkerButton pos={row.original[column.posAccessor]} />
                </MapProvider>
              </>
            );
          }

