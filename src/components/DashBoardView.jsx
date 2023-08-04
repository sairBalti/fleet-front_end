import { FaSearch } from "react-icons/fa"

function DashBoardView(){
  return (
    <div>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Email</th>
        </tr>
      </thead>
     
    </table>
    </div>
  )
}

export default DashBoardView
